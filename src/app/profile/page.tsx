"use client";

import { useState, useEffect } from 'react';
import { useProject } from "@/contexts/ProjectContext";
import { useUser } from '@/contexts/userContext';

import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";
import iProject from "@/types/iProject"

export default function Profile() {
    const { project, addProject, searchProject, getSumCostComment } = useProject();
    const [selectedProject, setSelectedProject] = useState<iProject | null>(null);
    const { email } = useUser();

    useEffect(() => {
        searchProject();
        getSumCostComment();
    }, []);

    const openProject = (project: iProject) => {
        setSelectedProject(project);
    };

    const hAddProject = () => {
        addProject();
    };

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">

                <section className="w-full min-h-screen flex flex-col items-center shadow-lg">
                    <div className="w-full text-center mb-4">
                        <button type="button" onClick={hAddProject} title="Cria Projeto" className="hover:text-blue-900 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+ Projetos</button>
                    </div>
                    {project.map((project) => {
                        return project.User?.email === email ? (
                            <Card key={project.id} project={project} onClick={() => openProject(project)} />
                        ) : null;
                    })}
                </section>

                <section className="w-full p-4 min-h-screen shadow-lg" id="projectContainer">
                    {selectedProject && (
                        <Project key={selectedProject.id} project={selectedProject} />
                    )}
                </section>

            </div>
        </div>


    )

}