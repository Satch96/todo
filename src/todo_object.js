import {display_todo} from "./dom"

export let todos = [];

const todo = (title, description, dueDate, priority)=>{
    return {title, description, dueDate, priority}
};


const add_todo_modal = document.getElementById("add_todo_modal");

export function todo_form(){
    
    const form = document.getElementById("form");
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const due_date = document.getElementById("due_date").value;
    const priority = document.getElementById("priority").value;

    todos.push(todo(title, description, due_date, priority));

    display_todo();

    add_todo_modal.classList.remove("show");
    form.reset();
}
