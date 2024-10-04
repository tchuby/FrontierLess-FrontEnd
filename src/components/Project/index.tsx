import React, { useState } from 'react';
import Select from '../Select';
import Accordion from "./components/Accordion";
import H2 from '../H2';
import Comments from '../Comments';
import Popup from '../Popup';

type Etapa = {
    key: number;
    name: string;
    cost: string;
    description: string;
};

interface Props {
    project: any,
    onDelete?: (key: number) => void;
}

let cont = 0;
export default function Project({ project, onDelete }: Props) {
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
        const updatedEtapas = etapas.filter((etapa) => etapa.key !== key);
        setEtapas(updatedEtapas);
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleDeleteClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleConfirmDelete = () => {
        if (onDelete) {
            onDelete(project.key);
        }
        setIsPopupOpen(false);
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
                    <Select id="status" name="status" label="Status" disabled={project.locked}>
                        <option value="progredindo">Progredindo</option>
                        <option value="hiato">Hiato</option>
                        <option value="finalizado">Finalizado</option>
                        <option value="abandonado">Abandonado</option>
                    </Select>
                    <Select id="tipo" name="exchangeType" label="Tipo" disabled={project.locked}>
                        <option value="idioma">Idioma</option>
                        <option value="escola">Escola</option>
                        <option value="faculdade">Faculdade</option>
                        <option value="pós-graduação">Pós-graduação</option>
                        <option value="pesquisa">Pesquisa</option>
                    </Select>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custo total</label>
                        <h2 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">R$ 200.000,00</h2>
                    </div>
                </div>
            </div>

            <div>
                <div className="w-full text-center mb-4">
                    <button disabled={project.locked} type="button" onClick={addEtapa} title="Adicionar Etapa" className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-900">+ Etapas</button>
                </div>
                {etapas.map((etapa) => (
                    <Accordion key={etapa.key} etapa={etapa} onDelete={handleDeleteEtapa} />
                ))}
            </div>

            <div className="mt-4 flex flex-col md:flex-row items-center justify-between border-b border-gray-900/10">
                <button disabled={project.locked} type="button" onClick={handleDeleteClick} className="text-sm bg-transparent hover:text-red-700 text-red-500 py-2 px-4 mb-4 md:mb-0 md:mr-4">
                    Deletar projeto
                </button>
                <Popup isOpen={isPopupOpen} onClose={handleClosePopup} onConfirm={handleConfirmDelete} />
                <div className="flex flex-col md:flex-row space-x-1">
                    <button disabled={project.locked} type="button" className="text-sm text-gray-900 bg-white hover:bg-blue-700 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none font-bold py-1 px-2 rounded">
                        Cancelar
                    </button>
                    <button disabled={project.locked} type="submit" className="text-sm bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-1 px-2 rounded">
                        Salvar
                    </button>
                </div>
            </div>
            <div >
                <Comments />
            </div>
        </form>
    )
}
