import React from "react";
import { useState ,useEffect} from "react";
import CardItem from "./CardItem"
import "./Cards.css"
const Cards=({ImageSearch})=>{
    const [cardArray,setCardArray]=useState([])
    console.log(ImageSearch)
    const FetchData=async()=>{
        const Response=await fetch("https://api.punkapi.com/v2/beers")
        const data=await Response.json();
        console.log(data)
        if(ImageSearch!==""){
            const newarray=data.filter((element)=>{
                return element.name.toLowerCase().includes(ImageSearch.toLowerCase())
            })
            setCardArray(newarray)
            return;
        }
        setCardArray(data)
    }
    useEffect(()=>{
        FetchData();
    },[ImageSearch])

    return <div className="Cards">
        {cardArray.length>0&&(
            cardArray.map((element)=>{
                return <CardItem key={element.id} name={element.name} desc={element.description} image={element.image_url}/>
            })
        )}
        {cardArray.length===0&&<h1 style={{margin:"auto"}}>No Items Available</h1>}
    </div>
}
export default Cards;