import "./Style.css"
import { CDN_IMG_URL } from "../Utils/Links";
const Card=(props)=>{
     const {name,cuisines,cloudinaryImageId,avgRating,costForTwo,deliveryTime} = props.details
    

    return(
        <>
             <div className="Card overflow-hidden">
            <div className="image"><img src={`${CDN_IMG_URL}/${cloudinaryImageId}`} alt="" /></div>
            <div className="description_section">
            <div className="left_side_card">
             <div className="food_name">{name}</div>
            <div className="food_description">{cuisines.join(" ,")}</div>
            </div>
            <div className="right_side_card">
            <div className="Foot_rating">{avgRating}★</div>
            <div className="Food_price">{costForTwo}</div>
            <div className="Time">{deliveryTime}min</div>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Card;