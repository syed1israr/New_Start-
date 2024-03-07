import React from 'react'
import { useParams } from 'react-router-dom'
import { CDN_IMG_URL } from '../Utils/Links';
import Menu_Hook from '../Utils/Menu_Hook';
const RestaurantDetails = () => {
    
    const { id }=useParams();
    const menu_data = Menu_Hook(id);
    
    const itemCards =
    menu_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.carousel;

    console.log("itemcards ",itemCards)
    // console.log("itemcards ",itemCards[0].dish.info)
 
  
  // return (
  //   <>
  //     {
  //        itemCards && itemCards.map((item)=>
  //       <h1>{item.dish.info.name}</h1>
  //       )
  //     } 
  //   </>
  // )
  return (
    <div className="flex text-center ml-[12vw] mt-2">
      <div className="rest-menu-list">
        { itemCards && itemCards.map((item) => (
          <div
            data-testid="foodItems"
            key={item.dish.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.dish.info.name}</span>
                <span>
                  - ₹{item.dish.info.defaultPrice
   ? item.dish.info.defaultPrice / 100 : 200}
                </span>
              </div>
              <p className="text-xs">{item.dish.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
              </div>
              <img src={CDN_IMG_URL + item.dish.info.imageId} className="w-full" />
              <button
                  className=" -ml-[2px] mt-1  p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                >
                  Add +
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default RestaurantDetails