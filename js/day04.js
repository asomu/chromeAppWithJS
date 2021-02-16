// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoPending_js = document.querySelector('.js-pending'),
    toDoFinished_js = document.querySelector('.js-finished');

let toDoPending = [];
let toDoFinished = [];
let pendingId = toDoPending.length;
let finishedId = toDoFinished.length;

const TODOS_PENDING_LS = 'toDoPending';
const TODOS_FINISHED_LS = 'toDoFinished';

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoPending_js.removeChild(li);
    const cleanToDos = toDoPending.filter(function(toDoPending){
        return toDoPending.id !== parseInt(li.id);
    });
    toDoPending = cleanToDos;
    saveToDos();
}

function finishToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    const id = li.querySelector('span');
    console.log()
    paintToDoFinish(id.innerText)
    toDoPending_js.removeChild(li);
    const cleanToDos = toDoPending.filter(function(toDoPending){
        return toDoPending.id !== parseInt(li.id);
    });
    toDoPending = cleanToDos;
    saveToDos();
}

function pendingToDo(event){
    const btn = event.target;
    console.log(btn)
    const li = btn.parentNode;
    console.log(li)
    toDoFinished_js.removeChild(li);
    const cleanToDos = toDoFinished.filter(function(toDoFinished){
        return toDoFinished.id !== parseInt(li.id);
    });
    toDoFinished = cleanToDos;
    saveToDos();
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_PENDING_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text); 
        });
    }
    // loadedToDos = localStorage.getItem(TODOS_FINISHED_LS);
    // if(loadedToDos !== null){
    //     const parsedToDos = JSON.parse(loadedToDos)
    //     parsedToDos.forEach(function(toDo) {
    //         paintToDo(toDo.text); 
    //     });
    // }
}

function saveToDos(){
    localStorage.setItem(TODOS_PENDING_LS, JSON.stringify(toDoPending));
    localStorage.setItem(TODOS_FINISHED_LS, JSON.stringify(toDoFinished));
}



function paintToDoFinish(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const pendingBtn = document.createElement('button');
    const span = document.createElement('span');
    finishedId += 1;
    delBtn.innerText = "❌";
    pendingBtn.innerText = "❓";
    delBtn.addEventListener('click', deleteToDo)
    pendingBtn.addEventListener('click', pendingToDo)
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(pendingBtn);
    li.id = finishedId;
    toDoPending_js.appendChild(li);
    const toDoObj = {
        text:text,
        id:finishedId
    }
    toDoPending.push(toDoObj);
    saveToDos();
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const finishBtn = document.createElement('button');
    const pendingBtn = document.createElement('button');
    const span = document.createElement('span');
    pendingId += 1;
    delBtn.innerText = "❌";
    finishBtn.innerText = "✔";
    delBtn.addEventListener('click', deleteToDo)
    finishBtn.addEventListener('click', finishToDo)
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(finishBtn);
    li.id = pendingId;
    toDoPending_js.appendChild(li);
    const toDoObj = {
        text:text,
        id:pendingId
    }
    toDoPending.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function init(){
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();
