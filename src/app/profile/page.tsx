"use client";

import React, { useState, useEffect } from 'react';
import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";

type Project = {
    id: number;
    pais: string;
    status: string;
    tipo: string;
    img: string;
    author: string;
};

export default function Profile() {
    const [oProject, setProject] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://07e2fc8b-a91a-47a9-a85e-f5e45e515b2e.mock.pstmn.io/myProjects");
                const data: Project[] = await response.json();
                setProject(data);
            } catch (error) {
                console.error("Erro ao buscar projetos:", error);
            }
        };
        fetchProjects();
    }, []);

    const openProject = (project: Project) => {
        setSelectedProject(project);
    };

    const addProject = () => {
        const newProject: Project = {
            id: 0,
            pais: "",
            status: "",
            tipo: "",
            img: "/img/brasil.png",
            author: "",
        };
        setProject([...oProject, newProject]);
    };


    const handleDeleteProject = () => {
        /*const updatedProject = nProject.filter((project) => project.key !== key);
        setNewProject(updatedProject);
        setProject(updatedProject);*/
    };

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">

                <section className="w-full min-h-screen flex flex-col items-center shadow-lg">
                    <div className="w-full text-center mb-4">
                        <button type="button" onClick={addProject} title="Cria Projeto" className="hover:text-blue-900 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+ Projetos</button>
                    </div>

                    {oProject.map((project, i) => (
                        <Card key={i} project={project} onClick={() => openProject(project)} />
                    ))}

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