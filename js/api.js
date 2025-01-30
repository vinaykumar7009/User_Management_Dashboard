const API_URL = 'https://jsonplaceholder.typicode.com/users';
// -----------FETCH_API
const fetchUsers = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch users');
        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        alert('There was an error loading the user data. Please try again later.');
    }
};
//  ---------------ADD_USER 
const addUser = async (userData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding user:', error);
    }
};
// ----------UPDATE_USERS
const updateUser = async (id, userData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

// ------------DELETE_USER
const deleteUser = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};
