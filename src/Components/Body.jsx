import Card from "./Cards";
import "./Style.css"
import { restraunts } from "./List";
const Body=()=>{
    
    return(
        <>
         <input type="text" />
         <button  className="Search_btn mt-3">Search</button>
        <div className="flex flex-wrap">
        {
            restraunts.map((restraunt)=>(
                <Card 
                key={restraunt.id}
                dishname={restraunt.dishName}
                description={restraunt.description}
                image={restraunt.image}
                review={restraunt.review}
                price={restraunt.price}
                time={restraunt.time}
                />
            ))
        }
        </div>
        </>
    )
   
}

export default Body;