import "./Style.css"
import { CDN_IMG_URL } from "../Utils/Links";
import React, {useEffect } from 'react';
import { gsap } from 'gsap';
const Card=(props)=>{
    
     const {name,cuisines,cloudinaryImageId,avgRating,costForTwo,sla} = props.details
     useEffect(() => {
        const card = document.querySelectorAll('.Card');
    
        gsap.to(card, {
          y: 0,
          opacity: 1, 
          duration: 1,
          delay: 0.5, 
          ease: "power3.out",
        });
      }, []);
    return props.details ? (
        <>
            <div className="Card overflow-hidden ">
            <div className="image"><img src={`${CDN_IMG_URL}/${cloudinaryImageId}`} alt="" /></div>
            <div className="description_section">
            <div className="left_side_card">
            <div className="food_name">{name.length < 10 ? name : name.slice(0, 20)}</div>

             <div className="food_description">{cuisines.slice(0, 3).join(", ")}</div>

            </div>
            <div className="right_side_card">
            <div className="Foot_rating">{avgRating}★</div>
            <div className="Food_price">{costForTwo}</div>
            <div className="Time">{sla.deliveryTime} min</div>
            </div>
            </div>
            
             </div>
        </>
    ) : <div> <h1>nothing to show</h1></div>
}

export default Card;