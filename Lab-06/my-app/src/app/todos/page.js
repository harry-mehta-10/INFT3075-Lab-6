import Header from '../components/Header';
import Footer from '../components/Footer';

const Todos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
            <Header />
            <main className="flex flex-col gap-8 row-start-2 items-center justify-start">
                <h1 className="text-5xl text-blue-800">Todos</h1>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id} className="bg-gray-300 rounded-lg p-4">
                            <h2>{todo.title}</h2>
                            <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
}

export default Todos;