"use client";

import { useState } from "react";

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, { id: crypto.randomUUID(), body: newComment, post: postId }]);
            setNewComment("");
        }
    };

    return (
        <div className="mt-8">
            <h3 className="text-xl">Comments</h3>
            <ul className="mt-4">
                {comments.map((comment) => (
                    <li key={comment.id} className="bg-gray-100 p-4 rounded-lg mb-2">
                        {comment.body}
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Enter your comment..."
                    className="w-full p-2 border rounded-lg"
                />
                <button 
                    onClick={handleAddComment} 
                    className="bg-blue-500 p-4 rounded-lg text-white mt-2"
                >
                    Add Comment
                </button>
            </div>
        </div>
    );
}

export default Comments;