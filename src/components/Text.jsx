import React,{useEffect,useState} from "react";
import './style.css'

function Text(props){
    let heading = null;
    switch (props.level) {
        case "1":
          heading = <h1 className={props.classes}style={{fontSize:props.size,color:props.color,textAlign:props.textAlign}}>{props.text}</h1>
            break;
        case "2":
          heading = <h2 className={props.classes} style={{fontSize:props.size,color:props.color,textAlign:props.textAlign}}>{props.text}</h2>
            break;
        case "3":
          heading = <h3 className={props.classes} style={{fontSize:props.size,color:props.color,textAlign:props.textAlign}}>{props.text}</h3> 
            break;
        case "4":
          heading = <h4 className={props.classes} style={{fontSize:props.size,color:props.color,textAlign:props.textAlign}}>{props.text}</h4>  
            break;
        case "5":
          heading = <h5 className={props.classes} style={{fontSize:props.size,color:props.color,textAlign:props.textAlign}}>{props.text}</h5> 
            break;
        default:
          heading = <p className={props.classes} style={{fontSize:props.size,color:props.color,textAlign:props.textAlign}}>{props.text}</p>
            break;
    }
   
    return(
      heading
   )
}

export default Text;