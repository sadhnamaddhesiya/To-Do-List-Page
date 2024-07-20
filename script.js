const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        input.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">Complete</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);

    const completeBtn = li.querySelector('.complete-btn');
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');

    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    editBtn.addEventListener('click', function() {
        const span = li.querySelector('span');
        const newText = prompt('Edit task:', span.textContent);
        if (newText !== null) {
            span.textContent = newText.trim();
        }
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}
