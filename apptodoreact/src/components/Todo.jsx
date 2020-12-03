import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


function Tarefa({tarefas, tarefaCompleta}){
    const [editar, colocandoEdicao] = useState({
        id: null,
        value: ''
    })

    return tarefas.map((tarefa ,index) => (
        <div 
            className={tarefa.estaCompleta ? 'todo-row complete' : 'todo-row'} 
            key={index}
        >
            <div key={tarefa.id} onClick={() => tarefaCompleta(tarefa.id)}>
                {tarefa.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine />
                <TiEdit />
            </div>

        </div>
    ))
        
    
}

export default Tarefa