import './CreateTodoButton.css';

function CreateTodoButton(){
    return(
        <button className="btn_todo" 
        onClick={(event)=> {
                console.log('le diste clic')
                // console.log(event)
                // console.log(event.target)
            }
        }
        >+</button>
    )
}

export {CreateTodoButton}