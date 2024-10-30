import React from "react";
import { RxAvatar } from "react-icons/rx";
import { FaUserGroup } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaFacebookMessenger } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { MdAutoGraph } from "react-icons/md";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const leftSidebarIcons = [
  {
    id: "0",
    name: "Profile",
    icon: <RxAvatar />,
  },
  {
    id: "1",
    name: "Find Friends",
    icon: <FaUserGroup />,
  },
  {
    id: "2",
    name: "Watch Later",
    icon: <MdOutlineWatchLater />,
  },
  {
    id: "3",
    name: "Saved",
    icon: <FaBookmark />,
  },
  {
    id: "4",
    name: "Groups",
    icon: <GrGroup />,
  },
  {
    id: "5",
    name: "Videos",
    icon: <MdOutlineOndemandVideo />,
  },
  {
    id: "6",
    name: "Marketplace",
    icon: <CiShop />,
  },
  {
    id: "7",
    name: "Messages",
    icon: <FaFacebookMessenger />,
  },
  {
    id: "8",
    name: "Analytics",
    icon: <MdAutoGraph />,
  },
  {
    id: "9",
    name: "See More",
    icon: <GoChevronDown />,
  },
];

export default function LeftSidebar() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const leftsidbarIconClickHandler = (id) => {
    if (id === "0") {
      navigate(`/profile/${user._id}`);
    }
  };
  return (
    <div className="w-[30%] h-[100vh] bg-slate-50 fixed top-10 mt-4 left-0">
      <div className="p-4 w-[80%] h-full flex flex-col">
        {leftSidebarIcons.map((item) => (
          <div
            key={item.id}
            className="flex items-center cursor-pointer hover:bg-gray-200 p-3 rounded-md gap-4 transition duration-200"
            onClick={() => leftsidbarIconClickHandler(item.id)}
          >
            {/* Show Avatar for Profile, otherwise show the icon */}
            <span className="text-facebook-blue text-3xl ">
              {item.id === "0" && user ? (
                <Avatar>
                  <AvatarImage src={user.profilePic} alt="Profile" />
                  <AvatarFallback className="h-full w-full ">
                    {user.gender === "male" ? (
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
                  </AvatarFallback>
                </Avatar>
              ) : (
                item.icon
              )}
            </span>
            <p className="ml-2 font-medium text-base text-gray-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
