import React from 'react'
import './style.css'

function Button(props){
    return <button onClick={props.clicked} className={props.classes}>{props.text}</button>
}

export default Button;