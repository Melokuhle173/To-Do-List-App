
// Selecting HTML elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Handling form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(todoInput.value);
  todoInput.value = ''; // Clear the input field after adding
});

// Function to add a delete button with confirmation dialog
function addDeleteButton(li) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  
  // Add event listener with confirmation dialog
  deleteButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this task?')) {
      li.remove();
      saveTasks(); // Ensure to save changes after deletion
    }
  });

  li.appendChild(deleteButton);
}

// Adding tasks to the list
function addTask(task) {
  if (!task.trim()) {
    alert('Task cannot be empty!'); // Prevent adding empty tasks
    return;
  }

  const li = document.createElement('li');
  li.textContent = task;
  todoList.appendChild(li);

  addDeleteButton(li);
  saveTasks(); // Save changes whenever a new task is added
}






  

 

