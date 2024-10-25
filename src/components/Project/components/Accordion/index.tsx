import { useState } from 'react';
import { useProject } from "@/contexts/ProjectContext";

import iStep from "@/types/iStep"

interface Props {
    step: iStep;
    index: number
}

export default function Accordion({ step, index }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [localEtapa, setLocalEtapa] = useState(step);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLocalEtapa({ ...localEtapa, [name]: value });
    };

    return (
        <div className="border border-slate-200 w-full rounded">
            <button type="button" onClick={toggleAccordion} className="w-full flex justify-between items-center p-4 text-slate-800">
                <span>
                    <input
                        type="text"
                        placeholder="Etapa"
                        id="name"
                        name="name"
                        value={localEtapa.name}
                        onChange={handleInputChange}
                        className="w-full font-bold" />
                </span>
                <span id="icon-1" className={`text-slate-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <div id="content-1" className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-100' : 'max-h-0'}`} >
                <div className="text-sm text-slate-500 pb-3">
                    <label htmlFor="cost" className="block text-sm font-medium leading-6 text-gray-900">Custo</label>
                    <input
                        id="cost"
                        name="cost"
                        type="text"
                        value={localEtapa.cost}
                        onChange={handleInputChange}
                        className="border-b text-black"
                    />
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Descriçao</label>
                        <textarea
                            name="description"
                            id="description"
                            value={localEtapa.description}
                            onChange={handleInputChange}
                            rows={4}
                            className="border w-full p-1 rounded text-black"
                        />
                    </div>
                    <button type="button" className="text-red-700 font-bold mt-3 w-full text-right hover:text-red-800 transition-colors">Deletar Etapa</button>
                </div>
            </div>
        </div>
    );
}
