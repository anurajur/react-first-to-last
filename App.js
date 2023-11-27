import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const resData = props.resData;

  const {cloudinaryImageId,name, cuisines,costForTwo,avgRating,deliveryTime} = resData
  return (
    <div className="restro-card">
      <img
        alt="meghana-foods"
        className="restro-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    id: "1",
    name: "KFC",
    cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.2,
    deliveryTime: 38,
    costForTwo: 400,
    cuisines: ["Chinese", "North Indian", "Punjabi"],
  },
  {
    id: "2",
    name: "Meghana",
    cloudinaryImageId: "u3w6zgapfaun4zyt5pxn",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.42,
    deliveryTime: 42,
    costForTwo: 250,
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  },
  {
    id: "3",
    name: "Hyderbad house",
    cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.62,
    deliveryTime: 25,
    costForTwo: 340,
    cuisines: ["Indian", "Chinese"],
  },
  {
    id: "4",
    name: "trinetra",
    cloudinaryImageId: "thzhbierhb2qxhqsl0bo",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 3.2,
    deliveryTime: 33,
    costForTwo: 400,
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  },
  {
    id: "5",
    name: "KFC",
    cloudinaryImageId: "jwzxv4hmmnyuice4pe8x",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.2,
    deliveryTime: 38,
    costForTwo: 800,
    cuisines: ["Indian", "Chinese"],
  },
  {
    id: "6",
    name: "KFC",
    cloudinaryImageId: "qrqhfouxoeqt8aflj2yt",
    locality: "ITPL Main Road",
    areaName: "Whitefield",
    costForTwo: "₹300 for two",
    avgRating: 4.2,
    deliveryTime: 45,
    costForTwo: 600,
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
       {
        resList.map(restaurant=> <RestaurantCard  key={restaurant.id} resData={restaurant}/>)
       }
      </div>
    </div>
  );
};

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent />);
