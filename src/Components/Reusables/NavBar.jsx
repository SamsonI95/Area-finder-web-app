import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Determine the background color based on the current pathname
  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/home":
        return "bg-white"; // Example color for the Home page
      case "/reviews":
        return "bg-[#F2F6FD]"; // Example color for the Reviews page
      default:
        return "bg-white"; // Default color for other pages
    }
  };
  return (
    <>
      <div
        className={`flex items-center justify-between w-full px-[20px] pt-[24px] md:px-[100px] ${getBackgroundColor()}`}
      >
        <div>
          <Link to="/home">
            <img src="public/ic_logo.png" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <h3>Welcome!</h3>
          <img
            src="public/Rectangle 32.png"
            alt="user"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
