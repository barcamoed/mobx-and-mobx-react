import { makeAutoObservable } from "mobx";

class Store{

    todos=[];
    newTodo = '';

    constructor(){
        makeAutoObservable(this)
    }

    addTodo(value){
        this.todos.push({id: Date.now(), todo:value})
    }
    deleteTodo(todoId){
        // const indexAtId = this.todos.findIndex((value) => value.id === todoId);
        // if (indexAtId > -1) {
        //   this.todos.splice(indexAtId, 1)
        // }
        const newTodosList = this.todos.filter((todo)=>todo.id!==todoId) 
        this.todos = newTodosList;
    }



}

const store = new Store()
export default store;