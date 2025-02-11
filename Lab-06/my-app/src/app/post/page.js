import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Comments from "@/components/Comments";

const Posts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    return (
        <>
            <Header />
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name: var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <h1 className="text-5xl text-blue-800">Posts</h1>
                    <ul className="flex flex-col gap-8">
                        {posts.map((post) => (
                            <li key={post.id} className="flex flex-col max-w-lg items-center gap-4 rounded-xl bg-amber-100 p-6 shadow-lg">
                                <h2 className="text-2xl">{post.title}</h2>
                                <p>{post.body}</p>
                                
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    <Link href={`/authors/${post.userId}`}>Author</Link>
                                </button>

                                <Comments postId={post.id} />
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Posts;