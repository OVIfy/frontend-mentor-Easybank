import React,{useEffect,useState} from "react";
import './style.css'

 function NavItem(props){
    return(
        <li className={props.classes}>
          {props.text}
        </li>
    )
}

export default NavItem;