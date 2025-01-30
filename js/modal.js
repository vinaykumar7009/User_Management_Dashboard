const userFormModal = document.getElementById('userFormModal');
const modalHeading = userFormModal.querySelector('h2');
// -------Show_Modal
const showModal = (isEditing = false) => {
    modalHeading.textContent = isEditing ? 'Edit User' : 'Add User';
    userFormModal.style.display = 'flex';
};
// -------Hide_Modal
const hideModal = () => {
    userFormModal.style.display = 'none';
};

document.getElementById('cancelButton').addEventListener('click', hideModal);
