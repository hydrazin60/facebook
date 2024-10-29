import React from "react";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import {
  IoHomeOutline,
  IoNotifications,
  IoSettingsSharp,
  IoLogOut,
} from "react-icons/io5";
import { RiMessageFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

import {
  MdHelp,
  MdNightlight,
  MdOutlineGroupAdd,
  MdOndemandVideo,
  MdGroups,
  MdMoreVert,
} from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const profileDialogBoxIcons = [
  {
    id: "IoSettingsSharp",
    name: "Setting & Profile",
    icon: <IoSettingsSharp />,
  },
  { id: "MdHelp", name: "Help & Support", icon: <MdHelp /> },
  {
    id: "MdNightlight",
    name: "Display & Accessibility",
    icon: <MdNightlight />,
  },
  { id: "RiMessageFill", name: "Give Feedback", icon: <RiMessageFill /> },
  { id: "IoLogOut", name: "Log Out", icon: <IoLogOut /> },
];

const nisan =
  "https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/123201081_102426248343348_4913614110525775662_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4kag0dfwACQQ7kNvgGxwyrl&_nc_ht=scontent.fktm21-1.fna&oh=00_AYCU3B6cPKwu2ESvk1Vf4FVNaGUgcA-lYkXdHAAM64EKag&oe=6701F22C";

export default function Header() {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const LogOutHandler = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/facebook/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/sign-in");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Logout Error", error);
      toast.error(error.response.data.message);
    }
  };

  const sidbarHandler = (id) => {
    if (id === "RiMessageFill") {
      alert("Give Feedback");
    } else if (id === "IoLogOut") {
      if (window.confirm("Are you sure you want to log out?")) {
        LogOutHandler();
      }
    }
  };

  return (
    <div className="w-full bg-slate-100 shadow-md h-14 flex items-center justify-between px-4 fixed top-0 left-0 z-10">
      <div className="flex items-center space-x-2 w-[40%]">
        <FaFacebook
          className="text-5xl text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <input
          type="text"
          placeholder="Search Facebook"
          className="hidden lg:block bg-gray-200 text-black rounded-full px-5 py-1 text-sm outline-none h-9"
          aria-label="Search Facebook"
        />
      </div>

      <div className="flex items-center justify-center space-x-8 w-[40%]">
        <span className="cursor-pointer flex items-center justify-center h-12 w-28 hover:bg-gray-200 p-2 rounded-md">
          <IoHomeOutline className="text-3xl" />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 rounded-md h-12 w-28">
          <MdOutlineGroupAdd className="text-3xl" />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 rounded-md h-12 w-28">
          <MdOndemandVideo className="text-3xl" />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 rounded-md h-12 w-28">
          <CiShop className="text-3xl" />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 rounded-md h-12 w-28">
          <MdGroups className="text-3xl" />
        </span>
      </div>

      <div className="flex items-center space-x-3 w-[30%] justify-end">
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 bg-gray-300 rounded-full">
          <MdMoreVert className="text-2xl" />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 bg-gray-300 rounded-full">
          <IoNotifications className="text-2xl" />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 bg-gray-300 rounded-full">
          <FaFacebookMessenger className="text-2xl" />
        </span>
        <Dialog>
          <DialogTrigger asChild>
            <span className="cursor-pointer flex items-center justify-center  hover:bg-gray-200   bg-gray-300 rounded-full">
              {user && user.profilePic ? (
                <>
                  <img
                    src={user.profilePic}
                    alt="Profile"
                    className="w-10  h-10 rounded-full corsor-pointer  "
                  />
                </>
              ) : (
                <>
                  <span className=" h-10 w-10 rounded-full  flex items-center justify-center border-2 border-gray-300 ">
                    {user && user.gender === "male" ? (
                      <img
                        src="/public\boys.jpeg"
                        alt="pp"
                        className="h-full w-full  rounded-full overflow-hidden object-contain"
                      />
                    ) : (
                      <img
                        src="/public\girlimogi.png"
                        alt="pp"
                        className="h-full w-full rounded-full overflow-hidden object-contain"
                      />
                    )}
                  </span>
                </>
              )}
            </span>
          </DialogTrigger>
          <DialogContent>
            <div className="flex flex-col">
              <div className="flex gap-2 flex-col shadow-md p-3 mb-2">
                <div className="flex gap-2 items-center border-b-2 border-gray-300 pb-4">
                  {/* <Avatar>
                    <AvatarImage src={user.profilePic} alt="Profile" />
                    <AvatarFallback>
                      {user.firstName[0] + "." + user.lastName[0]}
                    </AvatarFallback>
                  </Avatar> */}
                  {user && user.profilePic ? (
                    <>
                      <img
                        src={user.profilePic}
                        alt="Profile"
                        className="w-10 h-10      rounded-full"
                      />
                    </>
                  ) : (
                    <>
                      <>
                        <span className=" h-10 w-10 rounded-full  flex items-center justify-center border-2 border-gray-300 ">
                          {user && user.gender === "male" ? (
                            <img
                              src="/public\boys.jpeg"
                              alt="pp"
                              className="h-full w-full  rounded-full overflow-hidden object-contain"
                            />
                          ) : (
                            <img
                              src="/public\girlimogi.png"
                              alt="pp"
                              className="h-full w-full rounded-full overflow-hidden object-contain"
                            />
                          )}
                        </span>
                      </>
                    </>
                  )}

                  <span className="text-lg font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
                <div>
                  <p className="text-blue-500 font-medium">See all profiles</p>
                </div>
              </div>
              <div>
                {profileDialogBoxIcons.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-2 font-medium items-center justify-between py-3 hover:bg-gray-100 rounded-xl px-2 cursor-pointer"
                    onClick={() => sidbarHandler(item.id)}
                  >
                    <div className="flex gap-2 items-center">
                      <span className=" bg-gray-300 text-xl p-2 rounded-full ">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <div>
                      <span className="cursor-pointer">
                        <FaAngleRight className="text-2xl text-gray-600" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p>
                Privacy . Terms . Advertising . Ad Choices . Cookies . More .
                Meta 2024
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
