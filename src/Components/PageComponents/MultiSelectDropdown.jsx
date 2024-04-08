//App
import React, { useState } from "react";

//Data
import selectAmenitiesData from "../../Data/selectAmenitiesData.json";

//Icon
import { IoIosArrowDown } from "react-icons/io";

const MultiSelectDropdown = () => {
  //Dropdown function
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen)
};

  //Checkbox function
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleCheckboxChange = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);
  };
  return (
    <div>
      <div  className="flex items-center justify-between w-[350px] lg:w-[675px] h-[50px] bg-[#F3F7FE] px-4 rounded-lg">
        <h3>Select Amenities</h3>
        <button onClick={toggleDropdown}>
          <IoIosArrowDown />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col lg:grid grid-cols-5 gap-x-4 py-2 px-4 w-[350px] lg:w-[675px]  border bg-[#F3F7FE] rounded-lg" style={{ maxHeight: "200px", overflowY: "auto" }}>
          {selectAmenitiesData.map((option, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
                className="mr-3"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
