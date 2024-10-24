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
// import { useSelector } from "react-redux";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// const leftSidebarIcons = [
//   {
//     id: "0",
//     name: "Profile",
//     icon : <RxAvatar />,
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
//     name: "Messages",
//     icon: <FaFacebookMessenger />,
//   },
//   {
//     id: "8",
//     name: "Analytics",
//     icon: <MdAutoGraph />,
//   },
//   {
//     id: "9",
//     name: "See More",
//     icon: <GoChevronDown />,
//   },
// ];

// export default function LeftSidebar() {
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <div className="w-[28%] h-[100vh] fixed top-10 mt-4 left-0 ">
//       <div className="p-4 w-[80%] h-full flex flex-col">
//         {leftSidebarIcons.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md gap-4 transition duration-200"
//           >
//             <span className="text-facebook-blue text-3xl"> {item.icon}

//               {user ?(
//        item.id === "0" ? (
//   <Avatar>
//                     <AvatarImage src={user.profilePic} alt="Profile" />
//                     <AvatarFallback>
//                       {user.firstName[0] + "." + user.lastName[0]}
//                     </AvatarFallb>
//                   </Avata>
// )
//               ):(
// <>
// {item.id === "0" ? (
//   <Avatar>
// )}
// </>
//               )}
//             </span>
//             <p className="ml-2 font-medium text-base text-gray-800">
//               {item.name}
//             </p>
//           </div>
//         ))}
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
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-[28%] h-[100vh] fixed top-10 mt-4 left-0">
      <div className="p-4 w-[80%] h-full flex flex-col">
        {leftSidebarIcons.map((item) => (
          <div
            key={item.id}
            className="flex items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md gap-4 transition duration-200"
          >
            {/* Show Avatar for Profile, otherwise show the icon */}
            <span className="text-facebook-blue text-3xl">
              {item.id === "0" && user ? (
                <Avatar>
                  <AvatarImage src={user.profilePic} alt="Profile" />
                  <AvatarFallback>
                    {user.firstName[0].toUpperCase()}.
                    {user.lastName[0].toUpperCase()}
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
