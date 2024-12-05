// Get references to the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const themeToggle = document.getElementById('themeToggle');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');

    // Checkbox for marking task as done
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskSpan.classList.add('task-completed');
        } else {
            taskSpan.classList.remove('task-completed');
        }
    });
    listItem.appendChild(checkbox);

    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // Dropdown for priority
    const priorityDropdown = document.createElement('select');
    priorityDropdown.classList.add('priority-dropdown');
    ['Low', 'Medium', 'High'].forEach((priority) => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        priorityDropdown.appendChild(option);
    });
    listItem.appendChild(priorityDropdown);

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
        const newText = prompt('Edit your task:', taskSpan.textContent);
        if (newText) {
            taskSpan.textContent = newText.trim();
        }
    });
    listItem.appendChild(editButton);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => listItem.remove();
    listItem.appendChild(deleteButton);

    // Add the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Optional: Add task on pressing "Enter"
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Theme toggle functionality
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('li').forEach((li) => li.classList.toggle('dark-mode'));
});
