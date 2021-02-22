import {todo_form} from "./todo_object"
import {todos} from "./todo_object"
import {content} from "./dom"


window.todo_form = todo_form;

export function remove_todos(i){
    todos.splice(i,1);
}


