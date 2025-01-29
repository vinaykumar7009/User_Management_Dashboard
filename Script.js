document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');
    
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
  });