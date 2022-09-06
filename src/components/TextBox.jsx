import React,{useEffect,useState} from "react";
import Text from "./Text";
import './style.css'


function TextBox(props){

    return(
     <div  style={{width:props.width,backgroundColor:props.backgroundColor}} className={props.boxClasses}>
        {props.url && <img width={props.imgWidth} height={props.imgHeight} src={props.url}/>} 
        <Text level={props.titleLevel} text={props.titleText} size={props.titleSize || "50px"} color={props.titleColor} classes={props.classes} textAlign={props.titleTextAlign || props.textAlign}/>
        <Text level={props.contentLevel} text={props.contentText} size={props.contentSize} color={props.contentColor} classes={props.classes} textAlign={props.contentTextAlign || props.textAlign}/>
         {props.children}
      </div>)
}

export default TextBox;