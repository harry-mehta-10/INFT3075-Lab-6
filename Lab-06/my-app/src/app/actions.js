// Server Action
'use server';

const fetchAuthorDetails = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    return user;
}

export default fetchAuthorDetails;