import React from 'react'
import store from '../store';
import {observer} from 'mobx-react'

function TodoList() {

    return (
<>
    <h2>To Do List Items</h2>
    {
    store.todos.map((value)=>{
        return(
            <ul key={value.id}>
                <li>
                    {value.todo}
                </li>
                <button type='button' onClick={()=>store.deleteTodo(value.id)}>Delete</button>
            </ul>
            )
        })   
    }
</>
  );
}

export default observer(TodoList);
