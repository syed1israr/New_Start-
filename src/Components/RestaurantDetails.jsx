import React from 'react';
import { useParams } from 'react-router-dom';
import { CDN_IMG_URL } from '../Utils/Links';
import Menu_Hook from '../Utils/Menu_Hook';

const RestaurantDetails = () => {
  const { id } = useParams();
  const menuData = Menu_Hook(id);

  const itemCards =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || [];
  const itemCards1 =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
  console.log("carousel",itemCards)
  console.log("itemCards",itemCards1)
  return (
    <div className="flex text-center items-center justify-center mt-2">
      <div className="rest-menu-list">
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <div
              key={item.dish.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.dish.info.name}</span>
                  <span>
                    - ₹{item.dish.info.defaultPrice ? item.dish.info.defaultPrice / 100 : 200}
                  </span>
                </div>
                <p className="text-xs">{item.dish.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <img src={CDN_IMG_URL + item.dish.info.imageId} className="w-full" alt={item.dish.info.name} />
                <button className="-ml-[2px] mt-1 p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                  Add +
                </button>
              </div>
            </div>
          ))
        ) : itemCards1.length > 0 ? (
          itemCards1.map((item) => (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : 200}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <img src={CDN_IMG_URL + item.card.info.imageId} className="w-full" alt={item.card.info.name} />
                <button className="-ml-[2px] mt-1 p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                  Add +
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
