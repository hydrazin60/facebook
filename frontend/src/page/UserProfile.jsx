import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogIn, Section } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaSortDown } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import UserPosts from "@/components/userProfile/UserPosts";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useSelector } from "react-redux";

export default function userProfile() {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const profileViewUserId = useParams();
  const [userProfile, setUserProfile] = React.useState({});
  const [isFollowing, setIsFollowing] = useState(
    user?.following?.includes(userProfile?._id)
  );
  useEffect(() => {
    const UserProfileViewFunction = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/facebook/api/v1/user/profile-view/${profileViewUserId.id}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          setUserProfile(res.data.user);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(`UserProfileViewFunction error: ${error.message}`);
        toast.error(error.message);
      }
    };
    UserProfileViewFunction();
  }, [profileViewUserId.id]);

  const handleFollow = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/facebook/api/v1/user/followOrUnfollow/${id}`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setIsFollowing(!isFollowing);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(`handleFollow error: ${err.message}`);
    }
  };
 
   
  

  return (
    <section className="w-full h-full flex flex-col overflow-y-scroll left-sidebar     ">
      <div className="w-full h-[90vh]  flex flex-col items-center   ">
        <div className="w-[80%] h-[65%] bg-gray-200 rounded-lg">
          <img
            src={userProfile?.coverPic}
            alt="pp"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="w-[80%] h-[35%] flex flex-col  ">
          <div className=" w-full  flex py-4   justify-between border-b border-zinc-300  ">
            <div className="flex items-center  gap-4">
              <div>
                {userProfile?.profilePic ? (
                  <img
                    src={userProfile?.profilePic}
                    alt="pp"
                    className="w-40 h-40 object-cover border-2 border-gray-200 rounded-full"
                  />
                ) : (
                  <div className="w-40 h-40 object-cover border-2 border-gray-200 rounded-full bg-gray-100 font-bold text-6xl flex items-center justify-center">
                    {userProfile?.gender === "male" ? (
                      <>
                        <img
                          src="/public\boys.jpeg"
                          className="w-full h-full rounded-full object-cover "
                          alt="pp"
                        />
                      </>
                    ) : (
                      <>
                        <img src="/public\girlimogi.png" alt="pp" />
                      </>
                    )}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  {userProfile?.firstName} {userProfile?.lastName}
                </h1>
                <p className="text-sm text-gray-500 font-semibold">
                  {userProfile?.followers} followers || {userProfile?.following}{" "}
                  following
                </p>
                <span className="flex ">
                  <img
                    src="https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-6/458336071_535394755826733_9093169157955131347_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fdVr5ILBQEYQ7kNvgHNaw_4&_nc_ht=scontent.fktm21-2.fna&_nc_gid=A7uuuFYcQj1DSVJ7jx8dNhV&oh=00_AYDZUWno54hV-rS6KTl9DrTDIhMttN6nVKokTE7ic5hTfQ&oe=6722C0EA"
                    alt=""
                    className="w-7 h-7 rounded-full object-contain"
                  />
                  <img
                    src="https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-6/463217935_532545289488311_2609725044807551909_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3rd_Mt-I_6MQ7kNvgFma-4_&_nc_ht=scontent.fktm21-2.fna&_nc_gid=AHJCUqgcs9_HFaCFMmX3fzk&oh=00_AYA27Oszs0kiPkVAvjmm-j8p_ELijqopPJSrZbVvkLD7Sw&oe=6722DB09"
                    alt=""
                    className="w-7 h-7 rounded-full object-contain border"
                  />
                  <img
                    src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-1/409679696_898331191998849_8537916708917610320_n.jpg?stp=c0.0.1681.1681a_dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=dU0Ful9reYQQ7kNvgEe3wJ_&_nc_ht=scontent.fktm21-1.fna&_nc_gid=Ad0UzMTxHB-CBSS6FcV31-9&oh=00_AYCHkMKIhfKq6_GKQsQaP_1LXIqL-hcjRDQqmCpjKvuoAw&oe=6722D324"
                    alt=""
                    className="w-7 h-7 rounded-full object-contain border"
                  />
                </span>
              </div>
            </div>
            <div className="flex h-full items-end gap-2 ">
              <Button
                className="bg-zinc-300 text-black hover:bg-zinc-400 hover:text-black flex items-center gap-2"
                onClick={() => handleFollow(userProfile?._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 14c-2.33 0-7 1.17-7 3.5V20h14v-2.5c0-2.33-4.67-3.5-7-3.5zM7.15 10.6c1.06 0 1.93-.86 1.93-1.92S8.2 6.76 7.15 6.76 5.22 7.62 5.22 8.68s.87 1.92 1.93 1.92zM11.91 9.16c0 .71-.17 1.36-.44 1.93-.83.22-1.85.62-2.67 1.24-.36-.07-.71-.12-1.09-.12C4.77 12.21 2 14.46 2 16.97v.98h5.09v-.98c0-1.43 2.56-2.63 5.41-2.63.52 0 1.02.04 1.5.11.38-.54.6-1.19.6-1.91 0-1.72-1.39-3.12-3.12-3.12S8.35 7.53 8.35 9.26c0 .43.1.85.26 1.22.48-.1.98-.15 1.49-.15 1.8 0 3.5.77 4.58 2zM22 10h-2V8h-1v2h-2v1h2v2h1v-2h2v-1z" />
                </svg>
                {isFollowing ? (
                  <p className="text-black text-[0.9rem] font-bold">Unfollow </p>
                ) : (
                  <p className={`text-black  text-[0.9rem] font-bold `}>Follow </p>
                )}
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
                <p> Posts</p>
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
      <div className="bg-zinc-50">
        <UserPosts profileViewUserData={userProfile} />
      </div>
    </section>
  );
}
