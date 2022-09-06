import React from "react";
import Text from "./Text";

function NewsItem(props){

    return(
      <article >
        <div style={{width:props.width, height:props.height , backgroundColor:props.color}} className={props.classes}>
            <img width={props.imgWidth} className={props.imgStyle} height={props.imgHeight} src={props.src} />
            <Text level={props.authorLevel} text={props.author} color={props.authorColor} size={props.authorSize} classes={props.aStyle}/>
            <Text level={props.titleLevel} text={props.title} color={props.titleColor} size={props.titleSize} classes={props.tStyle}/>
            <Text level={props.contentLevel} text={props.content} color={props.contentColor} size={props.contentSize} classes={props. cStyle}/>
        </div>
      </article>
    )
}

export default NewsItem;