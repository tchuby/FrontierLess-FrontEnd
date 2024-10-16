import StarAvaliation from "@/components/StarAvaliation"
import CommentSettings from "../CommentSettings"
import P from "@/components/P"

interface Props{
    comment: any
}

export default function Comment({comment}: Props) {
    return (
        <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">{comment.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{comment.date}</p>
                </div>
                <div className="flex space-x-5">
                    <StarAvaliation note={comment.note} disabled={true}/>
                    <CommentSettings />
                </div>

            </div>
            <P>
                {comment.comment}
            </P>
        </article>

    )
}
