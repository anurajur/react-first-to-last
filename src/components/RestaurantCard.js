import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const resData = props.resData;
  
    const {cloudinaryImageId,name, cuisines,costForTwo,avgRating,sla} = resData

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
        {cuisines && Array.isArray(cuisines) && (
        <h4>{cuisines.join(", ")}</h4>
      )}
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

  export default RestaurantCard;