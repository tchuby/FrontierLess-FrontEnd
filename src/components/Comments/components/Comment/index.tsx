import StarAvaliation from "@/components/StarAvaliation"
import CommentSettings from "../CommentSettings"
import { getUserById } from "@/services/userServices"
import { useState, useEffect } from 'react';
import iUser from "@/types/iUser";

interface Props {
    comment: any
}

export default function Comment({ comment }: Props) {
    const [user, setUser] = useState<iUser | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const usr = await getUserById(comment.UserId);
                setUser(usr);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [comment.UserId]);


    return (
        <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 w-full">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">{user?.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{comment.updatedAt}</p>
                </div>
                <div className="flex space-x-5">
                    <StarAvaliation note={comment.grade} disabled={true} />
                    <CommentSettings />
                </div>
            </div>
            <p className="w-full break-words">
                {comment.description}
            </p>
        </article>

    )
}
