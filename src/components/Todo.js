import React, { useState } from 'react'
import TodoList from './TodoList';
function Todo({store}) {

const [value,setValue] = useState('');
const addTodo=()=>{
    if(value){
        setValue(value);
        store.addTodo(value);
        setValue('')
    }
}  
  return (
    <>
      <h2>To Do</h2>
      <label htmlFor="fname">Enter Todo:</label><br></br>
      <input type="text" id="fname" value={value} onChange={(e)=>setValue(e.target.value)} name="fname"/>
      <button onClick={addTodo}> Add Todo </button>
      <TodoList />
    </>
  );
}

export default Todo;
