//App
import React, { useState } from "react";

//Icon
import { FaStar } from "react-icons/fa";

const StarRatingSelf = () => {
  const [rating, setRating] = useState(null);

  const handleClick = (value) => {
    setRating(value);
  };
  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
              className="hidden"
            />
            <FaStar
              className="w-[30px] cursor-pointer -translate-x-1"
              color={ratingValue <= rating ? "#ffc107" : "#e9e9e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRatingSelf;
