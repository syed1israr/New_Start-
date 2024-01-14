import "./Style.css"

const Card=({dishname,description,image,review,price,time})=>{
    
    

    return(
        <>
             <div className="Card">
            <div className="image"><img src={image} alt="" /></div>
            <div className="description_section">
            <div className="left_side_card">
             <div className="food_name">{dishname}</div>
            <div className="food_description">{description}</div>
            </div>
            <div className="right_side_card">
            <div className="Foot_rating">{review}★</div>
            <div className="Food_price">{price} for one </div>
            <div className="Time">{time}min</div>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Card;