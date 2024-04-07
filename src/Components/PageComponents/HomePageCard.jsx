//App
import React, { useEffect } from "react";

//Component
import StarRating from "../Reusables/StarRating";

//Icon
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import { FaCommentAlt } from "react-icons/fa";

//Data
import homePageCardData from "../../Data/homePageCardData.json";

//Style
import "./HomePageCard.css";

const HomePageCard = () => {
  useEffect(() => {
    const cardContainer = document.getElementById("cardContainer");

    const handleScroll = () => {
      if (cardContainer.scrollTop === 0) {
        cardContainer.scrollTop = cardContainer.scrollHeight;
      } else if (
        cardContainer.scrollTop + cardContainer.clientHeight ===
        cardContainer.scrollHeight
      ) {
        cardContainer.scrollTop = 0;
      }
    };

    const scrollInterval = setInterval(() => {
      handleScroll();
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, []);

  const getColorMapping = (text) => {
    const mappings = {
      network: {
        padding: "1px 8px",
        color: "#AD307B",
        fontWeight: "500",
        border: "1px solid",
        borderColor: "#FCDCEF",
        borderRadius: "15px",
        backgroundColor: "#FCDCEF",
      },
      traffic: {
        padding: "1px 8px",
        color: "#594510",
        fontWeight: "500",
        border: "1px solid",
        borderColor: "#A07C22",
        borderRadius: "15px",
        backgroundColor: "#F5E9CB",
      },
      power: {
        padding: "1px 8px",
        color: "#101012",
        fontWeight: "500",
        borderColor: "#F66A57",
        borderRadius: "15px",
        backgroundColor: "#F66A57",
      },
      water: {
        padding: "1px 8px",
        color: "#1F4781",
        fontWeight: "500",
        border: "1px solid",
        borderColor: "#2863B8",
        borderRadius: "15px",
        backgroundColor: "#D1E4FA",
      },
    };

    return mappings[text.toLowerCase()] || {}; // Default to empty object if text is not found
  };

  return (
    <>
      <div
        id="cardContainer"
        className="grid grid-cols-2 gap-x-4 w-fit  bg-gray-200 overflow-hidden scroll-fade"
      >
        {homePageCardData.map((item, index) => (
          <div
            key={index}
            className="border border-none rounded-lg bg-[#FAFCFD] shadow-md w-[239px] p-3 mb-4"
          >
            <div className="flex items-center justify-between space-x-4">
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
                  <FaCommentAlt />
                  {item.comments}
                </h3>
              </div>
              <div>
                <h3 style={getColorMapping(item.problem)}>{item.problem}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageCard;
