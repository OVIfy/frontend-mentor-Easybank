import React from "react";

function Icon(props){

    return(
        <div className={props.classes} style={{width:props.width,height:props.height,background:`no-repeat center center/contain url(${props.url})`,backgroundColor:props.color}}>

        </div>
    )
}

export default Icon;