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
    locked?: boolean;
};

export default function Profile() {
    const [oProject, setProject] = useState<Project[]>([]);

    const Add = () => {

        const newProject: Project = {
            key: 1,
            pais: "",
            status: "",
            tipo: "",
            img: "/img/australia.png",
            autor: "",
            locked: true
        };
        setProject([...oProject, newProject]);
    }
    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">

                <section className="w-full min-h-screen flex flex-col items-center">
                    <div className="w-full text-center mb-4">
                        ### Filtros ###
                        <button onClick={Add}>ADD</button>
                    </div>
                    <Card key={1} project="AAA" />
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