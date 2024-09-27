import React, { useState } from 'react';
import Select from '../Select';
import Accordion from "./components/Accordion";
import H2 from '../H2';
import Comments from '../Comments';

type Etapa = {
    key: number;
    name: string;
    cost: string;
    description: string;
};


interface Props {
    project: any,
    onDelete: (key: number) => void;
}

let cont = 0;
export default function Project({ project, onDelete}: Props) {
    const [etapas, setEtapas] = useState<Etapa[]>([]);
    const addEtapa = () => {
        const newEtapa: Etapa = {
            key: cont,
            name: "",
            cost: "",
            description: ""
        };
        setEtapas([...etapas, newEtapa]);
        cont++;
    };

    const handleDeleteEtapa = (key: number) => {
        const updatedEtapas = etapas.filter((etapa) => etapa.key !== key); // Remove a etapa pela chave
        setEtapas(updatedEtapas); // Atualiza o estado com as etapas restantes
    };

    return (
        <form>
            <div className="border-b border-gray-900/10 pb-12">
                <div className="flex justify-between">
                    <input type="text" name="destination" value={project.pais} hidden />
                    <H2>{project.pais}</H2>
                    <H2>{project.autor}</H2>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Select id="status" name="status" label="Status" >
                        <option value="progredindo">Progredindo</option>
                        <option value="hiato">Hiato</option>
                        <option value="finalizado">Finalizado</option>
                        <option value="abandonado">Abandonado</option>
                    </Select>
                    <Select id="tipo" name="exchangeType" label="Tipo">
                        <option value="idioma">Idioma</option>
                        <option value="escola">Escola</option>
                        <option value="faculdade">Faculdade</option>
                        <option value="pós-graduação">Pós-graduação</option>
                        <option value="pesquisa">Pesquisa</option>
                    </Select>
                </div>
            </div>

            <div>
                <div className="w-full text-center mb-4">
                    <button type="button" onClick={addEtapa} title="Adicionar Etapa" className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">+ Etapas</button>
                </div>
                {etapas.map((etapa) => (
                    <Accordion key={etapa.key} etapa={etapa} onDelete={handleDeleteEtapa} />
                ))}

            </div>

            <div className="mt-6 flex items-center justify-between  border-b border-gray-900/10 pb-12">
                <button type="button" onClick={() => onDelete(project.key)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Deletar</button>
                <div>
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-lg">Cancelar</button>
                    <button type="submit" className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-r-lg">Salvar</button>
                </div>
            </div>

            <div >
                <Comments/>
            </div>
        </form>
    )
}
