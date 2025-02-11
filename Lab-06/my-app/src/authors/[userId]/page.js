const User = async ({ params }) => {
    const userId = params.userId; 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    return (
        <>
            <h1 className="text-5xl text-blue-800">User Details</h1>
            <div className="w-80 bg-gray-200 p-6 shadow-lg rounded-lg">
                <div className="text-2xl">{user.name}</div>
                <div>{user.email}</div>
                <div>{user.username}</div>
                <div>{user.company.name}</div>
            </div>
        </>
    );
}

export default User;