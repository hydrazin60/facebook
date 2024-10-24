import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { MoreHorizontal } from "lucide-react";
import { IoIosAddCircle, IoIosMore } from "react-icons/io";
import { FaBookmark, FaRegThumbsUp, FaRegHeart, FaClock } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { MdHideImage } from "react-icons/md";
import { TbMessageReportFilled, TbFriendsOff } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import {
  BsEmojiLaughing,
  BsEmojiHeartEyes,
  BsEmojiAngry,
  BsEmojiSurprise,
} from "react-icons/bs";
import axios from "axios";

const userRightsidemoreiconData = [
  {
    id: 1,
    icon: <IoIosAddCircle />,
    name: "Show More",
    description: "More of your post will be like this.",
  },
  {
    id: 2,
    icon: <FaBookmark />,
    name: "Save Post",
    description: "Add this to your saved items.",
  },
  {
    id: 3,
    icon: <IoMdNotifications />,
    name: "Turn on Notifications",
    description: "",
  },
  {
    id: 4,
    icon: <ImCross />,
    name: "Hide Post",
    description: "See fewer posts like this.",
  },
  {
    id: 5,
    icon: <FaClock />,
    name: "Schedule Post",
    description: "Temporarily stop seeing this post.",
  },
  {
    id: 6,
    icon: <MdHideImage />,
    name: "Hide Post",
    description: "Stop Seeing posts from this person.",
  },
  {
    id: 7,
    icon: <TbMessageReportFilled />,
    name: "Report Post",
    description: "Report this post to a moderator.",
  },
  {
    id: 8,
    icon: <TbFriendsOff />,
    name: `Block`,
    description: "Stop seeing posts from this person.",
  },
];

const reactions = [
  { id: 1, name: "Like", icon: <FaRegThumbsUp className="text-blue-500" /> },
  { id: 2, name: "Love", icon: <BsEmojiHeartEyes className="text-red-500" /> },
  {
    id: 3,
    name: "Haha",
    icon: <BsEmojiLaughing className="text-yellow-400" />,
  },
  { id: 4, name: "Wow", icon: <BsEmojiSurprise className="text-orange-500" /> },
  { id: 5, name: "Angry", icon: <BsEmojiAngry className="text-red-600" /> },
];

export default function Post({ allPost }) {
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReaction = (reaction) => {
    setSelectedReaction(reaction);
  };

  return (
    <div
      className="p-4 border-2 rounded-xl  my-2"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex justify-between items-center max-w-3xl">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={allPost.authorId.profilePic} alt="profile pp" />
            <AvatarFallback className="text-md font-semibold text-zinc-700 ">
              {allPost.authorId.firstName.charAt(0)}
              {allPost.authorId.lastName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span>
            <p className="font-semibold text-md">
              {allPost.authorId.firstName} {allPost.authorId.lastName}
            </p>
            <p className="text-xs text-gray-500 font-semibold">
              {allPost.createdAt} ago
            </p>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <span className="text-lg h-8 w-8 cursor-pointer hover:bg-zinc-200 flex items-center justify-center rounded-full">
                <MoreHorizontal className=" text-lg cursor-pointer hover:text-zinc-600   rounded-full" />
              </span>
            </DialogTrigger>
            <DialogContent className="w-96 p-2 shadow-lg border border-gray-200 rounded-md">
              {userRightsidemoreiconData.map((item, itemIndex) => (
                <div
                  className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  key={itemIndex}
                >
                  <span className="text-black text-xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    {item.description && (
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </DialogContent>
          </Dialog>
          <span className="text-lg h-8 w-8 cursor-pointer hover:bg-zinc-200 flex items-center justify-center rounded-full">
            <RxCross2 className="  text-lg cursor-pointer hover:text-zinc-600  rounded-full" />
          </span>
        </div>
      </div>

      <div className="my-2">
        <p>{allPost.caption}</p>
      </div>

      <div className="relative h-full w-full flex overflow-hidden">
        {allPost.images.map((image, imageIndex) => (
          <img
            key={imageIndex}
            src={image}
            alt={`post image ${imageIndex}`}
            className="w-full h-96 object-cover border-2 border-gray-200 rounded-md"
          />
        ))}
        {allPost.images.length > 2 && (
          <div className="absolute text-white right-[10%] bottom-[30%] flex items-center">
            <FaPlus className="text-white text-4xl" />
            <p className="text-4xl font-semibold">
              {allPost.images.length - 2}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between my-3">
        <div className="flex gap-2">
          {reactions.map((reaction) => (
            <div
              key={reaction.id}
              onClick={() => handleReaction(reaction)}
              className="flex items-center cursor-pointer hover:scale-110 transition-transform"
            >
              <span className="text-2xl z-10">{reaction.icon}</span>
            </div>
          ))}
          <p className="text-sm text-gray-500">
            Liked by {allPost.likes.length} people
          </p>
        </div>
        <div className="flex text-gray-500">
          <p className="text-sm">{allPost.comments.length} Comments</p>
          <p className="text-sm">12 Shares</p>
        </div>
      </div>

      {selectedReaction && (
        <p className="mt-2 text-gray-700">
          You reacted with {selectedReaction.name}!
        </p>
      )}

      <hr className="my-3 border-gray-500" />

      {/* Like, Comment, Share Actions */}
      <div className="flex justify-between mx-4">
        <span className="flex gap-2">
          <FaRegThumbsUp className="text-gray-500 text-2xl" />
          <label className="text-gray-500">Like</label>
        </span>
        <span className="flex gap-2">
          <FaRegComment className="text-gray-500 text-2xl" />
          <label className="text-gray-500">Comment</label>
        </span>
        <span className="flex gap-2">
          <FaRegShareSquare className="text-gray-500 text-2xl" />
          <label className="text-gray-500">Share</label>
        </span>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
// import { MoreHorizontal } from "lucide-react";
// import { IoIosAddCircle, IoIosMore } from "react-icons/io";
// import { FaBookmark, FaRegThumbsUp, FaRegHeart, FaClock } from "react-icons/fa";
// import { IoMdNotifications } from "react-icons/io";
// import { ImCross } from "react-icons/im";
// import { MdHideImage } from "react-icons/md";
// import { TbMessageReportFilled, TbFriendsOff } from "react-icons/tb";
// import { FaRegComment } from "react-icons/fa";
// import { FaRegShareSquare } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";

// import {
//   BsEmojiLaughing,
//   BsEmojiHeartEyes,
//   BsEmojiAngry,
//   BsEmojiSurprise,
// } from "react-icons/bs";
// import axios from "axios";

// const userRightsidemoreiconData = [
//   {
//     id: 1,
//     icon: <IoIosAddCircle />,
//     name: "Show More",
//     description: "More of your post will be like this.",
//   },
//   {
//     id: 2,
//     icon: <FaBookmark />,
//     name: "Save Post",
//     description: "Add this to your saved items.",
//   },
//   {
//     id: 3,
//     icon: <IoMdNotifications />,
//     name: "Turn on Notifications",
//     description: "",
//   },
//   {
//     id: 4,
//     icon: <ImCross />,
//     name: "Hide Post",
//     description: "See fewer posts like this.",
//   },
//   {
//     id: 5,
//     icon: <FaClock />,
//     name: "Schedule Post",
//     description: "Temporarily stop seeing this post.",
//   },
//   {
//     id: 6,
//     icon: <MdHideImage />,
//     name: "Hide Post",
//     description: "Stop Seeing posts from this person.",
//   },
//   {
//     id: 7,
//     icon: <TbMessageReportFilled />,
//     name: "Report Post",
//     description: "Report this post to a moderator.",
//   },
//   {
//     id: 8,
//     icon: <TbFriendsOff />,
//     name: `Block`,
//     description: "Stop seeing posts from this person.",
//   },
// ];

// const reactions = [
//   { id: 1, name: "Like", icon: <FaRegThumbsUp className="text-blue-500" /> },
//   { id: 2, name: "Love", icon: <BsEmojiHeartEyes className="text-red-500" /> },
//   {
//     id: 3,
//     name: "Haha",
//     icon: <BsEmojiLaughing className="text-yellow-400" />,
//   },
//   { id: 4, name: "Wow", icon: <BsEmojiSurprise className="text-orange-500" /> },
//   { id: 5, name: "Angry", icon: <BsEmojiAngry className="text-red-600" /> },
// ];

// export default function Post() {
//   const [selectedReaction, setSelectedReaction] = useState(null);
//   const [AllPosts, setAllPosts] = useState([]);

//   const handleReaction = (reaction) => {
//     setSelectedReaction(reaction);
//   };

//   useEffect(() => {
//     const fetchAllPosts = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:4000/facebook/api/v1/post/show-all-post",
//           { withCredentials: true }
//         );
//         if (res.data.success) {
//           setAllPosts(res.data.data);
//         } else {
//           console.log(`Error during fetching post: ${res.data.message}`);
//         }
//       } catch (err) {
//         console.log(`Error during fetching post: ${err.message}`);
//       }
//     };
//     fetchAllPosts();
//   }, []);

//   return (
//     <>
//       {AllPosts.map((post, postIndex) => (
//         <div className="p-2 " key={postIndex} >
//           <div  className="flex justify-between items-center max-w-3xl">
//             <div className="flex gap-2 items-center">
//               <Avatar>
//                 <AvatarImage src={post.authorId.profilePic} alt="profile pp" />
//                 <AvatarFallback>
//                   {post.authorId.firstName.charAt(0)}
//                   {post.authorId.lastName.charAt(0)}
//                 </AvatarFallback>
//               </Avatar>
//               <span>
//                 <p className="font-semibold text-md">
//                   {post.authorId.firstName} {post.authorId.lastName}
//                 </p>
//                 <p className="text-sm text-gray-500">{post.createdAt} ago</p>
//               </span>
//             </div>
//             <div className="flex gap-2 items-center">
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <MoreHorizontal className="text-black text-lg cursor-pointer hover:bg-gray-200 rounded-full" />
//                 </DialogTrigger>
//                 <DialogContent className="w-96 p-2 shadow-lg border  border-gray-200 rounded-md">
//                   {userRightsidemoreiconData.map((item, itemIndex) => (
//                     <div
//                       className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
//                       key={itemIndex}
//                     >
//                       <span className="text-black text-xl">{item.icon}</span>
//                       <div>
//                         <p className="font-semibold text-sm">{item.name}</p>
//                         {item.description && (
//                           <p className="text-xs text-gray-500">
//                             {item.description}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </div>
//           <div>
//             <p>{post.caption}</p>
//           </div>
//           <div className="relative h-full w-full flex  overflow-hidden ">
//             {post.images.map((image, imageIndex) => (
//               <img
//                 key={imageIndex}
//                 src={image}
//                 alt={`post image ${imageIndex}`}
//                 className="w-full h-96 object-cover border-2 border-gray-200 rounded-md"
//               />
//             ))}
//             <div className=" absolute text-white right-[10%] bottom-[30%] flex ">
//               {
//                 post.images.length ===2 ? " " :  (<FaPlus className="text-white text-4xl " /> )
//               }
//               {" "}
//               <p className="text-4xl font-semibold"> {post.images.length ===2 ? "" : post.images.length} </p>
//             </div>
//           </div>
//           <div className="flex justify-between my-3">
//             <div className="flex gap-2">
//               {reactions.map((reaction) => (
//                 <div
//                   key={reaction.id}
//                   onClick={() => handleReaction(reaction)}
//                   className="flex items-center cursor-pointer hover:scale-110 transition-transform"
//                 >
//                   <span className="text-2xl z-10">{reaction.icon}</span>
//                 </div>
//               ))}
//               <p className="text-sm text-gray-500">
//                 Liked by {post.likes.length} people
//               </p>
//             </div>
//             <div className="flex text-gray-500">
//               <p className="text-sm">{post.comments.length} Comments</p>
//               <p className="text-sm">12 Shares</p>
//             </div>
//           </div>
//           {selectedReaction && (
//             <p className="mt-2 text-gray-700">
//               You reacted with {selectedReaction.name}!
//             </p>
//           )}
//           <hr className="my-3 border-gray-500" />
//           <div className="flex justify-between mx-4">
//             <span className="flex gap-2">
//               <FaRegThumbsUp className="text-gray-500 text-2xl" />
//               <label className="text-gray-500">Like</label>
//             </span>
//             <span className="flex gap-2">
//               <FaRegComment className="text-gray-500 text-2xl" />
//               <label className="text-gray-500">Comment</label>
//             </span>
//             <span className="flex gap-2">
//               <FaRegShareSquare className="text-gray-500 text-2xl" />
//               <label className="text-gray-500">Share</label>
//             </span>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }
