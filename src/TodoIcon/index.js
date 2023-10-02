import React from "react";
import {FaCheck} from 'react-icons/fa';
import {CgClose} from 'react-icons/cg';
import './TodoIcon.css'

const icons = {
    'check': (color) => <FaCheck className="icon_svg" fill={color}/>,
    'delete': (color) => <CgClose className="icon_svg" fill={color}/>
}
    
function TodoIcon({type, color, onClick}){
    return(
        <span 
        className={`icon_container icon_container_${type}`}
        onClick = {onClick}
        >
            
            {icons[type](color) }
            
        </span>
    )
}

export {TodoIcon}