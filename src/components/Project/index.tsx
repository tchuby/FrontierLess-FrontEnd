import { useState, useEffect } from 'react';
import { useProject } from '@/contexts/ProjectContext';

//Components
import Select from '../Select';
import Accordion from "./components/Accordion";
import H2 from '../H2';
import Comments from '../Comments';
import SaveButton from './components/SaveButton';
import CancelButton from './components/CancelButton';
import DeleteButton from './components/DeleteButton';
import Button from '../Button';
//Types
import iStep from "@/types/iStep";
import iProject from '@/types/iProject';

interface Props {
    selectedProject: iProject,
    findProject?: boolean,
    setSelectedProject: React.Dispatch<React.SetStateAction<iProject | null>>;

}

export default function Project({ selectedProject, findProject, setSelectedProject }: Props) {
    const [steps, setSteps] = useState<iStep[]>([]);
    const { project, setProject, addProject, updateProject } = useProject();

    const newStep: iStep = {
        id: 0,
        name: "",
        cost: 0,
        description: ""
    };
    const addStep = () => {
        setSteps([...steps, newStep]);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProject(project.map((proj) => proj.id === selectedProject.id ? { ...proj, [name]: value } : proj));
        setSelectedProject(prev => prev ? { ...prev, [name]: value } : prev);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (selectedProject.id && selectedProject.id !== 0) {
                await updateProject(selectedProject.id, selectedProject);
            } else {
                if (selectedProject.destination === "") {
                    alert("Favor insira um destino");
                    return;
                }
                if (selectedProject.exchangeType === "") {
                    alert("Favor insira um tipo de intercâmbio");
                    return;
                }
                await addProject(selectedProject);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setSteps(selectedProject.steps || []);
    }, [selectedProject.steps]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="flex justify-between">
                        <input
                            id="destination"
                            name="destination"
                            type="text"
                            onChange={handleChange}
                            value={selectedProject.destination}
                            placeholder='Destino'
                            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                            disabled={findProject}
                        />
                        <H2>{selectedProject.User?.name}</H2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Select
                            id="status"
                            name="status"
                            label="Status"
                            disabled={findProject}
                            select={selectedProject.status}
                            onChange={handleChange}>
                            <option value="progredindo">Progredindo</option>
                            <option value="hiato">Hiato</option>
                            <option value="finalizado">Finalizado</option>
                            <option value="abandonado">Abandonado</option>
                        </Select>

                        <Select
                            id="exchangeType"
                            name="exchangeType"
                            label="Tipo"
                            disabled={findProject}
                            select={selectedProject.exchangeType}
                            onChange={handleChange}>
                            <option value=""></option>
                            <option value="idioma">Idioma</option>
                            <option value="escola">Escola</option>
                            <option value="faculdade">Faculdade</option>
                            <option value="pós-graduação">Pós-graduação</option>
                            <option value="pesquisa">Pesquisa</option>
                        </Select>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custo total</label>
                            <h2 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {Number(selectedProject.budget ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </h2>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-full text-center mb-4">
                        <button
                            disabled={findProject}
                            type="button"
                            onClick={addStep}
                            title="Adicionar Etapa"
                            className="mt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-900">
                            + Etapas
                        </button>
                    </div>
                    {steps.map((step, i) => (
                        <Accordion key={step.id} step={step} findProject={findProject} />
                    ))}
                </div>

                {!findProject && (
                    <div className="mt-4 pb-4 flex flex-col md:flex-row items-center justify-between border-b border-gray-900/10">
                        <DeleteButton project={selectedProject} />
                        <div className="flex flex-col md:flex-row space-x-1">
                            <SaveButton />
                            <CancelButton />
                        </div>
                    </div>
                )}

                {findProject && (
                    <Button type="button">
                        Seguir Projeto
                    </Button>
                )}
            </form>
            <div className='w-full'>
                <Comments selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
            </div>
        </>
    );
}
