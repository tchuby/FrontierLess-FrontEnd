"use client";

import { useState, useEffect } from 'react';
import { useProject } from "@/contexts/ProjectContext";
import { useUser } from '@/contexts/UserContext';

import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";
import iProject from "@/types/iProject"

export default function Profile() {
    const { project, addProject, getProjects } = useProject();
    const [selectedProject, setSelectedProject] = useState<iProject | null>(null);
    const { user } = useUser();

    useEffect(() => {
        getProjects();
    }, []);

    const openProject = (project: iProject) => {
        setSelectedProject(project);
    };

    const hAddProject = () => {
        const newProject: iProject = {
            destination: "",
            exchangeType: "",
            User: {
                id: user?.id || -1,
                email: user?.email || "",
                name: user?.name || "",
            }
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
                        project.some((proj) => proj.User?.id === (user?.id || -1)) ? (
                            project.map((proj) => {
                                return proj.User?.id === (user?.id || -1) ? (
                                    <Card key={proj.id} project={proj} onClick={() => openProject(proj)} />
                                ) : null;
                            })
                        ) : (
                            <div className="text-gray-500">Nenhum projeto Encontrado</div>
                        )) : null}

                </section>

                <section className="w-full p-4 min-h-screen shadow-lg" id="projectContainer">
                    {selectedProject && (
                        <Project key={selectedProject.id} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
                    )}
                </section>

            </div>
        </div>


    )

}