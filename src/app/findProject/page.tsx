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
    autor: string;
};


export default function findProject() {
    const [oProject, setProject] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);


    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://07e2fc8b-a91a-47a9-a85e-f5e45e515b2e.mock.pstmn.io/project");
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

    const findProject = true;

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">

                <section className="w-full min-h-screen flex flex-col items-center shadow-lg p-4">
                    {oProject.map((project) => (
                        <Card key={project.id} project={project} onClick={() => openProject(project)} />
                    ))}
                </section>

                <section className="w-full min-h-screen shadow-lg p-4" id="projectContainer">
                    {selectedProject && (
                        <Project key={selectedProject.id} project={selectedProject} findProject={findProject}/>
                    )}
                </section>
            </div>
        </div>
    )
}