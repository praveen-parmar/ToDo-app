function addTask() {
  const input = document.getElementById('taskInput');
  const li = document.createElement('li');

  li.innerHTML = `
    ${input.value}
    <button onclick="this.parentElement.remove()">Delete</button>
  `;

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}