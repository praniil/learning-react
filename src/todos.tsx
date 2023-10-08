import React from 'react'
import { useState } from 'react';

const Todos = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState<{ text: string, id: number }[]>([]);

  function todoAdd() {
    if (input.trim() !== '') {

      const todoList = {
        text: input,
        id: Date.now()
      };
      setList([...list, todoList]);
      
      // console.log("above")
      setInput('');
      // console.log("belowsetinp")
    }
  }

  function handleDelete(id : any) {
    const newList = list.filter((todo) => todo.id !== id) 
      setList(newList)
    
  }
  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h1>My Todos List</h1>
      <input type="text" name="" id="todo" placeholder='Enter the todos' onChange={handleInput} />
      <button onClick={todoAdd}>Add + </button>
      {list.map((todo) => (
        <div>

        <li key={todo.id}> {todo.text} </li>    
        <button onClick={() => handleDelete (todo.id)}>Del</button>
        </div>
      ))}
    </div>
  )
}

export default Todos
