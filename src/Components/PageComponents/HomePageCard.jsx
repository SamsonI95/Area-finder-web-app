//App
import React from "react";

//Component
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import { GoComment } from "react-icons/go";

//Data
import homePageCardData from "../../Data/homePageCardData.json";
import StarRating from "../Reusables/StarRating";

const HomePageCard = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 w-fit bg-gray-200">
        {homePageCardData.map((item, index) => (
          <div key={index} className="border border-none rounded-lg bg-[#FAFCFD] shadow-md w-[239px] p-3 mb-4">
            <div className="flex items-center justify-beetween space-x-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3 className="font-semibold text-[#1E1E1E]">{item.name}</h3>
                  <p className="text-[10px]">{item.date}</p>
                </div>
              </div>
              <div>
                <h3>{item.location}</h3>
                <StarRating ratingNumber={item.starRating} />
              </div>
            </div>
            <div className="w-[207px]">
              <h3 className="text-medium ">{item.review}</h3>
            </div>
            <div className="flex items-center justify-between">
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
                  <GoComment />
                  {item.comments}
                </h3>
              </div>
              <div>
                <h3>{item.problem}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageCard;
