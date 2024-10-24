"use client";

import { useState, useEffect } from 'react';
import { getProjects } from "@/services/projectServices";
import { useProject } from "@/contexts/ProjectContext";

import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";
import iProject from "@/types/iProject"

export default function Profile() {
    const { project, setProject, addProject, getTotalCost, getQuantComment } = useProject();
    const [selectedProject, setSelectedProject] = useState<iProject | null>(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const projects = await getProjects();
                setProject(projects.projects);
            } catch (error) {
                console.error("Erro ao buscar projetos:", error);
            }
        };
        loadProjects();
    }, []);

    useEffect(() => {
        const getData = () => {
            if (!project || project.length === 0) return;
            project.forEach((proj) => {
                proj.steps?.forEach((step) => {
                    getTotalCost(step.cost || 0, proj.id, step.id || -1);
                });

                getQuantComment(proj.comments?.length || 0, proj.id);
            });

        };
        getData();
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
                    {project.map((project) => (
                        <Card key={project.id} project={project} onClick={() => openProject(project)} />
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