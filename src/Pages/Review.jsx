import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Profile from "../assets/Profile.jpg";

const Review = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-green-50 h-screen">
      <div className="bg-primary h-1/12  text-white pt-2">
        <FaChevronLeft
          className="ml-4 cursor-pointer"
          onClick={() => navigate("/profile")}
        />
        <p className="text-center text-2xl md:text-4xl">Reviews</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="text-center flex justify-center flex-col items-center gap-3 bg-white mx-4 mt-4 p-4 shadow-xl rounded-2xl">
          <img
            src={Profile}
            alt=""
            className="h-16 w-16 bg-primary-text rounded-full object-cover text-primary-text"
          />
          <h3 className="font-semibold capitalize text-lg">name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate excepturi nulla numquam ad omnis doloremque beatae
            assumenda blanditiis tenetur?
          </p>
        </div>
        <div className="text-center flex justify-center flex-col items-center gap-3 bg-white mx-4 mt-4 p-4 shadow-xl rounded-2xl">
          <img
            src={Profile}
            alt=""
            className="h-16 w-16 bg-primary-text rounded-full object-cover text-primary-text"
          />
          <h3 className="font-semibold capitalize text-lg">name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate excepturi nulla numquam ad omnis doloremque beatae
            assumenda blanditiis tenetur?
          </p>
        </div>
        <div className="text-center flex justify-center flex-col items-center gap-3 bg-white mx-4 mt-4 p-4 shadow-xl rounded-2xl">
          <img
            src={Profile}
            alt=""
            className="h-16 w-16 bg-primary-text rounded-full object-cover text-primary-text"
          />
          <h3 className="font-semibold capitalize text-lg">name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate excepturi nulla numquam ad omnis doloremque beatae
            assumenda blanditiis tenetur?
          </p>
        </div>
        <div className="text-center flex justify-center flex-col items-center gap-3 bg-white mx-4 mt-4 p-4 shadow-xl rounded-2xl">
          <img
            src={Profile}
            alt=""
            className="h-16 w-16 bg-primary-text rounded-full object-cover text-primary-text"
          />
          <h3 className="font-semibold capitalize text-lg">name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate excepturi nulla numquam ad omnis doloremque beatae
            assumenda blanditiis tenetur?
          </p>
        </div>
        <div className="text-center flex justify-center flex-col items-center gap-3 bg-white mx-4 mt-4 p-4 shadow-xl rounded-2xl">
          <img
            src={Profile}
            alt=""
            className="h-16 w-16 bg-primary-text rounded-full object-cover text-primary-text"
          />
          <h3 className="font-semibold capitalize text-lg">name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate excepturi nulla numquam ad omnis doloremque beatae
            assumenda blanditiis tenetur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
