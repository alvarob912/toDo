//Info Date
const dataNumber = document.getElementById('dateNumber');
const dataText = document.getElementById('dateText');
const dataMonth = document.getElementById('dateMonth');
const dataYear = document.getElementById('dateYear');

//Tasks Container
const tasksContainer = document.getElementById('tasksContainer');


const setDate = () => {
    const date = new Date();
    dataNumber.textContent = date.toLocaleString('es', { day: 'numeric'});
    dataText.textContent = date.toLocaleString('es', { weekday: 'long'});
    dataMonth.textContent = date.toLocaleString('es', { month: 'short'});
    dataYear.textContent = date.toLocaleString('es', { year: 'numeric'});

};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () =>{
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo,...done];
}

const renderOrderedTask = () =>{
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();