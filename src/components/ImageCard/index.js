import React from "react";
import "./ImageCard.css";

const ImageCard = (props) => {

    console.log(props.image);
    return (
    <div onClick = {() => props.clickedLogos(props.id)} className = " img-container">
        <div className = "logo">
        <img src={props.image} alt={props.id}/> 
      
        </div>
    </div>
    
);

}
  
  export default ImageCard;