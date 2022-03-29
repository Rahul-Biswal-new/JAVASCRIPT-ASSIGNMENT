document.querySelector('#addtodo').onclick = function(){

    alert(document.querySelector('#todoinput').value)
    alert("button clicked")  
}

let addButton = document.querySelector('button');
let inputButton = document.querySelector('Input');
let todoList = document.querySelector('div.todos');
let count = 0;
addButton.onclick = function() {
    let inputTodo = inputButton.value;
    if (inputTodo == "") {
        alert("Please enter a task");
    } else {
        let item = document.createElement("p");
        item.innerHTML = inputTodo
        item.setAttribute("key", count);
        todoList.append(item);
        count = count + 1;
        item.addEventListener("click", function() {
            todoList.removeChild(item);
        })
        inputButton.value = ""   
    }
}
