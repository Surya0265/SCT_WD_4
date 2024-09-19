document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    
    if (taskInput.value === "" || taskDate.value === "") {
        alert("Please fill in both the task and the date/time.");
        return;
    }

    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskInput.value} (Due: ${new Date(taskDate.value).toLocaleString()})</span>
        <div>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(listItem);

    // Clear the input fields
    taskInput.value = "";
    taskDate.value = "";

    // Add event listener for the 'Complete' button
    listItem.querySelector('.complete-btn').addEventListener('click', function() {
        listItem.style.textDecoration = "line-through";
        listItem.querySelector('.complete-btn').disabled = true;
    });

    // Add event listener for the 'Delete' button
    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        listItem.remove();
    });
});

