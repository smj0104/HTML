// 추가버튼 클릭시 input에 들어있는 value값을 list에 추가
// 확인버튼 클릭시 todo-content의 색상을 red로 변경,취소선 적용
// 확인버튼 다시 클릭시 todo-content 색상을 black으로 변경,취소선 미적용
//decorationtext thorws

document.getElementsByClassName("todo-text")[0].value;

const addbutton = document.getElementsByClassName("add-button");
addbutton[0].onclick = () => {
    const todotext = document.getElementsByClassName("todo-text");
    todotext[0].innerHTML += `
    
    `;

}

const okbutton = document.getElementsByClassName("ok-button")
okbutton[0].onclick = () => {

}