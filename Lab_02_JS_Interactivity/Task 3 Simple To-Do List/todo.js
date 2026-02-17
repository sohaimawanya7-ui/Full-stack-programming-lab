function completeTask(id) {
    let task = document.getElementById(id);
    task.classList.toggle("completed");
}

function removeTask(id) {
    document.getElementById(id).parentElement.style.display = "none";
}