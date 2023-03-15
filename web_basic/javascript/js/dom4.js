//const statusList = new Array();
const addButton = document.getElementsByClassName("add-button");
//const todoText = document.getElementsByClassName("todo-text")[0].value;

addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    const li = document.createElement("li");
    li.innerHTML += `
    <li><input type = "checkbox" class="ok-check"><span class="todo-content">${todoText[0].value}</span></input></li>
    `;
    todoList[0].appendChild(li);
   // statusList.push(false)

    addEvent();
}

function addEvent() {
    const okCheck = document.getElementsByClassName("ok-check");
    //okCheck[0].Checked;
   // const okButton = document.getElementsByClassName("ok-button");
    const todoContent =document.getElementsByClassName("todo-content");
    for(let i = 0; i < okCheck.length; i++) {
        okCheck[i].onclick = () => {
        if(okCheck[i].checked) {
            todoContent[i].style.color = 'red';
            todoContent[i].style.textDecoration = 'line-through';
            //statusList[i] = false;
        }else {
            todoContent[i].style.color = 'black';
            todoContent[i].style.textDecoration = 'none';
            //statusList[i] = True;
            }

        }
    }
}
//boolean타입 사용시 true사용x