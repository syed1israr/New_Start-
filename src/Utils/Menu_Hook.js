import { MENU_API } from "./Links";
import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [menuData, setMenuData] = useState(null);

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();

    setMenuData(json);
  };

  return menuData;
};

export default useRestaurantMenu;