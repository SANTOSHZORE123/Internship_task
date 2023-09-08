import React from "react";
import "./CardItem.css"
const CardItem = ({name,desc,image}) => {
    const dataArray=desc.split(" ");
  return (
    <div className="divItem">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>{dataArray.map((element,i)=>{
            if(i<20){
                return element+" "
            }
        })}....</p>
    </div>
  );
};

export default CardItem;
