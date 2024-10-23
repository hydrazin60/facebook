import React, { useState } from "react";
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

import {
  BsEmojiLaughing,
  BsEmojiHeartEyes,
  BsEmojiAngry,
  BsEmojiSurprise,
} from "react-icons/bs";


  

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

export default function Post() {
  // const image = "googlephoto.jpg"
  const image = "https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/461730853_122173959374176074_4680864536819864568_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=3gwI2Erm-OEQ7kNvgF5duCZ&_nc_ht=scontent.fktm21-1.fna&_nc_gid=A7iH4WDCmqPCliyg5ppr3vg&oh=00_AYDf10RZfnD3oQNnXVvvnYombQAp7jvR7LPOcug9shSxPA&oe=6705CC4D"
  const pp = "https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/123201081_102426248343348_4913614110525775662_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=INpPHLNzRxsQ7kNvgFfEpOe&_nc_ht=scontent.fktm21-1.fna&_nc_gid=AIv0ne_0f6yB9O3-R62TIW5&oh=00_AYCGxLvUGaf7vP98KLj2ohJnmxhrleYqJlMm48TqX3Rm4A&oe=672784EC"
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReaction = (reaction) => {
    setSelectedReaction(reaction);
  };

  return (
    <div className="p-4 ">
      <div className="flex justify-between items-center max-w-3xl">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={pp}  alt="profile pp" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <span>
            <p className="font-semibold text-md">Jiban Pandey</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <MoreHorizontal className="text-black text-lg cursor-pointer hover:bg-gray-200 rounded-full " />
            </DialogTrigger>
            <DialogContent className=" w-96 p-2 shadow-lg border border-gray-200 rounded-md">
              {userRightsidemoreiconData.map((item) => (
                <div
                  className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                  key={item.id}
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
        </div>
      </div>
      <div>
        <p>welcome to my facebook clone</p>
      </div>
      <img src={image} alt="post" className="w-full h-96 object-cover" />
      <div className="flex justify-between my-3">
        <div className="flex  gap-2 ">
          {reactions.map((reaction) => (
            <div
              key={reaction.id}
              onClick={() => handleReaction(reaction)}
              className="flex items-center  cursor-pointer hover:scale-110 transition-transform "
            >
              <span className="text-2xl z-10">{reaction.icon}</span>
            </div>
          ))}
          <p className="text-sm text-gray-500">Liked by {reactions[0].name}</p>
        </div>
        <div className="flex text-gray-500">
          <p className="text-sm">51 Comments</p>
          <p className="text-sm">12 Shares</p>
        </div>
      </div>
      {selectedReaction && (
        <p className="mt-2 text-gray-700">
          You reacted with {selectedReaction.name}!
        </p>
      )}
      <hr className="my-3 border-gray-500" />
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
