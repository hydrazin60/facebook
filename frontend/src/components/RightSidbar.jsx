import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { IoIosSearch } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

export default function RightSidbar() {
  return (
    <div className="w-[25%] h-[100vh] border-l-2 mt-10 p-10   ">
      <div className=" flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <p className="text-xl ">Contex</p>
          </div>
          <div className="flex gap-2">
            <span>
              <IoIosSearch className="text-2xl" />
            </span>
            <IoIosMore className="text-2xl" />
          </div>
        </div>
        <div className="flex gap-4 items-center hover:bg-zinc-100">
          <Avatar>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <p className="text-md font-medium">User Name</p>
        </div>
      </div>
    </div>
  );
}
