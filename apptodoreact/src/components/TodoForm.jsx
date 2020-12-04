import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props){
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange = e =>{
         
        setInput(e.target.value);

    };

    const handleSubmit = e => {
        e.preventDefault();


        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        // Faz com que o input fique vazio após clicar no botão
        setInput('')
    }

    return(
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type = 'text' 
            placeholder='Coloque a tarefa' 
            value = {input}
            name = 'text'
            className = 'todo-input' 
            onChange={handleChange}
            ref={inputRef}
        />
        <button className ="todo-button">Adicionar tarefa</button>
        </form>
    )
}
    
export default TodoForm