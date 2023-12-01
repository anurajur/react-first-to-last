import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfReastaurants, setListOfReastaurants] = useState([]);
  const [filteredRestaurant, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // setListOfReastaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    const resturantList =
      json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants.map(
        (res) => res.info
      );
    setListOfReastaurants(resturantList);
    setFilteredRes(resturantList);
  };

  return listOfReastaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const ListOfFilteredRestaurant = listOfReastaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(ListOfFilteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfReastaurants.filter(
              (res) => res.avgRating > 4.5
            );
            console.log(listOfReastaurants);
            setListOfReastaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="restro-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
