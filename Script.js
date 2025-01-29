document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');
    const userFormModal = document.getElementById('userFormModal'); // Get modal reference
    const userForm = document.getElementById('userForm');
    const addUserBtn = document.getElementById('addUserBtn'); // Ensure correct ID

    // -------------------------------------Fetch Users from API-----------------
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name.split(' ')[0]}</td>
                    <td>${user.name.split(' ')[1]}</td>
                    <td>${user.email}</td>
                    <td>${user.company.name}</td>
                    <td>
                        <button class="editBtn" data-id="${user.id}">Edit</button>
                        <button class="deleteBtn" data-id="${user.id}">Delete</button>
                    </td>
                `;
                userTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    fetchUsers();

    //----------------------------------Add User (Handle Add User button click)-----------------------
    addUserBtn.addEventListener('click', () => {
        userFormModal.style.display = 'flex';    // Show the form to add a new user
        userForm.reset();     // Reset the form fields to be empty for new user input
    });

    // Handle form submission to add a new user
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const newUser = {
            name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
            email: document.getElementById('email').value,
            company: { name: document.getElementById('department').value },
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
            });
            const user = await response.json();
            console.log('New user added:', user);
            userFormModal.style.display = 'none'; // Hide the modal after adding the user
            fetchUsers(); // Re-fetch the updated list of users
        } catch (error) {
            console.error('Error adding user:', error);
        }
    });

    // Handle cancel button to close the modal
    document.getElementById('cancelButton').addEventListener('click', () => {
        userFormModal.style.display = 'none'; // Hide the modal when canceled
    });
});
