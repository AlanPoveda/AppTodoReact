import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Tarefa from './Todo'


function TodoList(){
    const [tarefas, selecionarTarefas] = useState([]);

    const adicionandoTarefa = tarefa =>{
        //validação de dados
        if (!tarefa.text || /^\s*$/.test(tarefa.text)){
            return
        }

        const novasTarefas = [tarefa, ...tarefas]

         selecionarTarefas(novasTarefas)
    };

    const tarefaCompleta = id => {
        let updateTarefa = tarefas.map(tarefa =>{
            if (tarefa.id === id){
                tarefa.estaCompleta = !tarefa.estaCompleta;
            }
            return tarefa;
        })
        selecionarTarefas(updateTarefa);
    }


    return(
        <div className='todo-app'>
            <TodoForm onSubmit={adicionandoTarefa}/>
            <Tarefa tarefa={tarefas} tarefaCompleta={tarefaCompleta}/>
        </div>
    )
}

export default TodoList