"use client";

import React, { useState } from 'react';
import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";

type Project = {
    key: number;
    pais: string;
    status: string;
    valor: string;
    tipo: string;
    img: string;
    autor: string;
};

let cont = 0;
export default function Profile() {
    const [nProject, setNewProject] = useState<Project[]>([]);
    const [oProject, setProject] = useState<Project[]>([]);

    const newProject: Project = {
        key: cont + 1,
        pais: "AAAAA",
        status: "Em andamento",
        valor: `R$${30+cont},00`,
        tipo: "Trabalho",
        img: "/img/australia.png",
        autor: `${cont + 1}`,
    };

    const addProject = () => {
        setNewProject([...nProject, newProject]);
        setProject([newProject]);
        cont++;
    };

    const openProject = () => {
        setProject([newProject]);
        cont++;
    }

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">

                <section className="w-full min-h-screen flex flex-col items-center">
                    <div className="w-full text-center mb-4">
                        <button type="button" onClick={addProject} title="Cria Projeto" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+ Projetos</button>
                    </div>

                    {nProject.map((project) => (
                        <Card key={project.key} project={project} onClick={openProject} />
                    ))}

                </section>

                <section className="w-full min-h-screen" id="projectContainer">

                    {oProject.map((project) => (
                        <Project key={project.key} project={project} />
                    ))}

                </section>

            </div>
        </div>


    )

}