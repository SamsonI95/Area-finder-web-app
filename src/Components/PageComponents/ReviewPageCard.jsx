//App
import React, { useEffect } from "react";

//Component
import StarRating from "../Reusables/StarRating";

//Icon
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import { FaCommentAlt } from "react-icons/fa";

//Data
import reviewPageCardData from "../../Data/reviewPageCardData.json";

const ReviewPageCard = () => {
  return (
    <>
      <div>
        {reviewPageCardData.map((item, index) => (
          <div className="w-[650px] h-[143px]">
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2">
                <img src={item.image} alt={item.name} />
                <h3 className="font-semibold text-[#1E1E1E]">{item.name}</h3>
                <p
                  className="text-[14px] text-[#1E1E1E]"
                >
                  {item.date}
                </p>
              </div>
              <StarRating ratingNumber={item.starRating} />
            </div>
            <div>
              <h3 className="text-medium ">{item.review}</h3>
            </div>
            <div className="flex items-center space-x-2 text-[#8F95B2]">
              <h3 className="flex items-center">
                <IoMdThumbsUp />
                {item.like}
              </h3>
              <h3 className="flex items-center">
                <IoMdThumbsDown />
                {item.dislike}
              </h3>
              <h3 className="flex items-center">
                <FaCommentAlt />
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
