"use client";

import { createContext, useContext, useState } from 'react';

//Services
import { getAllProjectsService, addProjectService, deleteProjectService } from "@/services/projectServices";
import { getItemsService } from '@/services/projectSteps';
import { addReviewService, getReviewService, updateReviewService, deleteReviewService } from '@/services/commentService';

//Types
import iProject from "@/types/iProject";
import iComment from '@/types/iComment';

interface Props {
    children: React.ReactNode;
}

interface ProjectContextType {
    //PROJECT
    project: iProject[];
    setProject: (projects: iProject[]) => void;
    addProject: (newProject: iProject) => void;
    deleteProject: (id: number) => void;
    updateProject: (id: number, updatedProject: iProject) => void;
    getProjects: () => void
    //COMMENT
    addComment: (newCommet: iComment) => void;
    deleteComment: (projectId: any, commentID: any) => Promise<void>;
    updateComment: (comment: iComment, commentID: any, projectID: any) => Promise<void>;
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export default function ProjectProvider({ children }: Props) {
    const [project, setProject] = useState<iProject[]>([]);


    //PROJECT
    const addProject = async (newProject: iProject) => {
        if (newProject.destination === "" && newProject.exchangeType === "") {
            setProject((prevProjects) => [...prevProjects, newProject]);
            return;
        }
        const data = await addProjectService(newProject);
        console.log(data.message)
    }

    const updateProject = (id: number, updatedProject: iProject) => {
    };

    const deleteProject = async (projectId: number) => {
        const data = await deleteProjectService(projectId);
        if (data) {
            setProject((prevProjects: iProject[]) => prevProjects.filter(proj => proj.id !== projectId));
        }
    };

    const getProjectData = async (projectID: number) => {
        let steps = [];
        let comments = [];
        let quantComments = 0;
        let averageGrade = 0;

        try {
            comments = await getReviewService(projectID);
            quantComments = comments.length;
            if (quantComments > 0) {
                const totalGrades = comments.reduce((acc: any, comment: any) => acc + comment.grade, 0);
                averageGrade = totalGrades / quantComments;
            }
        } catch (error) {
            console.error(`Erro: `, error);
        }

        try {
            steps = await getItemsService(projectID);
        } catch (error) {
            console.error(`Erro: `, error);
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

    //COMMENTS
    const addComment = async (newComment: iComment) => {
        try {
            const data = await addReviewService(newComment);
            const updatedProjects: iProject[] = project.map((proj) => {
                if (proj.id === data.project.id) {
                    return { ...proj, comments: [...data.reviews] };
                }
                return proj;
            });
            setProject(updatedProjects);
            console.log(data);
        } catch (error) {
            console.error('Erro ao adicionar comentário:', error);
        }
    };

    const updateComment = async (comment: iComment, commentID: any, projectID: any) => {
        try {
            const data = await updateReviewService(comment, commentID);
            const updatedProjects: iProject[] = project.map((proj) => {
                if (proj.id === projectID) {
                    return {
                        ...proj,
                        comments: (proj.comments || []).map((comm) =>
                            comm.id === commentID ? { ...comm, ...data } : comm
                        )
                    };
                }
                return proj;
            });

            setProject(updatedProjects);
            console.log('Comentário atualizado:', data);
        } catch (error) {
            console.error('Erro ao atualizar comentário:', error);
        }
    };

    const deleteComment = async (projectID: any, commentID: any) => {
        try {
            await deleteReviewService(projectID, commentID);
            const updatedProjects: iProject[] = project.map((proj) => {
                if (proj.id === projectID) {
                    return {
                        ...proj,
                        comments: (proj.comments || []).filter((comm) => comm.id !== commentID)
                    };
                }
                return proj;
            });

            setProject(updatedProjects);
            console.log(`Comentário ${commentID} deletado do projeto ${projectID}`);
        } catch (error) {
            console.error('Erro ao deletar comentário:', error);
        }
    };


    return (
        <ProjectContext.Provider
            value={{
                project,
                setProject,
                addProject,
                deleteProject,
                updateProject,
                getProjects,
                addComment,
                deleteComment,
                updateComment,
            }}>
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
