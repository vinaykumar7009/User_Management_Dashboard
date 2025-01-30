
# User Management Dashboard
# You can check the More organized file structure in branch Effective_file_organization 
A simple User Management Dashboard that allows users to view, add, edit, and delete users using data fetched from a placeholder API.


## 📌 Features

✔ Fetch users from API and display them in a table

✔ Add new users with a modal form

✔ Edit existing users with real-time table updates

✔ Delete users dynamically

✔ Responsive design for mobile and desktop

✔ Modular JavaScript & CSS for better maintainability


## 📂 Project Structure


📁 user-management-dashboard 
│── 📁 css                # Stylesheets  
│   ├── variables.css      # Global variables  
│   ├── global.css         # General layout & styles  
│   ├── buttons.css        # Button styles  
│   ├── table.css          # Table styles  
│   ├── modal.css          # Modal styles  
│   ├── forms.css          # Form styles  
│  
│── 📁 js                 # JavaScript files  
│   ├── api.js            # Fetching data from API  
│   ├── modal.js          # Modal show/hide functionality  
│   ├── formHandler.js    # Handling form submissions  
│   ├── eventListeners.js # Handling button click events  
│   ├── main.js           # Initialization & setup  
│── index.html            # Main HTML file  
│── styles.css            # (Optional) Main CSS file (if combined)  
│── README.md             # Project documentation  

## 🚀 Installation & Setup**
### 1️⃣ Clone the Repository**

git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard


cd user-management-dashboard
## 2️⃣ Open in Browser
Simply open index.html in your preferred browser.
## 📜 Usage
1️⃣ Click the "Add User" button to open the modal and enter user details.

2️⃣ Click the "Edit" button to modify user details. The modal title will change to "Edit User".

3️⃣ Click the "Delete" button to remove a user from the list.
## 🛠 Technologies Used
✅ HTML5
✅ CSS3
✅ JavaScript (ES6)
✅ Fetch API


## 🚧 Challenges Faced & Improvements
## Challenges:
🔹Data Persistence: Since the project uses a placeholder API, data changes are not saved permanently.
🔹Managing State in JavaScript: Keeping track of editing states dynamically without a backend was tricky.
🔹UI Responsiveness: Ensuring a consistent user experience across different screen sizes required CSS adjustments.
🔹Error Handling: Handling API failures and providing meaningful user feedback was a key challenge.
## Improvements for Future Versions:
🔹 Connect to a Real Backend: Implement a database to store user data persistently.
🔹 Better Form Validation: Improve error messages and validation rules for user input.
## 📄 License
This project is licensed under the MIT License.
## Happy Coding! 🚀
