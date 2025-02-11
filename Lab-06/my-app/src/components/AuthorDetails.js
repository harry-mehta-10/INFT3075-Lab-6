"use client";

import fetchAuthorDetails from "@/app/actions";
import { useState } from "react";

const AuthorDetails = ({ userId }) => {
    const [user, setUser] = useState(null);

    const handleAuthorDetails = async () => {
        const authorDetails = await fetchAuthorDetails(userId);
        setUser(authorDetails);
    };

    return (
        <>
            <button
                onClick={handleAuthorDetails}
                className="bg-emerald-400 hover:bg-emerald-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
            >
                Get Author Details
            </button>
            {user && (
                <div className="bg-gray-200 shadow-lg rounded-lg p-6">
                    <div className="text-2xl">{user.name}</div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            )}
        </>
    );
}

export default AuthorDetails;