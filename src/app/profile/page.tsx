"use client";

import React, { useState } from 'react';
import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";

type Project = {
    key: number;
    pais: string;
    status: string;
    tipo: string;
    img: string;
    autor: string;
};

export default function Profile() {
    const [nProject, setNewProject] = useState<Project[]>([]);
    const [oProject, setProject] = useState<Project[]>([]);

    const id = Math.floor(Math.random() * 100) + 1;

    const addProject = () => {
        const newProject: Project = {
            key: id,
            pais: "",
            status: "",
            tipo: "",
            img: "/img/australia.png",
            autor: "",
        };
        setNewProject([...nProject, newProject]);
        setProject([newProject]);
    };

    const openProject = () => {
        const newProject: Project = {
            key: id,
            pais: "Test",
            status: "Test",
            tipo: "Test",
            img: "/img/australia.png",
            autor: "Test",
        };
        setProject([newProject]);
    }

    const handleDeleteProject= (key: number) => {
        const updatedProject = nProject.filter((project) => project.key !== key);
        setNewProject(updatedProject);
        setProject(updatedProject);
    };

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">

                <section className="w-full min-h-screen flex flex-col items-center">
                    <div className="w-full text-center mb-4">
                        <button type="button" onClick={addProject} title="Cria Projeto" className="hover:text-blue-900 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+ Projetos</button>
                    </div>

                    {nProject.map((project) => (
                        <Card key={project.key} project={project} onClick={openProject} />
                    ))}

                </section>

                <section className="w-full min-h-screen" id="projectContainer">

                    {oProject.map((project) => (
                        <Project key={project.key} project={project} onDelete={handleDeleteProject} />
                    ))}

                </section>

            </div>
        </div>


    )

}