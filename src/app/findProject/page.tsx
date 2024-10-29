"use client";

import { useState, useEffect } from 'react';
//Contexts
import { useProject } from "@/contexts/ProjectContext";
import { useStep } from '@/contexts/StepContext';
import { useComment } from '@/contexts/CommentContext';
//Components
import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";
import LoadingScreen from '@/components/LoadingScreen';
//Types
import iProject from "@/types/iProject"

export default function findProject() {
    const { project, setProject, getProjects } = useProject();
    const { getSteps } = useStep();
    const { getComments } = useComment();

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getProjects();
                const uComment = await getComments(data);
                const uProject = await getSteps(uComment);

                setProject(uProject);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    const openProject = (selectedProj: iProject) => {
        const updatedProjects = project.map((proj) =>
            proj.id === selectedProj.id ? { ...proj, selected: true } : { ...proj, selected: false }
        );
        setProject(updatedProjects);
    };

    const findProject = true;

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">

                <section className="w-full min-h-screen flex flex-col items-center shadow-lg p-4">
                    {project.map((project) => (
                        <Card key={project.id} project={project} onClick={() => openProject(project)} />
                    ))}
                </section>

                <section className="w-full min-h-screen shadow-lg p-4" id="projectContainer">
                    {project?.find((proj) => proj.selected) ? (
                        <Project
                            key={project.find((proj) => proj.selected)?.id}
                            sProject={project.find((proj) => proj.selected)!}
                            findProject={findProject}
                        />
                    ) : (
                        <div className="text-gray-500 flex justify-center">Nenhum projeto selecionado</div>
                    )}
                </section>
            </div>
        </div>
    )
}