import React from "react";
import {TodoIcon} from './index.js'

function CompleteIcon({completed, onCompleted}){
    return(
        <TodoIcon 
            type='check'
            color= {completed ? 'green'  : 'black'}
            onClick = {onCompleted}
        />
    )
}

export {CompleteIcon}