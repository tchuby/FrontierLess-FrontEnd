import { useState } from 'react';
import Input from '@/components/Input';

export default function Accordion() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-slate-200">
            <button type="button" onClick={toggleAccordion} className="w-full flex justify-between items-center p-4 text-slate-800">
                <span>Teste</span>
                <span id="icon-1" className={`text-slate-800 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <div id="content-1" className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`} >
                <div className="pb-5 text-sm text-slate-500">
                    <Input id="valorEstimado" name="valorEstimado" type="text" children="Valor Estimado" />
                    <textarea className="border w-full mt-4" name="" id=""></textarea>
                </div>
            </div>
        </div>
    );
}
