import React from "react";
import "./ImageCard.css";
import cardImage from "../../cardImage.json";

console.log(cardImage);

const ImageCard = props => {
    return (
    <div onCLick = {() => props.clicked(props.id)} className = "row img-container">
        <div className = "logo">
        <img src={props.image} alt={""}/> 
        </div>
    </div>
);
}
  
  export default ImageCard;