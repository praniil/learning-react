//todos
import React, { useState } from 'react'

const Hooks = () => {
    const [inputTask, setInputTask] = useState("")
    const [todoArray, setTodoArray] = useState<{ text: string; id: number }[]>([])

    function addTodo() {
        if (inputTask.trim() !== ' ') {

            const newTask = {
                id: Date.now(),
                text: inputTask
            };
            setTodoArray([...todoArray, newTask])
            setInputTask('')
        }
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInputTask(event.target.value)
        console.log(event.target.value)
    }

    function handleDelete (id : any) {
        const newArrayList = todoArray.filter((todo) => todo.id !== id)
        setTodoArray(newArrayList);
    }
    return (
        <div>
            <input type="text" name="" id="" placeholder='enter your todos' value={inputTask} onChange={handleInput} ></input>

            <button onClick={addTodo}> ADD+ </button>
            <ul>
                
            {todoArray.map((todo) => (
                <div>

                <li key={todo.id}> {todo.text}</li>
                <button onClick={()=> handleDelete(todo.id)}>DEL-</button>
                </div>
                ))}
            </ul>
        </div>
    )
}

export default Hooks
