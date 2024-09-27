import React, { useState } from 'react';
import H2 from "../H2";
import Button from "../Button";
import TextArea from "../TextArea";
import StarAvaliation from "../StarAvaliation";
import Comment from "./components/Comment";

type Comment = {
    note: number;
    comment: string;
    publicationDate: Date;
};

export default function Comments() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [textAreaValue, setTextAreaValue] = useState("");

    const addComment = (event: React.FormEvent) => {
        event.preventDefault();

        if (textAreaValue.trim() === "") return;

        const newComment: Comment = {
            note: 5,
            comment: textAreaValue,
            publicationDate: new Date(),
        };

        setComments([...comments, newComment]);
        setTextAreaValue("");
    };

    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <H2>Comentários</H2>
                </div>

                <form className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
                    <Button type="submit" onClick={() => addComment} >Postar comentário</Button>
                </form>

                {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        comment={comment}
                    />
                ))}
            </div>
        </section>
    );
}
