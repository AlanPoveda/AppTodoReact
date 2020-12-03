import React, { useState } from 'react';

function TodoForm(props){
    const [input, setInput] = useState('')

    const mudandoTarefas = tarefa =>{
         
        setInput(tarefa.target.value);

    };

    const colocandoTarefas = tarefa => {
        tarefa.preventDefault();


        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        // Faz com que o input fique vazio após clicar no botão
        setInput('')
    }

    return(
        <form className='todo-form' onSubmit={colocandoTarefas}>
            <input 
            type = 'text' 
            placeholder='Coloque a tarefa' 
            value = {input}
            name = 'text'
            className = 'todo-input' 
            onChange={mudandoTarefas}
        />
        <button className ="todo-button">Adicionar tarefa</button>
        </form>
    )
}
    
export default TodoForm