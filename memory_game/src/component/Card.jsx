import React, { useState } from 'react';
import cardData from "./cardData";

export default function Card() {
    const [image, setImage] = useState({0:"backgroundImage", 1:"backgroundImage", 2:"backgroundImage", 3:"backgroundImage"});
    
    const click = (e) => {

        if(image[e.target.id] === "cardImage"){
            setImage({
                ...image,
                [e.target.id]:"backgroundImage"
            })
            return;
        }

        else {
            setImage({
                ...image,
                [e.target.id]:"cardImage"
            });
            return;
        }
    }
    

    return (
        <>
            { 
            cardData.map((record, index)=>{
           return <img src={cardData[index][image[index]]} id={index}
            alt="..." onClick={click}
        /> })
        }
            
        </>
    )
}
