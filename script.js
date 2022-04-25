const taskInputEl = document.getElementById ('task');
const btnEl = document.getElementById ('btn');
const errorEL = document.getElementById ('error');
const usersTasksEl = document.getElementById('usersTasks');

btnEl.addEventListener ('click', onBtnClick);
taskInputEl.addEvenListener ('input', onTaskInputEl);

///

function onTaskInputEl(){
    if (taskInputEl.value === null || taskInputEl.value === "" || taskInputEl.length < 3 ){
        return errorMessage();
    } else {
        return taskInputEl.value ;
    }
}

function errorMessage (){
    errorEL.textContent = "check your data";
    taskInputEl.classList.add ('invalid');
}

function onBtnClick(){
    createNewTask();
    clearInput();
}

function createNewTask (){
    createNewLi();
    usersTasksEl.append(listItem);
}

function createNewLi() {
    const listItem = document.createElement('li');
    return listItem = taskInputEl.value;
}

function clearInput (){
    taskInputEl.value = '';
}