"use client";

import { createContext, useContext, useState } from 'react';
import iProject from "@/types/iProject"

interface Props {
    children: React.ReactNode;
}

interface ProjectContextType {
    project: iProject[];
    setProject: (projects: iProject[]) => void;
    addProject: () => void;
    deleteProject: (id: number) => void;
    saveProject: (id: number, updatedProject: iProject) => void;
    getTotalCost: (cost: number, projectID: number, stepID: number) => void;
    getQuantComment: (quant: number, projectID: number) => void;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export default function ProjectProvider({ children }: Props) {
    const [project, setProject] = useState<iProject[]>([]);

    const addProject = () => {
        const newProject: iProject = {
            id: Date.now(),
            pais: "",
            status: "",
            tipo: "",
            img: "/img/brasil.png",
            author: "",
        };
        setProject((prevProjects) => [...prevProjects, newProject]);
    }

    const deleteProject = (id: number) => {
        setProject((prevProjects) => prevProjects.filter(project => project.id !== id));
    };

    const saveProject = (id: number, updatedProject: iProject) => {
        setProject((prevProjects) =>
            prevProjects.map((project) => (project.id === id ? updatedProject : project))
        );
    };

    const getTotalCost = (cost: number, projectID: number, stepID: number) => {
        setProject((prevProjects) => {
            const uProjects = [...prevProjects];
            const project = uProjects.find(p => p.id === projectID);

            if (project && project.steps) {
                const steps = project.steps;
                let totalCost = 0;

                steps.forEach(e => {
                    if (e.id === stepID) {
                        e.cost = cost;
                    }
                    totalCost += e.cost || 0;
                });
                project.totalCost = totalCost || 0
            }
            return uProjects;
        });
    };

    const getQuantComment = (quant: number, projectID: number) => {
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

    return (
        <ProjectContext.Provider value={{ project, setProject, addProject, deleteProject, saveProject, getTotalCost, getQuantComment }}>
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
