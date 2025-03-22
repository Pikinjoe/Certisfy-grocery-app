import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FaChevronLeft,
  FaChevronRight,
  FaBriefcase,
  FaUserTimes,
  FaImages
} from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdEmail, MdReviews, MdKey, MdDriveFileRenameOutline } from "react-icons/md";
import Profiles from '../assets/Profile.jpg'

const Profile = ({ setLogoutHandle }) => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  if (!user) {
    return null
  }
  const handleLogout = () => {
    setLogoutHandle(true);
  };

  return (
    <div className="bg-green-50 h-screen">
      <div className="bg-primary h-1/5  text-white pt-2">
        <FaChevronLeft
          className="ml-4 cursor-pointer"
          onClick={() => navigate("/categories")}
        />
        <div className="text-center flex justify-center items-center flex-col h-full pb-2">
          <img src={Profiles} className="h-16 w-16 rounded-full" alt="profile photo" />
          <h3 className="capitalize text-xl">{user.fullName}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="mt-5 mx-4">
        <h2 className="capitalize font-bold text-xl">account settings</h2>

        <div>
        <div className="flex justify-between items-center text-gray-500 hover:text-gray-800 cursor-pointer mt-8">
            <p className="flex items-center capitalize font-semibold  ">
              <MdDriveFileRenameOutline className="mr-6" /> update name
            </p>
            <FaChevronRight />
          </div>
        <div className="flex justify-between items-center text-gray-500 hover:text-gray-800 cursor-pointer mt-8">
            <p className="flex items-center capitalize font-semibold  ">
              <FaImages className="mr-6" /> update profile photo
            </p>
            <FaChevronRight />
          </div>
          <div className="flex justify-between items-center text-gray-500 hover:text-gray-800 cursor-pointer mt-8">
            <p className="flex items-center capitalize font-semibold  ">
              <MdKey className="mr-6" /> change password
            </p>
            <FaChevronRight />
          </div>
          <div className="flex justify-between items-center text-gray-500 hover:text-gray-800 cursor-pointer mt-8">
            <p className="flex items-center capitalize font-semibold  ">
              <MdEmail className="mr-6" />
              change email address
            </p>
            <FaChevronRight />
          </div>
          <div className="flex justify-between items-center text-gray-500 hover:text-gray-800 cursor-pointer mt-8">
            <p className="flex items-center capitalize font-semibold  ">
              <MdReviews className="mr-6" />
              review
            </p>
            <FaChevronRight />
          </div>
          <div className="flex justify-between items-center text-gray-500 hover:text-gray-800 cursor-pointer mt-8">
            <p className="flex items-center capitalize font-semibold  ">
              <FaBriefcase className="mr-6" />
              about us
            </p>
            <FaChevronRight />
          </div>
          <div className="flex justify-between items-center text-gray-500 hover:text-gray-800 cursor-pointer mt-8">
            <p className="flex items-center capitalize font-semibold  ">
              <FaUserTimes className="mr-6" />
              delete my account and data
            </p>
            <FaChevronRight />
          </div>
          <div
            className="flex justify-between items-center text-gray-500 hover:text-gray-800 cursor-pointer mt-8"
            onClick={handleLogout}
          >
            <p className="flex items-center capitalize font-semibold  ">
              <IoLogOut className="mr-6 " />
              log out
            </p>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
