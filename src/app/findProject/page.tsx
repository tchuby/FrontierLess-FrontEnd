"use client";

import { useProject } from "@/contexts/ProjectContext";
import { useState, useEffect } from 'react';

import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";
import iProject from "@/types/iProject"

export default function findProject() {
    const { project, getProjects } = useProject();
    const [selectedProject, setSelectedProject] = useState<iProject | null>(null);

    useEffect(() => {
        getProjects();
    }, []);

    const openProject = (project: iProject) => {
        setSelectedProject(project);
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
                    {selectedProject && (
                        <Project key={selectedProject.id} selectedProject={selectedProject} setSelectedProject={setSelectedProject} findProject={findProject} />
                    )}
                </section>
            </div>
        </div>
    )
}