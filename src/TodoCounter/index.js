import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return(
        <>
            {total !== completed && (
                <h1 className="counter">
                Has completado <span>{completed}</span> de <span>{total}</span> TODOs
                </h1>
            )}
            
            {((total === completed) && (total !== 0) ) && (
                <h1 className="counter">
                Felicidades, has completado todos los TODOs!
                </h1>
            )}

            {total === 0 && (
                <h1 className="counter">
                No hay TODOs pendientes...
                </h1>
            )}
        </>


        
    )
}

export {TodoCounter}