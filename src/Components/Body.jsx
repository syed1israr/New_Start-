import "./Style.css"
const Body=()=>{
    
    return(
        <>
         <input type="text" />
         <button  className="Search-btn">Search</button>
        <div className="Card">
            <div className="image"><img src="https://b.zmtcdn.com/data/pictures/chains/7/20073987/b4f8751b333315e7e46018b4427d9158_o2_featured_v2.jpg?output-format=webp" alt="" /></div>
            <div className="description_section">
            <div className="left_side_card">
             <div className="food_name">Hungry Point</div>
            <div className="food_description">Pizza,Fast Food,Burger</div>
            </div>
            <div className="right_side_card">
            <div className="Foot_rating">4.0★</div>
            <div className="Food_price">$100 for one </div>
            <div className="Time">19min</div>
            </div>
            </div>
            
        </div>
        
        </>
    )
   
}

export default Body;