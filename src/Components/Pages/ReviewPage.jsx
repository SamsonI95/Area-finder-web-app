//App
import React from "react";

//Component
import HorizontalScrollBar from "../PageComponents/HorizontalScrollbar";

//Icons
import { LiaBookmark } from "react-icons/lia";
import { BsShare } from "react-icons/bs";
import ReviewPageCard from "../PageComponents/ReviewPageCard";

const ReviewPage = () => {
  return (
    <>
      <div className="px-[100px] mt-[2rem]">
        <section>
          <section className="flex items-center justify-between ">
            <div>
              <h3 className="font-medium text-2xl">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </h3>
              <p className="font-[400] text-[16px]">
                “450” Reviews (People are raving about the selected location)
              </p>
            </div>
            <div className="flex items-center space-x-5">
              <button className="text-white bg-[#3366FF] w-[210px] h-[50px] text-semibold rounded-lg">
                LEAVE A REVIEW
              </button>
              <button className="border-[2px] border-[#3366FF] w-[56px] h-[50px] text-3xl flex items-center justify-center rounded-lg">
                <LiaBookmark className="text-[#3366FF]" />
              </button>
              <button className="border-[2px] border-[#3366FF] w-[56px] h-[50px] text-2xl flex items-center justify-center rounded-lg">
                <BsShare className="text-[#3366FF]" />
              </button>
            </div>
          </section>
          <section>
            <HorizontalScrollBar />
          </section>
        </section>
        <section className="flex items-center space-x-3 mt-[2rem]">
          <ReviewPageCard />
          <div className="grid grid-cols-2 w-fit gap-4 -translate-y-[22rem]">
            <img src="public/Placeholder Image.png" alt="location2" className="rounded-lg"/>
            <img src="public/Placeholder Image (1).png" alt="location3" className="rounded-lg"/>
            <img src="public/Placeholder Image (2).png" alt="location4" className="rounded-lg"/>
            <img src="public/Frame 46.png" alt="location1" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ReviewPage;
