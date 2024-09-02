// import React from "react";
// import { FaFacebook } from "react-icons/fa";
// import { IoHomeOutline } from "react-icons/io5";

// import { MdOutlineGroupAdd } from "react-icons/md";

// import { MdOndemandVideo } from "react-icons/md";
// import { CiShop } from "react-icons/ci";
// import { MdGroups } from "react-icons/md";
// import { MdMoreVert } from "react-icons/md";
// import { FaFacebookMessenger } from "react-icons/fa";
// import { IoNotifications } from "react-icons/io5";
// import { RxAvatar } from "react-icons/rx";

// const HeaderIcons = () => [
//   {
//     id: "1",
//     name: "Home",
//     icon: <FaHome />,
//   },
//   {
//     id: "2",
//     name: "Friends",
//     icon: <FaUserFriends />,
//   },
//   {
//     id: "3",
//     name: "Videos",
//     icon: <MdOndemandVideo />,
//   },
//   {
//     id: "4",
//     name: "Marketplace",
//     icon: <CiShop />,
//   },
//   {
//     id: "5",
//     name: "Groups",
//     icon: <MdGroups />,
//   },
//   { id: "6", name: "More", icon: <MdMoreVert /> },
// ];

// export default function Header() {
//   return (
//     <div  className="w-full bg-zinc-100 border-b-2 shadow-sm h-12 flex items-center justify-between "  >
//       <div className="flex items-center w-[30%] ">
//         <span>
//           <FaFacebook />
//         </span>
//         <span>
//           <input type="text" placeholder="search Facebook" />
//         </span>
//       </div>

//       <div className="flex items-center justify-between w-[40%] px-6 ">
//         <span className="cursor-pointer h-12 w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <IoHomeOutline className="text-3xl" />
//         </span>
//         <span className="cursor-pointer h-12 w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <MdOutlineGroupAdd className="text-3xl" />
//         </span>
//         <span className="cursor-pointer h-12 w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <MdOndemandVideo className="text-3xl" />
//         </span>
//         <span className="cursor-pointer h-12 w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <CiShop className="text-3xl" />
//         </span>
//         <span className="cursor-pointer h-12 w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <MdGroups className="text-3xl" />
//         </span>
//       </div>

//       <div className=" flex items-center justify-between w-[30%]">
//         <span className="cursor-pointer hover:h-12   hover:w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <MdMoreVert className="text-3xl" />
//         </span>
//         <span className="cursor-pointer h-12 w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <IoNotifications className="text-xl" />
//         </span>
//         <span className="cursor-pointer h-12 w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <FaFacebookMessenger className="text-xl" />
//         </span>
//         <span className="cursor-pointer h-12 w-28 flex items-center  justify-center hover:bg-zinc-300 rounded-xl">
//           <RxAvatar className="text-3xl" />
//         </span>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { IoHomeOutline, IoNotifications } from "react-icons/io5";
import {
  MdOutlineGroupAdd,
  MdOndemandVideo,
  MdGroups,
  MdMoreVert,
} from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

export default function Header() {
  return (
    <div className="w-full bg-white shadow-md h-14 flex items-center justify-between px-4">
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-2 w-[30%]">
        <FaFacebook className="text-4xl text-blue-600" />

        <input
          type="text"
          placeholder="Search Facebook"
          className="hidden lg:block bg-gray-200 text-black rounded-full px-4 py-1 text-sm outline-none h-9"
        />
      </div>

      {/* Center Section: Icons for Navigation */}
      <div className="flex items-center justify-center space-x-8 w-[40%]">
        <span className="cursor-pointer flex items-center justify-center h-12 w-28 hover:bg-gray-200 p-2 rounded-md">
          <IoHomeOutline className="text-2xl" />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 rounded-md  h-12 w-28">
          <MdOutlineGroupAdd className="text-2xl  " />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2  rounded-md  h-12 w-28">
          <MdOndemandVideo className="text-2xl  " />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 rounded-md  h-12 w-28 ">
          <CiShop className="text-2xl  " />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2  rounded-md  h-12 w-28">
          <MdGroups className="text-2xl  " />
        </span>
      </div>

      {/* Right Section: Profile and Additional Options */}
      <div className="flex items-center space-x-3 w-[30%] justify-end">
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 bg-gray-300 rounded-full">
          <MdMoreVert className="text-xl  " />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 bg-gray-300 rounded-full">
          <IoNotifications className="text-xl" />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 bg-gray-300 rounded-full">
          <FaFacebookMessenger className="text-xl  " />
        </span>
        <span className="cursor-pointer flex items-center justify-center hover:bg-gray-200 p-2 bg-gray-300 rounded-full">
          <RxAvatar className="text-xl  " />
        </span>
      </div>
    </div>
  );
}
