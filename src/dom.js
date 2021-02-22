import { remove_todos } from ".";
import {todos} from "./todo_object"


const table = document.getElementById("table");
const table_container = document.getElementById("table_container");
const overlay = document.getElementById("overlay");


export function display_todo(){
    
    const row = table.insertRow();
    row.classList.add("row");

    const complete_checkbox = document.createElement("input");
    complete_checkbox.type = "checkbox";

    // creates a delete button
    const delete_todo = document.createElement("button");
    delete_todo.innerHTML = "delete";
    
    delete_todo.addEventListener("click", function(e){
        remove_todos(delete_todo.parentNode.parentNode.rowIndex - 1);
        table.deleteRow(delete_todo.parentNode.parentNode.rowIndex);
        detail.remove();
    })
    
    const cell1 = row.insertCell();
    cell1.classList.add("cell1width");
    const cell2 = row.insertCell();
    cell2.classList.add("cell2width");
    const cell3 = row.insertCell();
    cell3.classList.add("cell3width");
    const cell5 = row.insertCell();
    const cell6 = row.insertCell();

    cell1.appendChild(delete_todo);
    cell2.appendChild(complete_checkbox);
    cell3.innerHTML = todos[todos.length - 1].title;
    cell5.innerHTML = todos[todos.length - 1].dueDate;
    cell6.innerHTML = todos[todos.length - 1].priority;

    const detail = document.createElement("div");
    detail.classList.add("detail");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const current_date = document.createElement("p");
    const due_date = document.createElement("p");
    const priority = document.createElement("p");
    const status = document.createElement("p");

    title.innerHTML = todos[todos.length - 1].title;
    description.innerHTML = todos[todos.length - 1].description;
    due_date.innerHTML = "Due by " + todos[todos.length - 1].dueDate;
    priority.innerHTML = todos[todos.length - 1].priority + " Priority";
    const todo_description_close = document.createElement("button");
    todo_description_close.innerHTML = "Ok";

    detail.appendChild(title);
    detail.appendChild(description);
    detail.appendChild(due_date);
    detail.appendChild(priority);
    detail.appendChild(todo_description_close);

    table_container.appendChild(detail);

    cell3.addEventListener("click", ()=>{
        detail.classList.add("show");
        overlay.classList.add("overlay");
    })

    cell5.addEventListener("click", ()=>{
        detail.classList.add("show");
        overlay.classList.add("overlay");
    })
    cell6.addEventListener("click", ()=>{
        detail.classList.add("show");
        overlay.classList.add("overlay");
    })

    todo_description_close.addEventListener("click", ()=>{
        detail.classList.remove("show");
        overlay.classList.remove("overlay");
    })

    overlay.classList.remove("overlay");
};


const add_todo_modal = document.getElementById("add_todo_modal");
const add_todo_button = document.getElementById("add_todo_button");
const close = document.getElementById("modal_close");

add_todo_button.addEventListener("click",()=>{
    add_todo_modal.classList.add("show");
    overlay.classList.add("overlay");
});

close.addEventListener("click",()=>{
    add_todo_modal.classList.remove("show");
    overlay.classList.remove("overlay");
});


    


