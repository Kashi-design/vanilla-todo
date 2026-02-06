// 1. Select elements
const input = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('task-list');

// 2. Load data from Local Storage when page opens
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskText = input.value;

    if (taskText === '') {
        alert("Please write a task first!");
        return;
    }

    // Create the visual item
    createTaskElement(taskText);

    // Save to Local Storage
    saveTasksToStorage();

    input.value = '';
}

// 3. Helper function to create the HTML (Refactored)
function createTaskElement(text) {
    const newItem = document.createElement('li');
    newItem.textContent = text;

    // Add Delete feature
    newItem.addEventListener('click', function() {
        newItem.remove();
        saveTasksToStorage(); // Update storage after deleting!
    });

    list.appendChild(newItem);
}

// 4. Save function (The new part!)
function saveTasksToStorage() {
    const tasks = [];
    // Grab every <li> currently on the screen
    document.querySelectorAll('li').forEach(function(item) {
        tasks.push(item.textContent);
    });
    
    // Convert array to a string string and save it
    // 'tasks' is the key name we will look for later
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 5. Load function (The new part!)
function loadTasks() {
    // Get the string back from storage
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        // Convert string back to array
        const tasks = JSON.parse(storedTasks);
        
        // Loop through each task and create the HTML for it
        tasks.forEach(function(taskText) {
            createTaskElement(taskText);
        });
    }
}

// Listeners
addButton.addEventListener('click', addTask);
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});