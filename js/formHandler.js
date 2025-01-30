const userForm = document.getElementById('userForm');
let editingUserId = null;

userForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userData = {
        name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
        email: document.getElementById('email').value,
        company: { name: document.getElementById('department').value },
    };

    if (editingUserId) {
        await updateUser(editingUserId, userData);
        document.querySelector(`button[data-id="${editingUserId}"]`).closest('tr').innerHTML = `
            <td>${editingUserId}</td>
            <td>${userData.name.split(' ')[0]}</td>
            <td>${userData.name.split(' ')[1]}</td>
            <td>${userData.email}</td>
            <td>${userData.company.name}</td>
            <td>
                <button class="editBtn" data-id="${editingUserId}">Edit</button>
                <button class="deleteBtn" data-id="${editingUserId}">Delete</button>
            </td>
        `;
    } else {
        const newUser = await addUser(userData);
        document.getElementById('userTableBody').insertAdjacentHTML('beforeend', `
            <tr>
                <td>${newUser.id}</td>
                <td>${userData.name.split(' ')[0]}</td>
                <td>${userData.name.split(' ')[1]}</td>
                <td>${userData.email}</td>
                <td>${userData.company.name}</td>
                <td>
                    <button class="editBtn" data-id="${newUser.id}">Edit</button>
                    <button class="deleteBtn" data-id="${newUser.id}">Delete</button>
                </td>
            </tr>
        `);
    }

    hideModal();
});
