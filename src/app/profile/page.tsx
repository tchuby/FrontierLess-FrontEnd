"use client";

import { useEffect, useState } from 'react';
//Contexts
import { useProject } from "@/contexts/ProjectContext";
import { useStep } from '@/contexts/StepContext';
import { useComment } from '@/contexts/CommentContext';
import { useUser } from '@/contexts/UserContext';
//Components
import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";
import LoadingScreen from '@/components/LoadingScreen';
//Types
import iProject from "@/types/iProject"
//Service
import { getProfile } from '@/services/profileService';

export default function Profile() {
    const { project, setProject, addProject } = useProject();
    const { getSteps } = useStep();
    const { getComments } = useComment();
    const { user } = useUser();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getProfile();
                const uComment = await getComments(data.userProjects);
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

    const hAddProject = () => {
        const newProject: iProject = {
            destination: "",
            exchangeType: "",
            User: {
                id: user?.id || -1,
                email: user?.email || "",
                name: user?.name || "",
            },
            steps: [],
            comments: [],
            quantComments: 0,
            quantSteps: 0,
            averageGrade: 0
        }
        addProject(newProject);
    };

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">
                <section className="w-full min-h-screen flex flex-col items-center shadow-lg">
                    <div className="w-full text-center mb-4">
                        <button type="button" onClick={hAddProject} title="Cria Projeto" className="hover:text-blue-900 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+ Projetos</button>
                    </div>
                    {Array.isArray(project) && project.length > 0 ? (
                        project.map((proj) => (
                            <Card key={proj.id} project={proj} onClick={() => openProject(proj)} />
                        ))
                    ) : (
                        <div className="text-gray-500">Nenhum projeto Encontrado</div>
                    )}

                </section>

                <section className="w-full p-4 min-h-screen shadow-lg" id="projectContainer">
                    {project?.find((proj) => proj.selected) ? (
                        <Project
                            key={project.find((proj) => proj.selected)?.id}
                            sProject={project.find((proj) => proj.selected)!}
                        />
                    ) : (
                        <div className="text-gray-500 flex justify-center">Nenhum projeto selecionado</div>
                    )}
                </section>
            </div>
        </div>
    )
}
