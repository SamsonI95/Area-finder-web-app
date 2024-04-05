import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-[100px] pt-[24px]">
      <div>
        <img src="public/ic_logo.png" alt="logo" />
      </div>
      <div className="flex items-center space-x-3">
        <h3>Welcome!</h3>
        <img src="public/Rectangle 32.png" alt="user" className="rounded-full"/>
      </div>
    </div>
  );
};

export default NavBar;
