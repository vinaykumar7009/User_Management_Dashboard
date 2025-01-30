document.addEventListener('DOMContentLoaded', async () => {
    const users = await fetchUsers();
    const userTableBody = document.getElementById('userTableBody');

    users.forEach(user => {
        userTableBody.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${user.id}</td>
                <td>${user.name.split(' ')[0]}</td>
                <td>${user.name.split(' ')[1]}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
                <td>
                    <button class="editBtn" data-id="${user.id}">Edit</button>
                    <button class="deleteBtn" data-id="${user.id}">Delete</button>
                </td>
            </tr>
        `);
    });

    document.getElementById('addUserBtn').addEventListener('click', () => {
        editingUserId = null;
        userForm.reset();
        showModal(false); // Pass false to set heading to "Add User"
    });
    
});



