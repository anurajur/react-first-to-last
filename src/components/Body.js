import React, {useState} from "react"
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

  const [restoList, setRestoList] = useState(resList)
  
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            filteredList = restoList.filter((res) => res.avgRating > 4.5)
            console.log(restoList)
            setRestoList(filteredList)
          }} >Top Rated restaurants</button>
        </div>
        <div className="restro-container">
         {
          restoList.map(restaurant=> <RestaurantCard  key={restaurant.id} resData={restaurant}/>)
         }
        </div>
      </div>
    );
  };

export default Body;