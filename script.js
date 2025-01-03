// DOM Elements
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const currentYear = document.getElementById('currentYear');

// Fetch current year dynamically from the server
fetch('/year')
  .then(response => response.json())
  .then(data => {
    currentYear.textContent = data.year;
  });

// Add Task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskName = document.getElementById('taskName').value;
  const taskDate = document.getElementById('taskDate').value;
  const taskTime = document.getElementById('taskTime').value;

  if (!taskName || !taskDate || !taskTime) {
    alert('All fields are required!');
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = `${taskName} - ${taskDate} ${taskTime}`;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.className = 'complete-btn';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  // Mark as Completed
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete Task
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskForm.reset();
});
