
function addTask() {
    const input = document.getElementById('task-input');
    const tasks = document.getElementById('tasks');

    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.onclick = function () {
            this.classList.toggle('task-done');
        };

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.onclick = function () {
            const newText = prompt('Edit your task:', li.textContent.replace('EditDelete', '').trim());
            if (newText !== null && newText.trim() !== '') {
                li.childNodes[0].nodeValue = newText + ' ';
            }
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function () {
            tasks.removeChild(li);
        };

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        tasks.prepend(li);
        input.value = ''; // Clear input field after adding
    } else {
        alert('Please enter a task!');
    }
}

document.getElementById('add-task-btn').addEventListener('click', addTask);

