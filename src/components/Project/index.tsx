import React, { useState, useEffect, useContext } from 'react';

import Select from '../Select';
import Accordion from "./components/Accordion";
import H2 from '../H2';
import Comments from '../Comments';
import SaveButton from './components/SaveButton';
import CancelButton from './components/CancelButton';
import DeleteButton from './components/DeleteButton';
import Button from '../Button';
import iStep from "@/types/iStep"

interface Props {
    project: any,
    findProject?: boolean
}

export default function Project({ project, findProject }: Props) {
    const [steps, setSteps] = useState<iStep[]>([]);

    const handleDeleteEtapa = () => {
        /*    const updatedEtapas = steps.filter((step) => step.key !== key);
            setSteps(updatedEtapas);*/
    };

    const newStep: iStep = {
        id: 0,
        name: "",
        cost: 0,
        description: ""
    };

    useEffect(() => {
        if (project.steps) {
            setSteps(project.steps);
        }
    }, [project.steps]);

    const addStep = () => {
        setSteps([...steps, newStep]);
    };

    return (
        <form>
            <div className="border-b border-gray-900/10 pb-12">
                <div className="flex justify-between">
                    <input type="text" name="destination" value={project.pais} hidden />
                    <H2>{project.pais}</H2>
                    <H2>{project.author}</H2>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Select
                        id="status"
                        name="status"
                        label="Status"
                        disabled={findProject}
                        select={project.status}>
                        <option value="andamento">Andamento</option>
                        <option value="hiato">Hiato</option>
                        <option value="finalizado">Finalizado</option>
                        <option value="abandonado">Abandonado</option>
                    </Select>

                    <Select
                        id="tipo"
                        name="exchangeType"
                        label="Tipo"
                        disabled={findProject}
                        select={project.exchangeType}>
                        <option value="idioma">Idioma</option>
                        <option value="escola">Escola</option>
                        <option value="faculdade">Faculdade</option>
                        <option value="pós-graduação">Pós-graduação</option>
                        <option value="pesquisa">Pesquisa</option>
                        <option value="turismo">Turismo</option>
                    </Select>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custo total</label>
                        <h2 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{`R$${project.totalCost}`}</h2>
                    </div>
                </div>
            </div>

            <div>
                <div className="w-full text-center mb-4">
                    <button disabled={findProject} type="button" onClick={addStep} title="Adicionar Etapa" className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-900">+ Etapas</button>
                </div>
                {steps.map((step, i) => (
                    <Accordion key={project.id} step={step} index={project.id}/>
                ))}
            </div>

            {!findProject && (
                <>
                    <div className="mt-4 pb-4 flex flex-col md:flex-row items-center justify-between border-b border-gray-900/10">
                        <DeleteButton project={project} />
                        <div className="flex flex-col md:flex-row space-x-1">
                            <SaveButton />
                            <CancelButton />
                        </div>
                    </div>
                </>
            )}

            {findProject && (
                <Button type="button">
                    Seguir Projeto
                </Button>
            )}

            <div >
                <Comments project={project} />
            </div>
        </form>
    )
}
