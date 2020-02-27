import React from "react";
import "./ImageCard.css";

const ImageCard = props => {
    return (
    <div onClick = {() => props.clickedLogos(props.id)} className = " img-container">
        <div className = "logo">
        <img src={props.image} alt={"public/images/SEC.jpg"}/> 
        </div>
    </div>
    
);
}
  
  export default ImageCard;