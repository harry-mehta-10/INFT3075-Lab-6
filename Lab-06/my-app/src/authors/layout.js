export default function AuthorsLayout({ children }) {
    return (
        <section className="bg-blue-500 text-gray-300 font-bold w-96 h-96 rounded shadow-lg flex justify-center items-center">
            {children}
        </section>
    );
}