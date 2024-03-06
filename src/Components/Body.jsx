
import Card from "./Cards";
import "./Style.css";
import { useEffect, useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const response = await data.json();
     
      // Access the correct property for restaurants
    const restaurantsData=response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants
       

      if (restaurantsData) {
        setRestaurants(restaurantsData);
        setFilteredRestaurants(restaurantsData);
      } else {
       
        console.error("Restaurants data not found in expected format");
      }
    }
     catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function filterRestaurants() {
    setFilteredRestaurants(
      restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  function TopRated() {
    setFilteredRestaurants(
      restaurants.filter((restaurant) => restaurant.info.avgRating > 4)
    );
  }

  return  (
    <>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button className="Search_btn mt-3" onClick={filterRestaurants}>
        Search
      </button>
      <button className="Search_btn mt-3" onClick={TopRated}>
        Top Rated
      </button>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Card key={restaurant.info.id} details={restaurant.info} />
        ))}
      </div>
    </>
  ) 
};

export default Body;
