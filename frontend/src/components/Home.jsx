import React from "react";
import Post from "./Post";
import POsts from "./POsts";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="mt-16 w-[35%] mx-auto flex flex-col gap-4">
      <section className="h-32 rounded-lg w-full p-2 border-2 bg-white shadow-lg ">
        <div className="h-1/2  border-b border-zint-400 flex justify-between items-center">
          <img
            src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/292694884_729606568152974_711651807545817504_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c7CWYlOYpDIQ7kNvgGWrmDB&_nc_ht=scontent.fktm21-1.fna&_nc_gid=AvL87gV9RY0cDuj9353rW96&oh=00_AYC9XXGItEWMXmKK_4cQMRAJa9l0CcV9xFwo7s0rUMWX9g&oe=671E2964"
            alt="pp"
            className="h-11 w-11 cursor-pointer rounded-full hover:border hover:border-zinc-500 overflow-hidden object-cover"
          />
          <input
            type="text"
            placeholder="What's on your mind, Pandey?"
            className="w-[90%] cursor-pointer h-10 bg-transparent focus:outline-none px-4 placeholder-zinc-400 placeholder:font-[400] bg-zinc-100 hover:bg-zinc-200 rounded-full"
            readOnly
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
      <div>
        {[1, 2, 3, 4, 5].map((data) => (
          <>
            <POsts key={data} />
          </>
        ))}
      </div>
    </div>
  );
}
