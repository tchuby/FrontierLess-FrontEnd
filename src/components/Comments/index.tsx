import React, { useState } from 'react';
//contexts
import { useProject } from "@/contexts/ProjectContext";
import { useUser } from '@/contexts/UserContext';
//Components
import H2 from "../H2";
import Button from "../Button";
import TextArea from "../TextArea";
import StarAvaliation from "../StarAvaliation";
import Comment from "./components/Comment";
//Types
import iProject from '@/types/iProject';
import iComment from '@/types/iComment';

interface Props {
    selectedProject: iProject;
    setSelectedProject: React.Dispatch<React.SetStateAction<iProject | null>>;

}

export default function Comments({ selectedProject, setSelectedProject }: Props) {
    const { addComment } = useProject();
    const { user } = useUser();
    const [textAreaValue, setTextAreaValue] = useState("");
    const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

    const haddComment = () => {
        if (!textAreaValue.trim()) return;

        const newComment: iComment = {
            grade: selectedGrade ?? 0,
            description: textAreaValue,
            UserId: user?.id,
            ProjectId: selectedProject.id || -1
        }

        setSelectedProject((prevSelected) => {
            if (prevSelected) { return { ...prevSelected, comments: [...(prevSelected.comments || []), newComment] } }
            return null;
        });
        addComment(newComment)

        setTextAreaValue("");
        setSelectedGrade(0)
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-4 lg:py-8 w-full max-w-2xl mx-auto flex-col">
            <div className="flex justify-between items-center">
                <H2>Comentários</H2>
            </div>

            <div className="py-2 px-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-3">
                    <StarAvaliation onChange={setSelectedGrade} />
                </div>
                <TextArea
                    id="comment"
                    name="comment"
                    value={textAreaValue}
                    onChange={(e: any) => setTextAreaValue(e.target.value)}
                    placeholder="Deixe seu comentário..."
                />
            </div>
            <Button type="button" onClick={haddComment}>Postar comentário</Button>


            {Array.isArray(selectedProject.comments) && selectedProject.comments.length > 0 ? (
                selectedProject.comments.map((cmt, index) => {
                    return (
                        <Comment key={index} comment={cmt} projectID={selectedProject.id} />
                    );
                })) :
                (
                    <div className="text-gray-500 p-4">Nenhum comentario Encontrado</div>
                )}
        </section>
    );
}
