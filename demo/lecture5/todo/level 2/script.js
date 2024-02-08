//solution-

document.getElementById('add-button').addEventListener('click', function() {
    var todoInput = document.getElementById('todo-input');
    var newTodo = todoInput.value;

    if (newTodo.trim() !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = newTodo;

        // Add a remove button
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            // Use removeChild to remove the list item
            var parentList = document.getElementById('todo-list');
            parentList.removeChild(listItem);
        };

        listItem.appendChild(removeButton);
        document.getElementById('todo-list').appendChild(listItem);
        todoInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task.');
    }
});
