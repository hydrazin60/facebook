// import React from "react";
// import { RxAvatar } from "react-icons/rx";
// import { FaUserGroup } from "react-icons/fa6";
// import { FaBookmark } from "react-icons/fa";
// import { MdOutlineWatchLater } from "react-icons/md";
// import { GrGroup } from "react-icons/gr";
// import { MdOutlineOndemandVideo } from "react-icons/md";
// import { CiShop } from "react-icons/ci";
// import { FaFacebookMessenger } from "react-icons/fa6";
// import { GoChevronDown } from "react-icons/go";
// import { MdAutoGraph } from "react-icons/md";

// const leftSidbarIcon = [
//   {
//     id: "0",
//     name: "Profile",
//     icon: <RxAvatar />,
//   },
//   {
//     id: "1",
//     name: "Find Friends",
//     icon: <FaUserGroup />,
//   },
//   {
//     id: "2",
//     name: "Watch Later",
//     icon: <MdOutlineWatchLater />,
//   },
//   {
//     id: "3",
//     name: "Saved",
//     icon: <FaBookmark />,
//   },
//   {
//     id: "4",
//     name: "Groups",
//     icon: <GrGroup />,
//   },
//   {
//     id: "5",
//     name: "Videos",
//     icon: <MdOutlineOndemandVideo />,
//   },
//   {
//     id: "6",
//     name: "Marketplace",
//     icon: <CiShop />,
//   },
//   {
//     id: "7",
//     name: "Marketplace",
//     icon: <FaFacebookMessenger />,
//   },
//   {
//     id: "8",
//     name: "Marketplace",
//     icon: <MdAutoGraph />,
//   },
//   {
//     id: "9",
//     name: "Marketplace",
//     icon: <GoChevronDown />,
//   },
// ];

// export default function LeftSidbar() {
//   return (
//     <div className="w-[28%]   h-[100vh] border-r-2 mt-20 ">
//       <div className="p-4 w-[80%] h-full flex flex-col">
//         {leftSidbarIcon.map((item) => {
//           return (
//             <div
//               key={item.id}
//               className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md gap-8 "
//             >
//               <span className="text-3xl">{item.icon}</span>
//               <p className="ml-2 font-semibold text-lg">{item.name}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

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
  return (
    <div className="w-[28%] h-[100vh] border-r-2 mt-20">
      <div className="p-4 w-[80%] h-full flex flex-col">
        {leftSidebarIcons.map((item) => (
          <div
            key={item.id}
            className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md gap-4 transition duration-200"
          >
            <span className="text-facebook-blue text-2xl">{item.icon}</span>
            <p className="ml-2 font-medium text-base text-gray-800">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
