"use client";

import { createContext, useContext, useState } from 'react';
import { getProjectsService, getProjectItemsService, getProjectReviewService } from "@/services/projectServices";
import { useUser } from './UserContext';

import iProject from "@/types/iProject";
import { comment } from 'postcss';

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
    const randomInt = (max: number) => Math.floor(Math.random() * max + 10000);

    const addProject = async () => {
        const newProject: iProject = {
            id: randomInt(10000),
            destination: "",
            tipo: "",
            User: {
                email: user?.email || "",
                id: user?.id || -1,
                name: user?.name || "",
            },
            img: "/img/brasil.png",
        };
        setProject((prevProjects) => [...prevProjects, newProject]);
    };

    const deleteProject = (id: number) => {
        setProject((prevProjects) => prevProjects.filter(project => project.id !== id));
    };

    const saveProject = (id: number, updatedProject: iProject) => {
        setProject((prevProjects) =>
            prevProjects.map((project) => (project.id === id ? updatedProject : project))
        );
    };

    const tCost = (projectID: number) => {
        setProject((prevProjects) => {
            const updatedProjects = prevProjects.map((proj) => {
                if (proj.id === projectID) {
                    let totalCost = 0;
                    proj.steps?.forEach(e => {
                        totalCost = e.cost || 0 + totalCost
                    })
                    return { ...proj, totalCost: totalCost };
                }
                return proj;
            });
            return updatedProjects;
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
        const steps = await getProjectItemsService(projectID)
        //  const comments = await getProjectReviewService(projectID)
        setProject((prevProjects) => {
            const updatedProjects = prevProjects.map((proj) => {
                if (proj.id === projectID) {
                    return {
                        ...proj,
                        steps: steps,
                        //comments: comments,
                        quantSteps: steps.length
                    };
                }
                return proj;
            });
            return updatedProjects;
        });
    }

    const getProjects = async () => {
        try {
            const projects = await getProjectsService();

            projects.projects.forEach((proj: iProject) => {
                getProjectData(proj.id)
            });

            setProject(projects.projects);
            getData(projects.projects)
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
