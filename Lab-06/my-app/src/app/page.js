import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Server component
export default function Home() {
    return (
        <div className="grid grid-rows-[20px,1fr,20px] items-center justify-items-center min-h-screen p-8">

            <Header />
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1>Home</h1>
            </main>

            <Footer />
            
        </div>
    );
}