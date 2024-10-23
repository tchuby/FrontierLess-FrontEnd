import React, { useState, useEffect } from 'react';
import { useProject } from "@/contexts/ProjectContext";
import H2 from "../H2";
import Button from "../Button";
import TextArea from "../TextArea";
import StarAvaliation from "../StarAvaliation";
import Comment from "./components/Comment";

type Comment = {
    note: number;
    comment: string;
    date: Date;
    author: string;
};

interface Props {
    project: any;
}

export default function Comments({ project }: Props) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [textAreaValue, setTextAreaValue] = useState("");

    const { getQuantComment } = useProject();

    useEffect(() => {
        if (project.comments) {
            setComments(project.comments);
        }
    }, [project.comments]);

    useEffect(() => {
        if (project && getQuantComment) {
            getQuantComment(comments.length, project.id);
        }
    }, [comments.length, project?.id]);

    const addComment = (event: React.FormEvent) => {
        event.preventDefault();

        if (textAreaValue.trim() === "") return;

        const newComment: Comment = {
            author: 'xxx',
            comment: textAreaValue,
            note: 5,
            date: new Date()
        };

        setComments([...comments, newComment]);
        setTextAreaValue("");
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-4 lg:py-8 antialiased">
            <div className="mx-auto">
                <div className="flex justify-between items-center">
                    <H2>Comentários</H2>
                </div>

                <form className="mb-6" onSubmit={addComment}>
                    <div className="py-2 px-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <div className="mb-3">
                            <StarAvaliation />
                        </div>
                        <TextArea
                            id="comment"
                            name="comment"
                            value={textAreaValue}
                            onChange={(e: any) => setTextAreaValue(e.target.value)}
                            placeholder="Deixe seu comentário..."
                        />
                    </div>
                    <Button type="submit">Postar comentário</Button>
                </form>

                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        </section>
    );
}
