import Link from "next/link";

const About = () => {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
            
            <header>
                <nav className="flex space-x-6">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </nav>
            </header>

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-5xl">About</h1>
                <p>This page provides information about our application and its features.</p>
            </main>

            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <h3>Next.js Intro</h3>
                <h3>Harry Mehta</h3>
                <h3>February 4, 2025</h3>
            </footer>

        </div>
    );
}

export default About;