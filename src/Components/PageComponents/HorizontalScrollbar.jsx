//App
import React from "react";

//Icon
import { SlArrowRight } from "react-icons/sl";

//Data
import horizontalScrollData from "../../Data/horizontalScrollData.json";

const HorizontalScrollBar = () => {
  return (
    <>
      <style>
        {`
        .horizontal-scroll-container {
            display: flex;
            overflow-x: auto;
            padding: 10px 0;
          }
          
          .horizontal-scroll-content {
            display: flex;
            gap: 10px;
          }
          
          .scroll-item {
            font-size: 14px;
            font-weight: 400;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            align-items: center;
          }
          
        `}
      </style>
      <div className="horizontal-scroll-container mt-[1rem] space-x-1">
        <div className="horizontal-scroll-content">
          {horizontalScrollData.map((text, index) => (
            <div key={index} className="scroll-item p-1">
              {text}
            </div>
          ))}
        </div>
        <div className="border w-8 h-8 rounded-full flex items-center justify-center">
          <SlArrowRight />
        </div>
      </div>
    </>
  );
};

export default HorizontalScrollBar;
