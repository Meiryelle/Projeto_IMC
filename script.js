function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}

function addTask() {
    const title = document.getElementById("taskTitle").value;
    const date = document.getElementById("taskDate").value;
    const time = document.getElementById("taskTime").value;
    const description = document.getElementById("taskDescription").value;

    if (!title || !date || !time || !description) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Data:</strong> ${date} <strong>Hora:</strong> ${time}</p>
        <p>${description}</p>
        <button onclick="markAsCompleted(this)">Concluir</button>
        <button onclick="deleteTask(this)">Excluir</button>
    `;

    document.getElementById("taskList").appendChild(taskItem);

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";
    document.getElementById("taskDescription").value = "";
}

function markAsCompleted(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
    button.innerText = taskItem.classList.contains("completed") ? "Desfazer" : "Concluir";
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}