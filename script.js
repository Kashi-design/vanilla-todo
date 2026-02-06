// 1. Select the elements we need to talk to
const input = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('task-list');

// 2. Define the "Add Task" function
function addTask() {
    const taskText = input.value; // Get what the user typed

    // Check: Did they actually type something?
    if (taskText === '') {
        alert("Please write a task first!");
        return; // Stop here if empty
    }

    // 3. Create the new HTML list item
    const newItem = document.createElement('li');
    newItem.textContent = taskText;

    // 4. Add a "Delete" feature to the item (Bonus!)
    newItem.addEventListener('click', function() {
        newItem.remove(); // Remove this specific item when clicked
    });

    // 5. Put the new item into the list
    list.appendChild(newItem);

    // 6. Clear the input box so it's ready for the next task
    input.value = '';
}

// 7. Tell the button to listen for a "Click"
addButton.addEventListener('click', addTask);

// Bonus: Allow pressing "Enter" key to add
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});