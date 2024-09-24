"use client";

import Card from "@/components/Card"
import FormSearch from "@/components/FormSearch"
import Project from "@/components/Project";

function openProject() {
    const projectContainer = document.getElementById("projectContainer");
    
    console.log(projectContainer);

}

export default function Profile() {
    return (
        <div className="container mx-auto min-h-screen">
            <FormSearch />
            <div className="flex space-x-4 w-full">
                <section className=" p-4 w-full min-h-screen">
                    <Card onClick={openProject} pais="Australia" status="Em andamento" valor="R$20.000,00" data="06/10/2001" img="/img/australia.png" autor="Luan" />
                    <Card pais="Irlanda" status="Abandonado" valor="R$10.000,00" data="09/09/2009" img="/img/irlanda.png" autor="Henrique" />
                </section>
                <section id="projectContainer" className=" px-2 py-4 w-full min-h-screen">
                    <Project/>
                </section>
            </div>
        </div>


    )

}