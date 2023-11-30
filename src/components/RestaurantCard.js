import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const resData = props.resData;
  
    const {cloudinaryImageId,name, cuisines,costForTwo,avgRating,deliveryTime} = resData
    return (
      <div className="restro-card">
        <img
          alt="meghana-foods"
          className="restro-logo"
          src={
            CDN_URL +
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

  export default RestaurantCard;