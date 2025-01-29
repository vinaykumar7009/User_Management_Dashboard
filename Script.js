document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');
    const userFormModal = document.getElementById('userFormModal'); // Get modal reference
    const userForm = document.getElementById('userForm');
    const addUserBtn = document.getElementById('addUserBtn'); // Ensure correct ID
    let editingUserId = null; // To track if we are editing an existing user

    // -------------------------------------Fetch Users from API-----------------
    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            userTableBody.innerHTML = ''; // Clear the existing table content
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
        editingUserId = null; // Reset the editing state
        userFormModal.style.display = 'flex';    // Show the form to add a new user
        userForm.reset();     // Reset the form fields to be empty for new user input
    });

    // Handle form submission to add or edit a user
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const userData = {
            name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
            email: document.getElementById('email').value,
            company: { name: document.getElementById('department').value },
        };

        try {
            if (editingUserId) {
                // Edit user
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${editingUserId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData),
                });
                const updatedUser = await response.json();
                console.log('User updated:', updatedUser);

                // Update the table row with the new data
                const userRow = document.querySelector(`button[data-id="${editingUserId}"]`).closest('tr');
                userRow.querySelector('td:nth-child(2)').innerText = userData.name.split(' ')[0];
                userRow.querySelector('td:nth-child(3)').innerText = userData.name.split(' ')[1];
                userRow.querySelector('td:nth-child(4)').innerText = userData.email;
                userRow.querySelector('td:nth-child(5)').innerText = userData.company.name;
            } else {
                // Add new user
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData),
                });
                const newUser = await response.json();
                console.log('New user added:', newUser);

                // Add the new user to the table
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${newUser.id}</td>
                    <td>${newUser.name.split(' ')[0]}</td>
                    <td>${newUser.name.split(' ')[1]}</td>
                    <td>${newUser.email}</td>
                    <td>${newUser.company.name}</td>
                    <td>
                        <button class="editBtn" data-id="${newUser.id}">Edit</button>
                        <button class="deleteBtn" data-id="${newUser.id}">Delete</button>
                    </td>
                `;
                userTableBody.appendChild(row);
            }

            userFormModal.style.display = 'none'; // Hide the modal after adding or editing the user
        } catch (error) {
            console.error('Error saving user:', error);
        }
    });

    // Handle cancel button to close the modal
    document.getElementById('cancelButton').addEventListener('click', () => {
        userFormModal.style.display = 'none'; // Hide the modal when canceled
    });

    // Handle Edit button click
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('editBtn')) {
            const userId = e.target.getAttribute('data-id');
            const userRow = e.target.closest('tr');
            const userName = userRow.querySelector('td:nth-child(2)').innerText;
            const userEmail = userRow.querySelector('td:nth-child(4)').innerText;
            const userDept = userRow.querySelector('td:nth-child(5)').innerText;

            // Fill the form with the current data
            document.getElementById('firstName').value = userName;
            document.getElementById('lastName').value = userRow.querySelector('td:nth-child(3)').innerText;
            document.getElementById('email').value = userEmail;
            document.getElementById('department').value = userDept;

            // Show the form modal and set the user ID to be edited
            editingUserId = userId;
            userFormModal.style.display = 'flex';
        }
    });

    // Handle Delete button click
    document.addEventListener('click', async (e) => {
        if (e.target && e.target.classList.contains('deleteBtn')) {
            const userId = e.target.getAttribute('data-id');
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    // Remove the user row from the table
                    e.target.closest('tr').remove();
                    console.log('User deleted');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    });
});
