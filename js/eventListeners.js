// document.addEventListener('click', async (e) => {
//     if (e.target.classList.contains('editBtn')) {
//         const userRow = e.target.closest('tr');
//         editingUserId = e.target.getAttribute('data-id');

//         document.getElementById('firstName').value = userRow.children[1].textContent;
//         document.getElementById('lastName').value = userRow.children[2].textContent;
//         document.getElementById('email').value = userRow.children[3].textContent;
//         document.getElementById('department').value = userRow.children[4].textContent;

//         showModal();
//     }

//     if (e.target.classList.contains('deleteBtn')) {
//         const userId = e.target.getAttribute('data-id');
//         await deleteUser(userId);
//         e.target.closest('tr').remove();
//     }
// });






document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('editBtn')) {
        const userRow = e.target.closest('tr');
        editingUserId = e.target.getAttribute('data-id');

        document.getElementById('firstName').value = userRow.children[1].textContent;
        document.getElementById('lastName').value = userRow.children[2].textContent;
        document.getElementById('email').value = userRow.children[3].textContent;
        document.getElementById('department').value = userRow.children[4].textContent;

        showModal(true); // Pass true to change heading to "Edit User"
    }

    if (e.target.classList.contains('deleteBtn')) {
        const userId = e.target.getAttribute('data-id');
        await deleteUser(userId);
        e.target.closest('tr').remove();
    }
});
