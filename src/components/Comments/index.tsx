import React, { useState, useEffect } from 'react';
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
//Services
import { addReviewService } from '@/services/projectServices';


interface Props {
    selectedProject: iProject;
    setSelectedProject: React.Dispatch<React.SetStateAction<iProject | null>>;

}

export default function Comments({ selectedProject, setSelectedProject }: Props) {
    const { project, setProject } = useProject();
    const { user } = useUser();
    const [textAreaValue, setTextAreaValue] = useState("");
    const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

    const addComment = () => {
        if (!textAreaValue.trim()) return;

        const newComment: iComment = {
            grade: selectedGrade ?? 0,
            description: textAreaValue,
            UserId: user?.id,
            ProjectId: selectedProject.id || -1
        }

        const updatedProjects: iProject[] = project.map((proj) => {
            if (proj.id === selectedProject.id) { return { ...proj, comments: [...(proj.comments || []), newComment] }; }
            return proj;
        });
        setProject(updatedProjects);

        setSelectedProject((prevSelected) => {
            if (prevSelected) { return { ...prevSelected, comments: [...(prevSelected.comments || []), newComment] } }
            return null;
        });

        try {
            const data = addReviewService(newComment)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

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
                    <StarAvaliation onGradeSelect={setSelectedGrade} />
                </div>
                <TextArea
                    id="comment"
                    name="comment"
                    value={textAreaValue}
                    onChange={(e: any) => setTextAreaValue(e.target.value)}
                    placeholder="Deixe seu comentário..."
                />
            </div>
            <Button type="button" onClick={addComment}>Postar comentário</Button>


            {Array.isArray(selectedProject.comments) && selectedProject.comments.length > 0 ? (
                selectedProject.comments.map((cmt, index) => {
                    return (
                        <Comment key={index} comment={cmt} />
                    );
                })) :
                (
                    <div className="text-gray-500 p-4">Nenhum comentario Encontrado</div>
                )}
        </section>
    );
}
