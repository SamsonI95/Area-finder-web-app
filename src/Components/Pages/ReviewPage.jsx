//App
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Component
import HorizontalScrollBar from "../PageComponents/HorizontalScrollbar";
import ReviewPageCard from "../PageComponents/ReviewPageCard";
import MultiSelectDropdown from "../PageComponents/MultiSelectDropdown";
import StarRatingSelf from "../Reusables/StarRatingSelf";

//Icons
import { LuSearch } from "react-icons/lu";
import { LiaBookmark } from "react-icons/lia";
import { BsShare } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";

const ReviewPage = () => {
  //Modal function
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //Form validation function
  const [review, setReview] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false); // State for success popup
  const navigate = useNavigate(); // Hook for navigation

  const handleInputChange = (e) => {
    setReview(e.target.value);
    setIsFormFilled(e.target.value.trim().length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessPopupOpen(true);
    // Optionally, reset form fields or perform other cleanup actions
    setReview("");
    setIsAnonymous(false);
    setIsFormFilled(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("outside-click-area")) {
        setIsSuccessPopupOpen(false);
        navigate(-1);
      }
    };

    if (isSuccessPopupOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSuccessPopupOpen, navigate]);

  return (
    <>
      <div className="">
        <section className="bg-[#F2F6FD] px-[20px] lg:px-[100px]">
          <section className="lg:flex items-center justify-between ">
            <div className="absolute top-[3.8rem] left-0 lg:top-4 lg:left-[15rem] w-[100%] lg:w-fit bg-[#F2F6FD]">
              <input
                type="search"
                className="relative left-6 lg:left-0 w-[343px] lg:w-[778px] h-[50px] border border-[#D4DCF1] rounded-lg my-2 lg:my-0"
              />
              <LuSearch className="relative bottom-[2.5rem] lg:bottom-[2rem] left-9 lg:left-3 " />
              <button className="absolute top-[1.5rem] lg:top-5 right-[5rem] lg:right-4">
                <IoClose />
              </button>
            </div>
            <div className="mt-[5rem] lg:mt-[2rem] w-[343px] lg:w-fit">
              <h3 className="font-medium text-[16px] lg:text-2xl mb-2">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </h3>
              <p className="font-[500] text-[12px] lg:text-[16px]">
                “450” Reviews (People are raving about the selected location)
              </p>
            </div>
            <div className="flex items-center space-x-5 mt-4 lg:mt-[2rem]">
              <button
                className="text-white bg-[#3366FF] w-[194px] lg:w-[210px] h-[45px] lg:h-[50px] text-semibold rounded-lg"
                onClick={toggleModal}
              >
                LEAVE A REVIEW
              </button>
              <button className="border-[2px] border-[#3366FF] w-[56px] h-[40px] lg:h-[50px] text-3xl flex items-center justify-center rounded-lg">
                <LiaBookmark className="text-[#3366FF]" />
              </button>
              <button className="border-[2px] border-[#3366FF] w-[56px] h-[40px] lg:h-[50px] text-2xl flex items-center justify-center rounded-lg">
                <BsShare className="text-[#3366FF]" />
              </button>
            </div>
          </section>
          <section>
            <HorizontalScrollBar />
          </section>
        </section>
        <section className="grid lg:flex items-center lg:space-x-5 mt-[2rem] px-[20px] lg:px-[100px] lg:w-full">
          <ReviewPageCard />
          <div className="grid grid-cols-3 lg:grid-cols-2 w-fit gap-2 lg:gap-4 lg:-translate-y-[4rem] order-first lg:order-last mb-[2rem] lg:mb-0">
            {/* Desktop Images */}
            <img
              src="public/Placeholder Image.png"
              alt="location2"
              className="rounded-lg hidden lg:block"
            />
            <img
              src="public/Placeholder Image (1).png"
              alt="location3"
              className="rounded-lg hidden lg:block"
            />
            <img
              src="public/Placeholder Image (2).png"
              alt="location4"
              className="rounded-lg hidden lg:block"
            />
            <img
              src="public/Frame 46.png"
              alt="location1"
              className="hidden lg:block"
            />

            {/* Mobile Images */}
            <img
              src="/mobilereviewimg1.png"
              alt="location1"
              className="rounded-lg lg:hidden col-span-1 row-span-2"
            />
            <img
              src="/mobilereviewimg2.png"
              alt="location2"
              className="rounded-lg lg:hidden"
            />
            <img
              src="/mobilereviewimg3.png"
              alt="location3"
              className="rounded-lg lg:hidden"
            />
            <img
              src="/mobilereviewimg2.png"
              alt="location4"
              className="rounded-lg lg:hidden"
            />
            <img
              src="/mobilereviewimg3.png"
              alt="location5"
              className="rounded-lg lg:hidden"
            />
          </div>
        </section>

        {/* Modal action */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-[#1D3045] flex items-center justify-center z-10">
            <form
              onSubmit={handleSubmit}
              className="py-4 px-5 lg:px-6 bg-white rounded-lg mx-4 my-8"
            >
              <h3 className="py-2 text-center font-semibold text-lg">
                Review Location
              </h3>
              <h3 className="text-[20px] font-semibold mb-3">
                Bonny and Clyde Street, Ajao Estate, Lagos
              </h3>
              <MultiSelectDropdown />
              <div className="my-3">
                <h3 className="mb-2">Rate Location</h3>
                <StarRatingSelf />
              </div>
              <div className="my-4">
                <h3 className="mb-3">Write Review</h3>
                <textarea
                  type="text"
                  value={review}
                  onChange={handleInputChange}
                  className="w-[350px] lg:w-[647px] h-[173px] border border-[#D4DCF1] rounded-lg p-2"
                />
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                />
                <label>Post As Anonymous</label>
              </div>
              <div className="mt-4 space-x-5">
                <button
                  type="submit"
                  className={`w-[143.5px] lg:w-[312px] h-[50px] rounded-lg text-[16px] font-medium ${
                    isFormFilled
                      ? "bg-[#3366FF] text-white"
                      : " bg-[#E4E9FB] text-white cursor-not-allowed"
                  }`}
                >
                  SUBMIT
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="border border-[#3366FF] w-[143.5px] lg:w-[312px] h-[50px] rounded-lg text-[#3366FF] text-[16px] font-medium"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Success Popup */}
        {isSuccessPopupOpen && (
          <div
            onClick={() => {
              setIsSuccessPopupOpen(false);
              setIsModalOpen(false);
            }}
            className="fixed inset-0 bg-gray-800 flex items-center justify-center z-20"
          >
            <div className="bg-white w-[339px] h-[50px] rounded-lg shadow-lg flex items-center justify-center">
              <h2 className="flex items-center text-lg text-[#0F920F] font-semibold">
                <FiCheckCircle className="mr-[15px]" /> Review submitted
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewPage;
