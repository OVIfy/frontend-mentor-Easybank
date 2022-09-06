import React,{useEffect,useState} from "react";
import './style.css'


function Box(props){

    return(
    <div className={props.classes} style={{width:props.width,height:props.height,backgroundColor:props.color}}>
       {props.children}
    </div>
    )
}

export default Box;