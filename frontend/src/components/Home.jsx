import React from "react";
import Post from "./Post";
import POsts from "./POsts";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import PostCreate from "./PostCreate";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Home() {
  const { user } = useSelector((state) => state.auth);

  const [isPostCreateDialogOpen, setIsPostCreateDialogOpen] =
    React.useState(false);
  return (
    <div className=" relative mt-16 w-[35%] mx-auto flex flex-col gap-4">
      <section className="  h-32 rounded-lg w-full p-2 border-2 bg-white shadow-lg ">
        <div className="h-1/2  border-b border-zint-400 flex justify-between items-center">
          <Avatar className=" cursor-pointer">
            <AvatarImage src={user.profilePic} alt="Profile" />
            <AvatarFallback>
              {user.firstName[0] + "." + user.lastName[0]}
            </AvatarFallback>
          </Avatar>
          <input
            type="text"
            placeholder={`What's on your mind, ${
              user ? user.lastName : "" || user ? user.firstName : ""
            }?`}
            className="w-[90%] cursor-pointer h-10 bg-transparent focus:outline-none px-4 placeholder-zinc-400 placeholder:font-[400] bg-zinc-100 hover:bg-zinc-200 rounded-full"
            readOnly
            onClick={() => setIsPostCreateDialogOpen(true)}
          />
        </div>
        <div className="h-1/2 flex items-center    ">
          <div className="flex cursor-pointer items-center justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
            <RiLiveFill className="text-red-500 text-2xl " />{" "}
            <p className="text-zinc-500 font-semibold">Live video</p>
          </div>
          <div className="flex items-center cursor-pointer justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
            <MdPhotoSizeSelectActual className="text-green-500 text-2xl" />{" "}
            <p className="text-zinc-500 font-semibold">Photo/video</p>
          </div>
          <div className="flex items-center cursor-pointer justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
            <BsCameraReelsFill className="text-red-400 text-2xl" />{" "}
            <p className="text-zinc-500 font-semibold">Reel</p>
          </div>
        </div>
      </section>
      <PostCreate
        open={isPostCreateDialogOpen}
        onClose={() => setIsPostCreateDialogOpen(false)}
      />
      <div>
        {[1, 2, 3, 4, 5].map((data) => (
          <>
            <POsts key={data}  />
          </>
        ))}
      </div>
    </div>
  );
}
