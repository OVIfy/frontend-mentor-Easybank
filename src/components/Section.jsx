import React from "react";
import './style.css'

function Section(props){
    return(
        <div  className={props.p1  || 'fr c'} style={{backgroundColor:props.color}}>
            <div  className={props.p2 || 'fb1'}>
              
              {props.children}

            </div>
        </div>
        )

}

export default Section;
