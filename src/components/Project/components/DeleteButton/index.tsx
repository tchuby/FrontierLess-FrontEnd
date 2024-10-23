import { useState } from 'react';
import { useProject } from "@/contexts/ProjectContext";

import Popup from "@/components/Popup";

interface Props {
    project: any,
}

export default function DeleteButton({ project }: Props) {
    const { deleteProject } = useProject();

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleDeleteClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const hDeleteProject = () => {
        deleteProject(project.id);
        setIsPopupOpen(false);
    };
    return (
        <>
            <button type="button" onClick={handleDeleteClick} className="text-sm bg-transparent hover:text-red-700 text-red-500 py-2 px-4 mb-4 md:mb-0 md:mr-4">
                Deletar projeto
            </button>
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} onConfirm={hDeleteProject} />
        </>
    )
}
