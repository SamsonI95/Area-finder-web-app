//App
import React, { useRef } from "react";

//Icon
import { SlArrowRight } from "react-icons/sl";

//Data
import horizontalScrollData from "../../Data/horizontalScrollData.json";

const HorizontalScrollBar = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style>
        {`
        .horizontal-scroll-container {
            display: flex;
            overflow-x: auto;
            width: 70rem;
            padding: 10px 0;
          }
          
          .horizontal-scroll-content {
            display: flex;
            gap: 10px;
            white-space: nowrap; /* Prevent text wrapping */
          }
          
          .scroll-item {
            font-size: 14px;
            font-weight: 400;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            align-items: center;
            padding: 5px;
          }
          
          .scroll-arrow {
            position: absolute;
            top: 32.2%;
            right: 6rem;
            transform: translateY(-50%);
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .scroll-item {
                font-size: 12px;
            }

            .horizontal-scroll-container {
              width: 100%;
            }
        }

        `}
      </style>
      <div className="horizontal-scroll-container mt-[1rem] space-x-1 no-scrollbar"  ref={scrollRef}>
        <div className="horizontal-scroll-content">
          {horizontalScrollData.map((text, index) => (
            <div key={index} className="scroll-item lg:p-1">
              {text}
            </div>
          ))}
        </div>
        <button
          className="hidden lg:flex scroll-arrow border w-8 h-8 rounded-full items-center justify-center"
          onClick={scrollRight}
        >
          <SlArrowRight />
        </button>
      </div>
    </>
  );
};

export default HorizontalScrollBar;
