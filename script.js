let todoList = [];
//  displayItem();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if(!todoItem || !todoDate){
        alert("please enter your notes and date !");
        return;
    }
    todoList.push({item: todoItem, dueDate: todoDate});
    // todoList.push(todoDate);
    inputElement.value='';
    dateElement.value='';

    displayItem();
}

function displayItem() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = ``;

    for(let i=0;i<todoList.length;i++){
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        let {item, dueDate}  = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onclick="todoList.splice(${i}, 1);displayItem();"
            >Delete</button>
        `;
    }
    containerElement.innerHTML=newHtml;
}