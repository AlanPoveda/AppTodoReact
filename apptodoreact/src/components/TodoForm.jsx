import React, { useState } from 'react';

function TodoForm(){
const [input, setInput] = useState('')

    return(
        <form className= 'todo-form'>
            <input 
            type = 'text' 
            placeholder='Coloque a tarefa' 
            value = {input}
            name = 'text'
            className = 'todo-input' 
        />
        <button className ="todo-button">Adicionar tarefa</button>
        </form>
    )
}
    
export default TodoForm