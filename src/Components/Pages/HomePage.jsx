//App
import React from "react";

//Component
import HomePageCard from "../PageComponents/HomePageCard";

//Icons
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <section className="w-fit">
          <h3 className="text-[#1E1E1E] font-bold text-[64px] w-[504px]">
            Find a place you will to live!
          </h3>
          <p className="text-[#1E1E1E] text-[24px] w-[507px]">
            See through the lenses of people who have lived or visited the
            neighbourhood you might have in mind.
          </p>
          <div className="">
            <input
              type="search"
              placeholder="Enter Address"
              className="placeholder-[#484851] border border-[#D4DCF1] bg-[#F3F7FE] rounded-lg w-[557px] h-[50px] pl-12"
            />
            <LuSearch className="relative bottom-8 left-5 text-[#484851]" />
          </div>
          <button className="bg-[#3366FF] text-white w-[146px] h-[50px] rounded-lg">
            <Link to="/reviews">SEARCH</Link>
          </button>
        </section>
        <section className="w-fit">
          <HomePageCard />
        </section>
      </div>
    </>
  );
};

export default HomePage;
