import React, { useState } from 'react';
import Input from "../Input";
import Accordion from "./components/Accordion";

type Etapa = {
    key: number;
};


interface Props {
    project: any
}

let cont = 0;
export default function Project({ project }: Props) {
    const [etapas, setEtapas] = useState<Etapa[]>([]);

    const addEtapa = () => {

        const newEtapa: Etapa = {
            key: cont,
        };

        setEtapas([...etapas, newEtapa]);
        cont++;
    };

    return (
        <form>
            <div className="space-y-5">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="flex justify-between">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.pais}</h2>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.autor}</h2>

                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <Input id="valorEstimado" name="valorEstimado" type="text" children="Valor Estimado" value={project.etapa} />
                            </div>

                            <div className="max-w-sm mx-auto w-full">
                                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                                <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="Andamento">Andamento</option>
                                    <option value="Hiato">Hiato</option>
                                    <option value="Abandonado">Abandonado</option>
                                </select>
                            </div>

                            <div className="max-w-sm mx-auto w-full">
                                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                                <select id="tipo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="escola">Escola</option>
                                    <option value="faculdade">Faculdade</option>
                                    <option value="trabalho">Trabalho</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-full text-center mb-4">
                        <button type="button" onClick={addEtapa} title="Adicionar Etapa" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+ Etapas</button>
                    </div>
                    {etapas.map((etapa) => (
                        <Accordion key={etapa.key} />
                    ))}

                </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-x-6">
                <button type="button" className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Deletar</button>
                <div>
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-lg">Cancelar</button>
                    <button type="submit" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-r-lg">Salvar</button>
                </div>
            </div>
        </form>
    )
}
