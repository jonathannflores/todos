import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter(){

    const {completedTodos,
        totalTodos
        } = React.useContext(TodoContext)

    return(
        <>
            {totalTodos !== completedTodos && (
                <h1 className="counter">
                Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
                </h1>
            )}
            
            {((totalTodos === completedTodos) && (totalTodos !== 0) ) && (
                <h1 className="counter">
                Felicidades, has completado todos los TODOs!
                </h1>
            )}

            {totalTodos === 0 && (
                <h1 className="counter">
                No hay TODOs pendientes...
                </h1>
            )}
        </>


        
    )
}

export {TodoCounter}