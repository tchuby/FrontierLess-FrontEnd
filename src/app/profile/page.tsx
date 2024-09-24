"use client";

import React, { useState } from 'react';
import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";

function openProject() {
    const projectContainer = document.getElementById("projectContainer");

    console.log(projectContainer);

}

let cont =0;
export default function Profile() {

    const [project, setProject] = useState([{}]);

    const addCard = () => {
        const newProject = {
            key: cont + 2,
            pais: "AAAAA",
            status: "Em andamento",
            valor: "R$20.000,00",
            data: "06/10/2001",
            img: "/img/australia.png",
            autor: `${cont + 1}`,
        };

        setProject([...project, newProject]);
        cont++;
    };

    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full p-4">
                <section className="w-full min-h-screen">
                    <div className="w-full text-center mb-4">
                        <button type="button" onClick={addCard} title="Cria Projeto" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+ Projetos</button>
                    </div>
                    <Card onClick={openProject} pais="Australia" status="Em andamento" valor="R$20.000,00" data="06/10/2001" img="/img/australia.png" autor="Luan" />
                    <Card pais="Irlanda" status="Abandonado" valor="R$10.000,00" data="09/09/2009" img="/img/irlanda.png" autor="Henrique" />
                   
                    {project.map((project) => (
                        <Card key={project.key} pais={project.pais} status={project.status} valor={project.valor} data={project.data} img={project.img} autor={project.autor}/>
                    ))}


                </section>
                <section className="w-full min-h-screen" id="projectContainer">
                    <Project />
                </section>
            </div>
        </div>


    )

}