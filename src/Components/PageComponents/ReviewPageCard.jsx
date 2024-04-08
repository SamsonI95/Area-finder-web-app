//App
import React, { useEffect } from "react";

//Component
import StarRating from "../Reusables/StarRating";

//Icon
import { PiThumbsUpLight } from "react-icons/pi";
import { PiThumbsDownLight } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";

//Data
import reviewPageCardData from "../../Data/reviewPageCardData.json";

const ReviewPageCard = () => {
  return (
    <>
      <style>
        {`
          .review-card {
            transform: translateY(-1rem);
            border-bottom: 1px solid #D9D9D9;
            margin-bottom: 1rem;
          }
      `}
      </style>
      <div className="h-[600px] overflow-y-auto no-scrollbar">
        {reviewPageCardData.map((item, index) => (
          <div className="review-card lg:w-[600px] lg:h-[143px] mt-[1rem]" key={index}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <img src={item.image} alt={item.name} />
                <h3 className="font-semibold text-[#1E1E1E]">{item.name}</h3>
                <p className="text-[14px] text-[#1E1E1E]">{item.date}</p>
              </div>
              <StarRating ratingNumber={item.starRating} />
            </div>
            <div>
              <h3 className="text-medium mb-2">{item.review}</h3>
            </div>
            <div className="flex items-center space-x-4">
              <h3 className="flex items-center">
                <PiThumbsUpLight className="mr-1"/>
                {item.like}
              </h3>
              <h3 className="flex items-center">
                <PiThumbsDownLight className="mr-1"/>
                {item.dislike}
              </h3>
              <h3 className="flex items-center">
              <TfiComment className="mr-1"/>
                {item.comments}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewPageCard;
