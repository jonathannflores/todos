import { TodoContext } from '../TodoContext';
import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(){

    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return(
        <button className="btn_todo" 
        onClick={()=> {
                setOpenModal(!openModal)
               
            }
        }
        >+</button>
    )
}

export {CreateTodoButton}