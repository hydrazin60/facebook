import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoIosSearch, IoIosMore } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const nisan =
  "https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/448801934_1196391201797656_8215989937596736158_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1dd6TFjQ69YQ7kNvgGcRRPT&_nc_ht=scontent.fktm21-1.fna&oh=00_AYAOWe3d8bR-I8ZwG9znwzk2xCCZ0NGooAkYOasevgnfng&oe=66DC5FA3";
const khem =
  "https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/452195202_1901744336999472_6357747140309838802_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=9zcPWxsY7MoQ7kNvgEu4ySj&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBn2lLE_Z5WucvpQ6r9ImzGryd2vjEe1sR7rA6osvdCSw&oe=66DC79BB";
const jiban =
  "https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/123201081_102426248343348_4913614110525775662_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ssBIDJiln7AQ7kNvgFNA7rs&_nc_ht=scontent.fktm21-1.fna&_nc_gid=AOxaif5MJBAZicOrte9k7pz&oh=00_AYBtWjczhxdLCTVro-WaRNtHBhEt1pGpWDUPCiR2fZvbgQ&oe=66FDFDAC";
const karuna =
  "https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/360085714_1616525928846282_1033599316022958055_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=grInSvmsxUMQ7kNvgFZ6QW-&_nc_ht=scontent.fktm21-1.fna&oh=00_AYB9FvxFAwuWw73ovsyFi9NOIaxwRPjkUbxjRrXLOZy4Og&oe=66DC5BBD";

export default function RightSidbar() {
  return (
    <div className="w-[20%] h-[100vh] fixed top-10 right-0 p-10 bg-slate-50 ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <p className="text-xl">Contacts</p>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center h-8 w-8 hover:bg-gray-200 rounded-full cursor-pointer">
              <IoIosSearch className="text-xl text-gray-700"/>
            </span>
            <Dialog>
              <DialogTrigger asChild>
                <span className="flex items-center justify-center h-8 w-8 hover:bg-gray-200 rounded-full cursor-pointer">
                  <IoIosMore className="text-xl text-gray-700"/>
                </span>
              </DialogTrigger>
              <DialogContent>
                <p>hello</p>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center hover:bg-zinc-100 rounded-md p-2">
            <Avatar>
              <AvatarImage src={nisan} alert="success"/>
              <AvatarFallback>N</AvatarFallback>
            </Avatar>
            <p className="text-md font-medium">User Name</p>
          </div>
          <div className="flex gap-4 items-center hover:bg-zinc-100 rounded-md p-2">
            <Avatar>
              <AvatarImage src={khem}/>
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <p className="text-md font-medium">User Name</p>
          </div>
          <div className="flex gap-4 items-center hover:bg-zinc-100 rounded-md p-2">
            <Avatar>
              <AvatarImage src={jiban}/>
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <p className="text-md font-medium">User Name</p>
          </div>
          <div className="flex gap-4 items-center hover:bg-zinc-100 rounded-md p-2">
            <Avatar>
              <AvatarImage src={karuna} />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <p className="text-md font-medium">User Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
