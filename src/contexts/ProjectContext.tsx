"use client";

import { createContext, useContext, useState } from 'react';
import { getAllProjectsService, getItemsService, addProjectService, getReviewService } from "@/services/projectServices";
import { useUser } from './UserContext';

import iProject from "@/types/iProject";

interface Props {
    children: React.ReactNode;
}

interface ProjectContextType {
    project: iProject[];
    setProject: (projects: iProject[]) => void;
    addProject: (newProject: iProject) => void;
    deleteProject: (id: number) => void;
    saveProject: (id: number, updatedProject: iProject) => void;
    getProjects: () => void
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export default function ProjectProvider({ children }: Props) {
    const [project, setProject] = useState<iProject[]>([]);
    const { user } = useUser();

    const addProject = async (newProject: iProject) => {
        if (newProject.destination === "" && newProject.exchangeType === "") {
            setProject((prevProjects) => [...prevProjects, newProject]);
        }
        if (newProject.destination !== "" && newProject.exchangeType !== "") {
            const data = await addProjectService(newProject);
        }
    }

    const saveProject = (id: number, updatedProject: iProject) => {
    };

    const deleteProject = (id: number) => {
    };

    const getProjectData = async (projectID: number) => {
        let steps = [];
        let comments = [];
        let quantComments = 0;
        let averageGrade = 0;
        try {
            steps = await getItemsService(projectID);
            comments = await getReviewService(projectID);
            quantComments = comments.length;

            if (quantComments > 0) {
                const totalGrades = comments.reduce((acc: any, comment: any) => acc + comment.grade, 0);
                averageGrade = totalGrades / quantComments;
            }
        } catch (error) {
            console.error(`Erro ao buscar dados do projeto ${projectID}:`, error);
        }
        setProject(prevProjects => {
            const updatedProjects = prevProjects.map(proj => {
                if (proj.id === projectID) {
                    return {
                        ...proj,
                        steps: steps || [],
                        quantSteps: steps.length,
                        comments: comments || [],
                        quantComments: comments.length,
                        averageGrade: averageGrade
                    };
                }
                return proj;
            });
            return updatedProjects;
        });
    };


    const getProjects = async () => {
        try {
            const projects = await getAllProjectsService();
            setProject(projects.projects);
            await Promise.all(projects.projects.map((proj: iProject) => getProjectData(proj.id || -1)));
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
