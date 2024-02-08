//solution

document.getElementById('add-button').addEventListener('click', function() {
    var todoList = document.getElementById('todo-list');
    var todoInput = document.getElementById('todo-input');
    var newTodo = todoInput.value;
    
    if (newTodo.trim() !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = newTodo;
        todoList.appendChild(listItem);
        todoInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task.');
    }
});