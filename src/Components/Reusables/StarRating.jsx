// YourStarRating.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ ratingNumber }) => {
  const renderStars = () => {
    const roundedRating = Math.round(ratingNumber); // Round to the nearest whole number

    return (
      <div className="flex items-center">
        {/* Display one solid star */}
        <FontAwesomeIcon
          icon={faStar}
          className="text-yellow-400 text-sm mr-1"
        />
        {/* Display the rating number */}
        <span className="text-sm">{roundedRating.toFixed(1)}</span>
      </div>
    );
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
