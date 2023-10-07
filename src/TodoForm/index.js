import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm(){
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onCancel = ()=>{
        setOpenModal(false)
    }

    const onSubmit = () => {
        if(newTodoValue!==''){
            addTodo(newTodoValue)
            setOpenModal(false)
        } 
        
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form>
            <label>Crea un nuevo TODO</label>
            <textarea placeholder="Escribe un TODO" value={newTodoValue} onChange={onChange}></textarea>

            <div className='button-container'>
                <button className="TodoForm-button TodoForm-button--cancel"
                type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button className="TodoForm-button TodoForm-button--add"
                type="button" onClick={onSubmit}>
                    Agregar
                </button>
            </div>
        </form>
    )
}

export {TodoForm}