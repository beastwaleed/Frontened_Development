window.addEventListener('DOMContentLoaded', () => {


    const inputElem = document.getElementById('todo-input');
    const listContainer = document.getElementById('todo-list');

    const addButton = document.getElementById('add-button');
    
    
    // Load saved todos from local storage
    const savedTodos = localStorage.getItem('todoList');
    if (savedTodos) {
        listContainer.innerHTML = savedTodos;

        const listItems = listContainer.querySelectorAll('li');
        listItems.forEach(item => {
            const span = item.querySelector('span');

            span.addEventListener('click', function () {
                listContainer.removeChild(item);
                saveData();
            });

            item.addEventListener('click', function () {
                item.classList.toggle('checked');
                saveData();
            });
        });

    }


    addButton.addEventListener('click', addTodo);
        function addTodo(event) {
            event.preventDefault();
            const todoText = inputElem.value;
            if (todoText === '') {
                alert('Please enter a todo item.');
                return;
            }
            const newTodo = document.createElement('li');
            newTodo.textContent = todoText;

            let span = document.createElement('span');
            span.innerHTML = "\u00d7"; // Unicode for multiplication sign (×)
            newTodo.appendChild(span);

            listContainer.appendChild(newTodo);
            saveData(); // Save the new todo item to local storage  
            inputElem.value = ''; // Clear the input field

            // Add event listeners for the new todo item
            span.addEventListener('click', function () {
                listContainer.removeChild(newTodo);
                saveData();
            });

            newTodo.addEventListener('click', function () {
                newTodo.classList.toggle('checked');
                saveData();
            });

        }

    function saveData() {
        localStorage.setItem('todoList', listContainer.innerHTML);
    }
});
