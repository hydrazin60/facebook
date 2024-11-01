import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ImCross } from "react-icons/im";
import { Input } from "../ui/input";
import { IoMdHome } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { GiHeartEarrings } from "react-icons/gi";

export default function EditProfile() {
  return (
    <div className=" w-full  h-full   flex items-center justify-center flex-col mt-10">
      <div className="w-[50%] h-14  flex items-center justify-around border rounded-md border-zinc-400">
        <span>
          <p className="text-2xl font-semibold">Edit Profile</p>
        </span>
        <span className="cursor-pointer h-9 w-9 flex items-center  justify-center rounded-full bg-slate-200 hover:bg-zinc-300">
          <ImCross className="text-xl text-zinc-700" />
        </span>
      </div>
      <div className="w-[50%] flex flex-col gap-10  p-2 border-2 border-zinc-400 ">
        <div>
          <div className="   flex items-center justify-between">
            <span>
              <p className="text-2xl font-semibold">Profile Picture</p>
            </span>
            <span>
              <p className="text-xl text-blue-500 ">Edit </p>
            </span>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg?t=st=1730438430~exp=1730442030~hmac=361422ef32c037b6710253648afbbaff99096cb193c61c029b127dbab4cd801b&w=360"
              alt="profile"
              className="w-[200px] h-[200px] rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="   flex items-center justify-between">
            <span>
              <p className="text-2xl font-semibold"> Cover Photo</p>
            </span>
            <span>
              <p className="text-xl text-blue-500 ">Edit </p>
            </span>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://img.freepik.com/premium-photo/wallpaper-illustration_1037184-76993.jpg?w=900"
              alt="profile"
              className="h-[200px] w-[60%] rounded-xl"
            />
          </div>
        </div>
        <div>
          <div className="   flex items-center justify-between">
            <span>
              <p className="text-2xl font-semibold">Bio</p>
            </span>
            <span>
              <p className="text-xl text-blue-500 ">Edit </p>
            </span>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Input placeholder="Enter your bio" className="w-[60%]" />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-7">
          <div className="   flex items-center justify-between">
            <span>
              <p className="text-2xl font-semibold">Customize your intro</p>
            </span>
            <span>
              <p className="text-xl text-blue-500 ">Edit </p>
            </span>
          </div>
          <div className="w-full h-full flex flex-col gap-7  ">
            <div className="w-full h-full flex  gap-4">
              <span className="flex items-center ">
                <IoBag className="text-2xl mx-2" />
                <p>Workplace</p>
              </span>
              <Input
                placeholder="workplace ......."
                className=" w-1/2  border-none "
              />
            </div>

            <div className="w-full h-full flex  gap-4">
              <span className="flex items-center ">
                <FaSchool className="text-2xl mx-2" />
                <p>School</p>
              </span>
              <Input
                placeholder="school ......."
                className=" w-1/2 border-none "
              />
            </div>
            <div className="w-full h-full flex  gap-4">
              <span className="flex items-center ">
                <FaGraduationCap className="text-2xl mx-2" />
                <p>College</p>
              </span>
              <Input
                placeholder=" college ......."
                className=" w-[55%] border-none "
              />
            </div>

            <div className="w-full h-full flex gap-4">
              <span className="flex items-center ">
                <FaLocationPin className="text-2xl mx-2" />
                <p>Hometown</p>
              </span>
              <Input
                placeholder=" hometown ......."
                className=" w-1/2 border-none "
              />
            </div>
          </div>
        </div>

        <div>
          <div className="   flex items-center justify-between">
            <span className="flex items-center gap-2">
              <p className="text-2xl font-semibold"> relationship</p>
              <GiHeartEarrings className="text-2xl text-red-600" />
            </span>
            <span>
              <p className="text-xl text-blue-500 ">Edit </p>
            </span>
          </div>
          <div className="w-full h-full flex  items-center justify-center">
            <input type="radio" />
            <lebal for="single"> single</lebal>
            <input type="radio" className="mx-2" />
            <lebal for="relationship">In a relationship</lebal>
            <input type="radio" className="mx-2" />
            <lebal for="married">Married</lebal>
            <input type="radio" className="mx-2" />
            <lebal for="complicated"> It's complicated</lebal>
            <input type="radio" className="mx-2" />
            <lebal for="divorced">divorced </lebal>
          </div>
        </div>
        <div></div>
        <div className=" text-zinc-700 h-full  w-[60%] gap-10 flex flex-col items-startjustistify-center">
          <div className="w-full h-full flex flex-col items-start justify-center gap-7"></div>
        </div>
      </div>
    </div>
  );
}
/*    
<div className="w-full h-full flex  items-center justify-center gap-7">
<span className="flex items-center ">
  <IoMdHome className=" text-2xl mx-2" />
  <p>Current city</p>
</span>
<Input
  placeholder="your city ......."
  className=" w-1/2 border-none "
/>
</div>
<div className="w-full h-full flex items-center justify-center gap-4">
<span className="flex items-center ">
  <IoBag className="text-2xl mx-2" />
  <p>Workplace</p>
</span>
<Input
  placeholder="workplace ......."
  className=" w-1/2  border-none "
/>
</div>

<div className="w-full h-full flex items-center justify-center gap-4">
<span className="flex items-center ">
  <FaSchool className="text-2xl mx-2" />
  <p>School</p>
</span>
<Input
  placeholder="school ......."
  className=" w-[55%] border-none "
/>
</div>
<div className="w-full h-full flex items-center justify-center gap-4">
<span className="flex items-center ">
  <FaGraduationCap className="text-2xl mx-2" />
  <p>College</p>
</span>
<Input
  placeholder=" college ......."
  className=" w-[55%] border-none "
/>
</div>

<div className="w-full h-full flex items-center justify-center gap-4">
<span className="flex items-center ">
  <FaLocationPin className="text-2xl mx-2" />
  <p>Hometown</p>
</span>
<Input
  placeholder=" hometown ......."
  className=" w-1/2 border-none "
/>
</div> */
