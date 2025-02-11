import Comments from "@/components/Comments";
import Link from "next/link";

const Posts = async () => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return (
        <>
            <h1 className="text-5xl text-blue-800">Posts</h1>
            <ul className="flex flex-col gap-8">
                {posts.map((post) => (
                    <li key={post.id} className="bg-amber-200 p-6 rounded-xl shadow-lg w-80">
                        <h2>
                            <span className="font-bold">Title:</span> {post.title}
                        </h2>
                        <p>
                            <span className="font-bold">Body:</span> {post.body}
                        </p>
                        <button className="bg-emerald-400 hover:bg-emerald-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
                            <Link href={`/authors/${post.userId}`}>Author</Link>
                        </button>
                        {/* List of comments */}
                        <Comments postId={post.id} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Posts;