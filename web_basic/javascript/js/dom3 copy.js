const statusList = new Array();
const addButton = document.getElementsByClassName("add-button");
//const todoText = document.getElementsByClassName("todo-text")[0].value;

addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    todoList[0].innerHTML += `
    <li><span class="todo-content">${todoText[0].value}</span><button class="ok-button">확인</button></li>
    `;
    statusList.push(false)

    addEvent();
}

function addEvent() {
    const okButton = document.getElementsByClassName("ok-button");
    const todoContent =document.getElementsByClassName("todo-content");
    for(let i = 0; i < okButton.length; i++) {
        okButton[i].onclick = () => {
        if(statusList[i]) {
            todoContent[i].style.color = 'black';
            todoContent[i].style.textDecoration = 'none';
            statusList[i] = false;
        }else {
            todoContent[i].style.color = 'red';
            todoContent[i].style.textDecoration = 'line-through';
            statusList[i] = True;
            }

        }
    }
}

//boolean타입 사용시 true사용x