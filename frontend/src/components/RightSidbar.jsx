import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoIosSearch, IoIosMore } from "react-icons/io";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RightSidbar() {
  const navigate = useNavigate();
  const [suggestUser, setSuggestUser] = React.useState([]);
  useEffect(() => {
    const GetSuggestUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/facebook/api/v1/user/suggested~user",
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          setSuggestUser(res.data.suggestedUser);
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "An error occurred");
      }
    };

    GetSuggestUser();
  }, []);
  console.log(suggestUser);

  return (
    <div className="w-[20%] h-[100vh] fixed top-10 right-0 p-10 bg-slate-50 ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <p className="text-xl">Contacts</p>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center justify-center h-8 w-8 hover:bg-gray-200 rounded-full cursor-pointer">
              <IoIosSearch className="text-xl text-gray-700" />
            </span>
            <Dialog>
              <DialogTrigger asChild>
                <span className="flex items-center justify-center h-8 w-8 hover:bg-gray-200 rounded-full cursor-pointer">
                  <IoIosMore className="text-xl text-gray-700" />
                </span>
              </DialogTrigger>
              <DialogContent>
                <p>hello</p>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div>
          {suggestUser.map((suggestedUser, itemIndex) => (
            <div
              className="flex gap-4 items-center p-2  hover:bg-gray-200 rounded-md cursor-pointer"
              key={itemIndex}
              onClick={() => navigate(`/profile/${suggestedUser._id}`)}
            >
              <Avatar>
                <AvatarImage src={suggestedUser.profilePic} />
                <AvatarFallback>
                  {suggestedUser.gender === "male" ? (
                    <img
                      src="/public\boys.jpeg"
                      alt="pp"
                      className="h-full w-full  rounded-full overflow-hidden object-contain"
                    />
                  ) : (
                    <img
                      src="/public\girl.jpeg"
                      alt="pp"
                      className="h-full w-full  rounded-full overflow-hidden object-contain"
                    />
                  )}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">
                  {suggestedUser.firstName} {suggestedUser.lastName}
                </p>
                <p className="text-xs text-gray-500">{suggestedUser.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
