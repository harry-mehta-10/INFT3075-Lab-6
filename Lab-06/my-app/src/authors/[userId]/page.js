import Header from "@/components/Header";
import Footer from "@/components/Footer";


const User = async ({ params }) => {

    const { userId } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name: var(--font-geist-sans)]">
            <Header />

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="bg-gray-200 p-6 shadow-lg rounded-lg">
                    <h1 className="text-5xl">User Details</h1>
                    <h2 className="text-2xl">{user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Company: {user.company.name}</p>
                </div>
            </main>

            <Footer />

        </div>
    );
}

export default User;