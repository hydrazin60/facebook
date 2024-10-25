import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Section } from "lucide-react";
import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";

export default function userProfile() {
  return (
    <section className="w-full h-full flex flex-col overflow-y-scroll  ">
      <div className="w-full h-[90vh]  flex flex-col items-center shadow-md shadow-zinc-200">
        <div className="w-[80%] h-[65%] bg-gray-200 rounded-lg"></div>
        <div className="w-[80%] h-[35%] flex flex-col  ">
          <div className=" w-full  flex py-4   justify-between border-b border-zinc-300  ">
            <div className="flex items-center  gap-4">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                  alt="pp"
                  className="w-40 h-40 object-cover border-2 border-gray-200 rounded-full"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Jiban Pandey</h1>
                <p className="text-sm text-gray-500 font-semibold">
                  16 mutal friends
                </p>
                <span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt=""
                    className="w-7 h-7 rounded-full object-contain"
                  />
                </span>
              </div>
            </div>
            <div className="flex h-full items-end gap-2 ">
              <Button className="bg-zinc-300 text-black hover:bg-zinc-400 hover:text-black flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 14c-2.33 0-7 1.17-7 3.5V20h14v-2.5c0-2.33-4.67-3.5-7-3.5zM7.15 10.6c1.06 0 1.93-.86 1.93-1.92S8.2 6.76 7.15 6.76 5.22 7.62 5.22 8.68s.87 1.92 1.93 1.92zM11.91 9.16c0 .71-.17 1.36-.44 1.93-.83.22-1.85.62-2.67 1.24-.36-.07-.71-.12-1.09-.12C4.77 12.21 2 14.46 2 16.97v.98h5.09v-.98c0-1.43 2.56-2.63 5.41-2.63.52 0 1.02.04 1.5.11.38-.54.6-1.19.6-1.91 0-1.72-1.39-3.12-3.12-3.12S8.35 7.53 8.35 9.26c0 .43.1.85.26 1.22.48-.1.98-.15 1.49-.15 1.8 0 3.5.77 4.58 2zM22 10h-2V8h-1v2h-2v1h2v2h1v-2h2v-1z" />
                </svg>
                <p>Add Friend</p>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 ">
                <FaFacebookMessenger className="text-white text-lg" />
                <p>Message</p>
              </Button>
              <Button className="bg-zinc-300 hover:bg-zinc-400 hover:text-black">
                <FaChevronDown className="text-black" />
              </Button>
            </div>
          </div>
          <div className="w-full py-4 h-[30%] flex justify-between items-center">
            <div className="flex  items-center  text-md text-zinc-500 font-semibold">
              <Button className=" hover:bg-zinc-300 text-zinc-600 bg-white   text-[0.973rem] font-semibold ">
                <p>Photo</p>
              </Button>
              <Button className=" hover:bg-zinc-300 text-zinc-600 bg-white   text-[0.973rem] font-semibold ">
                <p>ABout</p>
              </Button>
              <Button className=" hover:bg-zinc-300 text-zinc-600 bg-white   text-[0.973rem] font-semibold ">
                <p>Friends</p>
              </Button>
              <Button className=" hover:bg-zinc-300 text-zinc-600 bg-white  text-[0.973rem] font-semibold ">
                <p>Photos</p>
              </Button>
              <Button className=" hover:bg-zinc-300 text-zinc-600 bg-white   text-[0.973rem] font-semibold ">
                <p>Videos</p>
              </Button>
              <Button className=" hover:bg-zinc-300 text-zinc-600 bg-white   text-[0.973rem] font-semibold ">
                <p>Check-ins</p>
              </Button>
              <Button className=" hover:bg-zinc-300 text-zinc-600 bg-white text-[0.973rem] font-semibold flex items-center ">
                <p>More</p>
                <FaSortDown />
              </Button>
            </div>
            <div>
              <Button className=" hover:bg-zinc-300 text-zinc-600 bg-white text-2xl font-semibold ">
                <BsThreeDots />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
         
      </div>
    </section>
  );
}
