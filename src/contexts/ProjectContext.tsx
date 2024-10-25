"use client";

import { createContext, useContext, useState } from 'react';
import { getProjectsService, getProjectItemsService, getProjectReviewService } from "@/services/projectServices";
import { useUser } from './UserContext';

import iProject from "@/types/iProject";

interface Props {
    children: React.ReactNode;
}

interface ProjectContextType {
    project: iProject[];
    setProject: (projects: iProject[]) => void;
    addProject: () => void;
    deleteProject: (id: number) => void;
    saveProject: (id: number, updatedProject: iProject) => void;
    getProjects: () => void
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export default function ProjectProvider({ children }: Props) {
    const [project, setProject] = useState<iProject[]>([]);
    const { user } = useUser();

    let cont = 0;
    const addProject = async () => {
        const newProject: iProject = {
            id: 10000 + cont,
            destination: "",
            exchangeType: "",
            User: {
                email: user?.email || "",
                id: user?.id || -1,
                name: user?.name || "",
            },
            img: "/img/brasil.png",
        };
        setProject((prevProjects) => [...prevProjects, newProject]);
        cont++;
    };

    const saveProject = (id: number, updatedProject: iProject) => {

    };

    const deleteProject = (id: number) => {
        setProject((prevProjects) => prevProjects.filter(project => project.id !== id));
    };

    const tCost = async (projectID: number) => {
        setProject((prevProjects) => {
            return prevProjects.map((proj) => {
                if (proj.id === projectID && proj.steps) {
                    const totalCost = proj.steps.reduce((acc, e) => acc + (e.cost || 0), 0);
                    return { ...proj, totalCost };
                }
                return proj;
            });
        });
    };

    const tComment = (quant: number, projectID: number) => {
        setProject((prevProjects) => {
            const updatedProjects = prevProjects.map((proj) => {
                if (proj.id === projectID) {
                    return { ...proj, quantComments: quant };
                }
                return proj;
            });
            return updatedProjects;
        });
    };

    const getData = (projects: iProject[]) => {
        if (!projects || projects.length === 0) return;
        projects.forEach(proj => {
            tCost(proj.id);
            tComment(proj.comments?.length || 0, proj.id);
        });
    };

    const getProjectData = async (projectID: number) => {
        const steps = await getProjectItemsService(projectID);

        setProject(prevProjects => {
            const updatedProjects = prevProjects.map(proj => {
                if (proj.id === projectID) {
                    return {
                        ...proj,
                        steps: steps,
                        quantSteps: steps.length,
                    };
                }
                return proj;
            });
            return updatedProjects;
        });
    };


    const getProjects = async () => {
        try {
            const projects = await getProjectsService();
            setProject(projects.projects);

            await Promise.all(projects.projects.map((proj: iProject) => getProjectData(proj.id)));
            getData(projects.projects);
        } catch (error) {
            console.error("Erro ao buscar projetos:", error);
        }
    };

    return (
        <ProjectContext.Provider value={{ project, setProject, addProject, deleteProject, saveProject, getProjects }}>
            {children}
        </ProjectContext.Provider>
    );
}

export const useProject = () => {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error("useProject must be used within a ProjectProvider");
    }
    return context;
};
