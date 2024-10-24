"use client";

import React, { useState, useEffect } from 'react';
import Card from "@/components/Card";
import FormSearch from "@/components/FormSearch";
import Project from "@/components/Project";
import iProject from "@/types/iProject";

export default function FindProject() {
    const [oProject, setProject] = useState<iProject[]>([]);
    const [selectedProject, setSelectedProject] = useState<iProject | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://07e2fc8b-a91a-47a9-a85e-f5e45e515b2e.mock.pstmn.io/project");
                const data = await response.json();

                // Verifique se o dado retornado é um array
                if (Array.isArray(data)) {
                    setProject(data);
                } else {
                    console.error("Dados retornados não são um array", data);
                    setProject([]); // Defina como array vazio se não for um array
                }
            } catch (error) {
                console.error("Erro ao buscar projetos:", error);
                setProject([]); // Em caso de erro, defina como array vazio
            }
        };
        fetchProjects();
    }, []);

    const openProject = (project: iProject) => {
        setSelectedProject(project);
    };

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">
                {/* Verifique se oProject é um array antes de usar o map */}
                <section className="w-full min-h-screen flex flex-col items-center shadow-lg p-4">
                    {oProject.length > 0 ? (
                        oProject.map((project) => (
                            <Card key={project.id} project={project} onClick={() => openProject(project)} />
                        ))
                    ) : (
                        <p>Nenhum projeto encontrado.</p>
                    )}
                </section>

                <section className="w-full min-h-screen shadow-lg p-4" id="projectContainer">
                    {selectedProject && (
                        <Project key={selectedProject.id} project={selectedProject} findProject={true} />
                    )}
                </section>
            </div>
        </div>
    );
}
