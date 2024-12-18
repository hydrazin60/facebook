import React, { useState } from "react";
import { GiSchoolBag } from "react-icons/gi";
import { IoBagSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import {
  FaMapMarker,
  FaPlug,
  FaPlus,
  FaRegComment,
  FaRegShareSquare,
  FaRegThumbsUp,
} from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { Button } from "../ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { MoreHorizontal } from "lucide-react";

import { FcLike } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { AiFillLike } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { space } from "postcss/lib/list";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export default function userPosts({ profileViewUserData }) {
  const { user } = useSelector((state) => state.auth);
  const mutualFriends = useSelector((state) => state.mutualFriend.mutualFriend);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:4000/facebook/api/v1/post/liked-post/${id}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsLiked(!isLiked);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "An error occurred");
    }
  };
  return (
    <section>
      <div className="w-full h-full  flex">
        <div className="w-[40%] h-[90vh] flex flex-col items-end gap-5 m-2 ">
          <div className=" w-[80%] rounded-xl bg-white shadow-lg border p-2">
            <div className="border-b border-zinc-300 flex flex-col p-2">
              <section>
                <p className="font-bold text-xl">Intro</p>
              </section>
              <section className="flex flex-col items-center py-2">
                <p className="text-zinc-600">{profileViewUserData.about}</p>
              </section>
            </div>
            <div className="w-full flex flex-col gap-4 my-4 mp-4">
              <span className="w-full flex  gap-4">
                <span className="flex gap-1 items-center text-zinc-500 font-semibold">
                  <HiUserCircle className="text-xl" />
                  <p>Profile .</p>
                </span>
                <p> Digital creator </p>
              </span>
              {profileViewUserData.worksAt ? (
                <span className="w-full flex  gap-3">
                  <span className="flex gap-1 items-center  text-zinc-500    ">
                    <IoBagSharp className="text-xl    " />
                    Work at
                  </span>
                  <p className="text-zinc-600 font-semibold">
                    {" "}
                    {profileViewUserData.worksAt}{" "}
                  </p>
                </span>
              ) : (
                ""
              )}

              {profileViewUserData.livesIn ? (
                <span className="w-full flex  gap-3">
                  <span className="flex gap-1 items-center text-zinc-600  ">
                    <IoMdHome className="text-xl text-zinc-600" />
                    <p>Lives in</p>
                  </span>
                  <p className="text-zinc-600 font-semibold">
                    {profileViewUserData.livesIn}{" "}
                  </p>
                </span>
              ) : (
                ""
              )}
              {profileViewUserData.highSchool ? (
                <span className="w-full flex  gap-3">
                  <span className="flex gap-1 items-center text-zinc-600  ">
                    <FaSchool className="text-xl text-zinc-600" />
                    <p>School</p>
                  </span>
                  <p className="text-zinc-600 font-semibold">
                    {profileViewUserData.highSchool}{" "}
                  </p>
                </span>
              ) : (
                ""
              )}
              {profileViewUserData.college ? (
                <span className="w-full flex  gap-3">
                  <span className="flex gap-1 items-center text-zinc-600  ">
                    <FaGraduationCap className="text-xl text-zinc-600" />
                    <p> college</p>
                  </span>
                  <p className="text-zinc-600 font-semibold">
                    {profileViewUserData.college}{" "}
                  </p>
                </span>
              ) : (
                ""
              )}
              <span className="w-full flex  gap-3">
                <span className="flex gap-1 items-center text-zinc-500 font-semibold">
                  <FaMapMarker className="text-xl" />
                  <p>From</p>
                </span>
                <p className="text-zinc-600 font-semibold">Gaighat, Nepal</p>
              </span>
              {profileViewUserData?.relationship ? (
                <span className="w-full flex  gap-3">
                  <span className="flex gap-1 items-center text-zinc-500 font-semibold">
                    <FaHeart className="text-xl" />
                  </span>
                  <p className="text-zinc-600 font-semibold">
                    {profileViewUserData.relationship}
                  </p>
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className=" w-[80%] bg-white shadow-lg border p-2 items-center  rounded-xl  flex flex-col gap-2 ">
            <div className="w-full flex justify-between">
              <span>
                <p className="font-bold text-xl hover:underline cursor-pointer">
                  Photo
                </p>
              </span>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-500 border-none"
              >
                <p className="text-blue-500 font-serif text-md">
                  {" "}
                  See All Photos{" "}
                </p>
              </Button>
            </div>
            <div className="w-full flex gap-1 items-center flex-wrap max-h-96 overflow-hidden">
              {profileViewUserData?.posts?.map((post) => (
                <>
                  {post.images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt="image"
                      className="w-40 h-40 rounded-sm object-cover "
                    />
                  ))}
                </>
              ))}
            </div>
          </div>
          <div className=" w-[80%] bg-white shadow-lg border p-2 items-center  rounded-xl  flex flex-col gap-2 ">
            <div className="w-full flex justify-between">
              <span>
                <p className="font-bold text-xl hover:underline cursor-pointer">
                  followers
                  <p className="text-zinc-600 text-sm">
                    {user.followers?.length}
                  </p>
                </p>
              </span>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-500 border-none"
              >
                <p className="text-blue-500 font-serif text-md">
                  See all friends
                </p>
              </Button>
            </div>
            <div className=" flex gap-2 border items-center flex-wrap max-h-96 overflow-hidden">
              {mutualFriends?.map((mutualFriend) => (
                <div className="">
                  {mutualFriend.profilePic ? (
                    <img
                      src={mutualFriend.profilePic}
                      alt="image"
                      className=" w-[9rem] h-[9rem] rounded-lg object-cover "
                    />
                  ) : (
                    <>
                      {mutualFriend.gender === "male" ? (
                        <img
                          src="/public\boys.jpeg"
                          alt="pp"
                          className=" w-40 h-40 rounded-lg object-cover "
                        />
                      ) : (
                        <img
                          src="/public\girl.jpeg"
                          alt="pp"
                          className=" w-40 h-40 rounded-lg object-cover "
                        />
                      )}
                    </>
                  )}
                  <span className="w-full flex flex-col ">
                    <p className="text-zinc-600 text-sm font-semibold">
                      {mutualFriend.firstName} {mutualFriend.lastName}
                    </p>
                    <p className="text-zinc-600 text-sm font-semibold">
                      {mutualFriend.followers.length} followers
                    </p>
                  </span>
                </div>
              ))}
            </div>
            {/*      <div className="w-full flex gap-1 items-center flex-wrap">
              <div className="   rounded-lg flex flex-col ">
                <img
                  src="https://imgs.search.brave.com/i8V1TqERrH1HFg-HkNtrNUrtwwFptlr2gy32TnFCUec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN1/RGVkVTBLT0VlMTlo/ay16RkFWN0N1VW1P/THJ1ZHhxandqTHR6/WTUzRWM9"
                  alt=""
                  className=" w-40 h-40 rounded-lg object-cover "
                />
                <span className="w-full flex flex-col ">
                  <p className="text-zinc-600 text-sm font-semibold">
                    Jiban pandey
                  </p>
                  <p className="text-zinc-600 text-sm font-semibold">
                    33 friends
                  </p>
                </span>
              </div>

              <div className="   rounded-lg flex flex-col ">
                <img
                  src="https://imgs.search.brave.com/i8V1TqERrH1HFg-HkNtrNUrtwwFptlr2gy32TnFCUec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN1/RGVkVTBLT0VlMTlo/ay16RkFWN0N1VW1P/THJ1ZHhxandqTHR6/WTUzRWM9"
                  alt=""
                  className=" w-40 h-40 rounded-lg object-cover "
                />
                <span className="w-full flex flex-col ">
                  <p className="text-zinc-600 text-sm font-semibold">
                    Jiban pandey
                  </p>
                  <p className="text-zinc-600 text-sm font-semibold">
                    33 friends
                  </p>
                </span>
              </div>

              <div className="   rounded-lg flex flex-col ">
                <img
                  src="https://imgs.search.brave.com/i8V1TqERrH1HFg-HkNtrNUrtwwFptlr2gy32TnFCUec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN1/RGVkVTBLT0VlMTlo/ay16RkFWN0N1VW1P/THJ1ZHhxandqTHR6/WTUzRWM9"
                  alt=""
                  className=" w-40 h-40 rounded-lg object-cover "
                />
                <span className="w-full flex flex-col ">
                  <p className="text-zinc-600 text-sm font-semibold">
                    Jiban pandey
                  </p>
                  <p className="text-zinc-600 text-sm font-semibold">
                    33 friends
                  </p>
                </span>
              </div>
              <div className="   rounded-lg flex flex-col ">
                <img
                  src="https://imgs.search.brave.com/i8V1TqERrH1HFg-HkNtrNUrtwwFptlr2gy32TnFCUec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN1/RGVkVTBLT0VlMTlo/ay16RkFWN0N1VW1P/THJ1ZHhxandqTHR6/WTUzRWM9"
                  alt=""
                  className=" w-40 h-40 rounded-lg object-cover "
                />
                <span className="w-full flex flex-col ">
                  <p className="text-zinc-600 text-sm font-semibold">
                    Jiban pandey
                  </p>
                  <p className="text-zinc-600 text-sm font-semibold">
                    33 friends
                  </p>
                </span>
              </div>
            </div> */}
          </div>
        </div>
        {/*                                 */}
        <div className="w-[45%] h-[90vh]   m-2 p-4">
          <div className=" w-full h-auto border  border-zinc-300 bg-white rounded-lg px-4 shadow-lg  flex justify-between items-center flex-col">
            <div className="w-full flex gap-4 items-center border-b p-4  border-zinc-300">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={profileViewUserData.profilePic}
                  alt="Profile"
                  className="w-10 h-10"
                />
                <span className="text-md font-semibold text-zinc-700 border-2 rounded-full  ">
                  {profileViewUserData.gender === "male" ? (
                    <>
                      <img
                        src="/public\boys.jpeg"
                        alt="pp"
                        className="h-full w-full rounded-full overflow-hidden object-contain"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="/public\girlimogi.png"
                        alt="pp"
                        className="h-full w-full rounded-full overflow-hidden object-contain"
                      />{" "}
                    </>
                  )}
                </span>
              </Avatar>
              <input
                type="text"
                placeholder={`What's on your mind, ${profileViewUserData.firstName}?`}
                className="w-[90%] cursor-pointer h-10 bg-transparent focus:outline-none px-4 placeholder-zinc-600 placeholder:font-[400] bg-zinc-200 hover:bg-zinc-200 rounded-full"
                readOnly
              />
            </div>
            <div className="h-20 flex items-center     ">
              <div className="flex cursor-pointer items-center justify-center gap-2 h-9  w-52 rounded-lg hover:bg-zinc-300">
                <RiLiveFill className="text-red-500 text-2xl" />
                <p className="text-zinc-500 font-semibold">Live video</p>
              </div>
              <div className="flex items-center cursor-pointer justify-center gap-2 h-9   w-52 rounded-lg hover:bg-zinc-300">
                <MdPhotoSizeSelectActual className="text-green-500 text-2xl" />
                <p className="text-zinc-500 font-semibold">Photo/video</p>
              </div>
              <div className="flex items-center cursor-pointer justify-center gap-2 h-9 w-52 rounded-lg hover:bg-zinc-300">
                <BsCameraReelsFill className="text-red-400 text-2xl" />
                <p className="text-zinc-500 font-semibold">Reel</p>
              </div>
            </div>
          </div>
          <div>
            {profileViewUserData && profileViewUserData.posts ? (
              profileViewUserData.posts?.map((post) => (
                <div
                  className="p-4 border-2 rounded-xl  my-2"
                  style={{ backgroundColor: "#fff" }}
                >
                  <div className="flex justify-between items-center max-w-3xl">
                    <div className="flex gap-2 items-center">
                      <Avatar>
                        <AvatarImage
                          src={profileViewUserData.profilePic}
                          alt="profile pp"
                        />
                        <span className="text-md font-semibold text-zinc-700 border-2 rounded-full  ">
                          {profileViewUserData.gender === "male" ? (
                            <>
                              <img
                                src="/public\boys.jpeg"
                                alt="pp"
                                className="h-full w-full rounded-full overflow-hidden object-contain"
                              />
                            </>
                          ) : (
                            <>
                              <img
                                src="/public\girlimogi.png"
                                alt="pp"
                                className="h-full w-full rounded-full overflow-hidden object-contain"
                              />{" "}
                            </>
                          )}
                        </span>
                      </Avatar>
                      <span>
                        <p className="font-semibold text-md">
                          {profileViewUserData.firstName}{" "}
                          {profileViewUserData.lastName}
                        </p>
                        <p className="text-xs text-gray-500 font-semibold">
                          {new Date(post.createdAt).toLocaleDateString()}
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
                          <div className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                            <span className="text-black text-xl"> dd</span>
                            <div>
                              <p className="font-semibold text-sm">
                                h fdjfhdhjfd
                              </p>
                              <p className="text-xs text-gray-500">
                                hello caption
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <span className="text-lg h-8 w-8 cursor-pointer hover:bg-zinc-200 flex items-center justify-center rounded-full">
                        <RxCross1 className="  text-lg cursor-pointer hover:text-zinc-600  rounded-full" />
                      </span>
                    </div>
                  </div>
                  <div className="my-2">
                    <p> {profileViewUserData.caption} </p>
                  </div>

                  <div className="relative h-full w-full flex overflow-hidden">
                    {post.images.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt="image"
                        className="w-full h-96 object-cover border-2 border-gray-200 rounded-md"
                      />
                    ))}
                    <div className="absolute text-white right-[10%] bottom-[30%] flex items-center">
                      {post.images.length > 2 && (
                        <>
                          <FaPlus className="text-white text-4xl" />{" "}
                          <p className="text-4xl font-bold">
                            {" "}
                            {post.images.length - 2}{" "}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between my-3">
                    <div className="flex gap-2">
                      <div className="flex items-center cursor-pointer  ">
                        {post.likes.includes(user._id) ? (
                          <>
                            <span className="text-2xl z-10">
                              <AiFillLike className="text-blue-500 hover:scale-110 transition-transform" />
                            </span>
                            <span className="text-2xl z-10">
                              <FcLike className="text-red-500 hover:scale-110 transition-transform" />
                            </span>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 cursor-pointer ">
                        {post.likes.length} people liked
                      </p>
                    </div>
                    <div className="flex text-gray-500 cursor-pointer">
                      <p className="text-sm">
                        {" "}
                        {post.comments.length} Comments
                      </p>
                      <p className="text-sm">12 Shares</p>
                    </div>
                  </div>

                  <hr className="my-3 border-gray-300" />
                  <div className="flex justify-between mx-4">
                    {post.likes.includes(user._id) ? (
                      <span
                        className="flex gap-2 cursor-pointer"
                        onClick={() => handleLike(post._id)}
                      >
                        <AiFillLike className="text-blue-500 text-2xl" />
                        <label className="text-blue-500 cursor-pointer">
                          Like
                        </label>
                      </span>
                    ) : (
                      <span
                        className="flex gap-2 cursor-pointer"
                        onClick={() => handleLike(post._id)}
                      >
                        <FaRegThumbsUp className="text-gray-500 text-2xl" />
                        <label className="text-gray-500 cursor-pointer">
                          Like
                        </label>
                      </span>
                    )}
                    <span className="flex gap-2 cursor-pointer">
                      <FaWhatsapp className="text-gray-500 text-2xl" />
                      <label className="text-gray-500 cursor-pointer">
                        {" "}
                        Send{" "}
                      </label>
                    </span>
                    <span className="flex gap-2 cursor-pointer">
                      <FaRegComment className="text-gray-500 text-2xl" />
                      <label className="text-gray-500 cursor-pointer">
                        Comment
                      </label>
                    </span>
                    <span className="flex gap-2 cursor-pointer">
                      <FaRegShareSquare className="text-gray-500 text-2xl" />
                      <label className="text-gray-500 cursor-pointer ">
                        Share
                      </label>
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>No Posts</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/*    <div
              console className="p-4 border-2 rounded-xl  my-2"
              style={{ backgroundColor: "#fff" }}
            >



              <div className="flex justify-between items-center max-w-3xl">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage
                      src={profileViewUserData.profilePic}
                      alt="profile pp"
                    />
                    <AvatarFallback className="text-md font-semibold text-zinc-700 ">
                      {
                        profileViewUserData.firstName &&
                        profileViewUserData.lastName
                          ? profileViewUserData.firstName[0] +
                            profileViewUserData.lastName[0]
                          : "?" // Fallback character in case of missing names
                      }
                    </AvatarFallback>
                  </Avatar>
                  <span>
                    <p className="font-semibold text-md">
                      {profileViewUserData.firstName}{" "}
                      {profileViewUserData.lastName}
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">
                      {profileViewUserData.createdAt}
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
                      <div className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <span className="text-black text-xl"> dd</span>
                        <div>
                          <p className="font-semibold text-sm">h fdjfhdhjfd</p>

                          <p className="text-xs text-gray-500">hello caption</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <span className="text-lg h-8 w-8 cursor-pointer hover:bg-zinc-200 flex items-center justify-center rounded-full">
                    <RxCross1 className="  text-lg cursor-pointer hover:text-zinc-600  rounded-full" />
                  </span>
                </div>
              </div>

              <div className="my-2">
                <p> {profileViewUserData.caption} </p>
              </div>

              <div className="relative h-full w-full flex overflow-hidden">
                <img
                  src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
                  alt={`post image `}
                  className="w-full h-96 object-cover border-2 border-gray-200 rounded-md"
                />

                <div className="absolute text-white right-[10%] bottom-[30%] flex items-center">
                  <FaPlug className="text-white text-4xl" />
                  <p className="text-4xl font-semibold">2k</p>
                </div>
              </div>
              <div className="flex justify-between my-3">
                <div className="flex gap-2">
                  <div className="flex items-center cursor-pointer  ">
                    <span className="text-2xl z-10">
                      <AiFillLike className="text-blue-500 hover:scale-110 transition-transform" />
                    </span>
                    <span className="text-2xl z-10">
                      <FcLike className="text-red-500 hover:scale-110 transition-transform" />
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 cursor-pointer ">
                    3 people liked
                  </p>
                </div>
                <div className="flex text-gray-500 cursor-pointer">
                  <p className="text-sm"> 3 Comments</p>
                  <p className="text-sm">12 Shares</p>
                </div>
              </div>

              <hr className="my-3 border-gray-300" />
              <div className="flex justify-between mx-4">
                <span className="flex gap-2 cursor-pointer">
                  <FaRegThumbsUp className="text-gray-500 text-2xl" />
                  <label className="text-blue-500 cursor-pointer">Like</label>
                </span>
                <span className="flex gap-2 cursor-pointer">
                  <FaWhatsapp className="text-gray-500 text-2xl" />
                  <label className="text-gray-500 cursor-pointer"> Send </label>
                </span>
                <span className="flex gap-2 cursor-pointer">
                  <FaRegComment className="text-gray-500 text-2xl" />
                  <label className="text-gray-500 cursor-pointer">
                    Comment
                  </label>
                </span>
                <span className="flex gap-2 cursor-pointer">
                  <FaRegShareSquare className="text-gray-500 text-2xl" />
                  <label className="text-gray-500 cursor-pointer ">Share</label>
                </span>
              </div>
            </div>*/
// import React from "react";
// import { GiSchoolBag } from "react-icons/gi";
// import { IoBagSharp } from "react-icons/io5";
// import { IoMdHome } from "react-icons/io";
// import {
//   FaMapMarker,
//   FaPlug,
//   FaPlus,
//   FaRegComment,
//   FaRegShareSquare,
//   FaRegThumbsUp,
// } from "react-icons/fa";
// import { HiUserCircle } from "react-icons/hi";
// import { Button } from "../ui/button";
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "../../components/ui/avatar";
// import { RiLiveFill } from "react-icons/ri";
// import { MdPhotoSizeSelectActual } from "react-icons/md";
// import { BsCameraReelsFill } from "react-icons/bs";
// import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
// import { MoreHorizontal } from "lucide-react";

// import { FcLike } from "react-icons/fc";
// import { RxCross1 } from "react-icons/rx";
// import { AiFillLike } from "react-icons/ai";
// import { FaWhatsapp } from "react-icons/fa6";
// import { useSelector } from "react-redux";
// import { FaHeart } from "react-icons/fa";
// import { FaSchool } from "react-icons/fa";
// import { FaGraduationCap } from "react-icons/fa6";
// import { space } from "postcss/lib/list";

// export default function userPosts({ profileViewUserData }) {
//   return (
//     <section>
//       <div className="w-full h-full  flex">
//         <div className="w-[40%] h-[90vh] flex flex-col items-end gap-5 m-2 ">
//           <div className=" w-[80%] rounded-xl bg-white shadow-lg border p-2">
//             <div className="border-b border-zinc-300 flex flex-col p-2">
//               <section>
//                 <p className="font-bold text-xl">Intro</p>
//               </section>
//               <section className="flex flex-col items-center py-2">
//                 <p className="text-zinc-600">{profileViewUserData.about}</p>
//               </section>
//             </div>
//             <div className="w-full flex flex-col gap-4 my-4 mp-4">
//               <span className="w-full flex  gap-4">
//                 <span className="flex gap-1 items-center text-zinc-500 font-semibold">
//                   <HiUserCircle className="text-xl" />
//                   <p>Profile .</p>
//                 </span>
//                 <p> Digital creator </p>
//               </span>
//               {profileViewUserData.worksAt ? (
//                 <span className="w-full flex  gap-3">
//                   <span className="flex gap-1 items-center  text-zinc-500    ">
//                     <IoBagSharp className="text-xl    " />
//                     Work at
//                   </span>
//                   <p className="text-zinc-600 font-semibold">
//                     {" "}
//                     {profileViewUserData.worksAt}{" "}
//                   </p>
//                 </span>
//               ) : (
//                 ""
//               )}

//               {profileViewUserData.livesIn ? (
//                 <span className="w-full flex  gap-3">
//                   <span className="flex gap-1 items-center text-zinc-600  ">
//                     <IoMdHome className="text-xl text-zinc-600" />
//                     <p>Lives in</p>
//                   </span>
//                   <p className="text-zinc-600 font-semibold">
//                     {profileViewUserData.livesIn}{" "}
//                   </p>
//                 </span>
//               ) : (
//                 ""
//               )}
//               {profileViewUserData.highSchool ? (
//                 <span className="w-full flex  gap-3">
//                   <span className="flex gap-1 items-center text-zinc-600  ">
//                     <FaSchool className="text-xl text-zinc-600" />
//                     <p>School</p>
//                   </span>
//                   <p className="text-zinc-600 font-semibold">
//                     {profileViewUserData.highSchool}{" "}
//                   </p>
//                 </span>
//               ) : (
//                 ""
//               )}
//               {profileViewUserData.college ? (
//                 <span className="w-full flex  gap-3">
//                   <span className="flex gap-1 items-center text-zinc-600  ">
//                     <FaGraduationCap className="text-xl text-zinc-600" />
//                     <p> college</p>
//                   </span>
//                   <p className="text-zinc-600 font-semibold">
//                     {profileViewUserData.college}{" "}
//                   </p>
//                 </span>
//               ) : (
//                 ""
//               )}
//               <span className="w-full flex  gap-3">
//                 <span className="flex gap-1 items-center text-zinc-500 font-semibold">
//                   <FaMapMarker className="text-xl" />
//                   <p>From</p>
//                 </span>
//                 <p className="text-zinc-600 font-semibold">Gaighat, Nepal</p>
//               </span>
//               {profileViewUserData?.relationship ? (
//                 <span className="w-full flex  gap-3">
//                   <span className="flex gap-1 items-center text-zinc-500 font-semibold">
//                     <FaHeart className="text-xl" />
//                   </span>
//                   <p className="text-zinc-600 font-semibold">
//                     {profileViewUserData.relationship}
//                   </p>
//                 </span>
//               ) : (
//                 ""
//               )}
//             </div>
//           </div>
//           <div className=" w-[80%] bg-white shadow-lg border p-2 items-center  rounded-xl  flex flex-col gap-2 ">
//             <div className="w-full flex justify-between">
//               <span>
//                 <p className="font-bold text-xl hover:underline cursor-pointer">
//                   Photo
//                 </p>
//               </span>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="text-blue-500 border-none"
//               >
//                 <p className="text-blue-500 font-serif text-md">
//                   {" "}
//                   See All Photos{" "}
//                 </p>
//               </Button>
//             </div>
//             <div className="w-full flex gap-1 items-center flex-wrap max-h-96 overflow-hidden">
//               {profileViewUserData?.posts?.map((post) => (
//                 <>
//                   {post.images.map((image) => (
//                     <img
//                       key={image}
//                       src={image}
//                       alt="image"
//                       className="w-40 h-40 rounded-sm object-cover "
//                     />
//                   ))}
//                 </>
//               ))}
//             </div>
//           </div>
//           <div className=" w-[80%] bg-white shadow-lg border p-2 items-center  rounded-xl  flex flex-col gap-2 ">
//             <div className="w-full flex justify-between">
//               <span>
//                 <p className="font-bold text-xl hover:underline cursor-pointer">
//                   Friend <p className="text-zinc-600 text-sm">22</p>
//                 </p>
//               </span>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="text-blue-500 border-none"
//               >
//                 <p className="text-blue-500 font-serif text-md">
//                   See all friends
//                 </p>
//               </Button>
//             </div>
//             <div className="w-full flex gap-1 items-center flex-wrap">
//               <div className="   rounded-lg flex flex-col ">
//                 <img
//                   src="https://imgs.search.brave.com/i8V1TqERrH1HFg-HkNtrNUrtwwFptlr2gy32TnFCUec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN1/RGVkVTBLT0VlMTlo/ay16RkFWN0N1VW1P/THJ1ZHhxandqTHR6/WTUzRWM9"
//                   alt=""
//                   className=" w-40 h-40 rounded-lg object-cover "
//                 />
//                 <span className="w-full flex flex-col ">
//                   <p className="text-zinc-600 text-sm font-semibold">
//                     Jiban pandey
//                   </p>
//                   <p className="text-zinc-600 text-sm font-semibold">
//                     33 friends
//                   </p>
//                 </span>
//               </div>

//               <div className="   rounded-lg flex flex-col ">
//                 <img
//                   src="https://imgs.search.brave.com/i8V1TqERrH1HFg-HkNtrNUrtwwFptlr2gy32TnFCUec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN1/RGVkVTBLT0VlMTlo/ay16RkFWN0N1VW1P/THJ1ZHhxandqTHR6/WTUzRWM9"
//                   alt=""
//                   className=" w-40 h-40 rounded-lg object-cover "
//                 />
//                 <span className="w-full flex flex-col ">
//                   <p className="text-zinc-600 text-sm font-semibold">
//                     Jiban pandey
//                   </p>
//                   <p className="text-zinc-600 text-sm font-semibold">
//                     33 friends
//                   </p>
//                 </span>
//               </div>

//               <div className="   rounded-lg flex flex-col ">
//                 <img
//                   src="https://imgs.search.brave.com/i8V1TqERrH1HFg-HkNtrNUrtwwFptlr2gy32TnFCUec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN1/RGVkVTBLT0VlMTlo/ay16RkFWN0N1VW1P/THJ1ZHhxandqTHR6/WTUzRWM9"
//                   alt=""
//                   className=" w-40 h-40 rounded-lg object-cover "
//                 />
//                 <span className="w-full flex flex-col ">
//                   <p className="text-zinc-600 text-sm font-semibold">
//                     Jiban pandey
//                   </p>
//                   <p className="text-zinc-600 text-sm font-semibold">
//                     33 friends
//                   </p>
//                 </span>
//               </div>
//               <div className="   rounded-lg flex flex-col ">
//                 <img
//                   src="https://imgs.search.brave.com/i8V1TqERrH1HFg-HkNtrNUrtwwFptlr2gy32TnFCUec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA2/NDcyMzExL3Bob3Rv/L3N1bnJpc2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVN1/RGVkVTBLT0VlMTlo/ay16RkFWN0N1VW1P/THJ1ZHhxandqTHR6/WTUzRWM9"
//                   alt=""
//                   className=" w-40 h-40 rounded-lg object-cover "
//                 />
//                 <span className="w-full flex flex-col ">
//                   <p className="text-zinc-600 text-sm font-semibold">
//                     Jiban pandey
//                   </p>
//                   <p className="text-zinc-600 text-sm font-semibold">
//                     33 friends
//                   </p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-[45%] h-[90vh]   m-2 p-4">
//           <div className=" w-full h-auto border  border-zinc-300 bg-white rounded-lg px-4 shadow-lg  flex justify-between items-center flex-col">
//             <div className="w-full flex gap-4 items-center border-b p-4  border-zinc-300">
//               <Avatar className="cursor-pointer">
//                 <AvatarImage
//                   src={profileViewUserData.profilePic}
//                   alt="Profile"
//                   className="w-10 h-10"
//                 />
//                 <AvatarFallback>jf</AvatarFallback>
//               </Avatar>
//               <input
//                 type="text"
//                 placeholder={`What's on your mind, ${profileViewUserData.firstName}?`}
//                 className="w-[90%] cursor-pointer h-10 bg-transparent focus:outline-none px-4 placeholder-zinc-600 placeholder:font-[400] bg-zinc-200 hover:bg-zinc-200 rounded-full"
//                 readOnly
//               />
//             </div>
//             <div className="h-20 flex items-center     ">
//               <div className="flex cursor-pointer items-center justify-center gap-2 h-9  w-52 rounded-lg hover:bg-zinc-300">
//                 <RiLiveFill className="text-red-500 text-2xl" />
//                 <p className="text-zinc-500 font-semibold">Live video</p>
//               </div>
//               <div className="flex items-center cursor-pointer justify-center gap-2 h-9   w-52 rounded-lg hover:bg-zinc-300">
//                 <MdPhotoSizeSelectActual className="text-green-500 text-2xl" />
//                 <p className="text-zinc-500 font-semibold">Photo/video</p>
//               </div>
//               <div className="flex items-center cursor-pointer justify-center gap-2 h-9 w-52 rounded-lg hover:bg-zinc-300">
//                 <BsCameraReelsFill className="text-red-400 text-2xl" />
//                 <p className="text-zinc-500 font-semibold">Reel</p>
//               </div>
//             </div>
//           </div>
//           <div>
//           <div
//               className="p-4 border-2 rounded-xl  my-2"
//               style={{ backgroundColor: "#fff" }}
//             >
//               <div className="flex justify-between items-center max-w-3xl">
//                 <div className="flex gap-2 items-center">
//                   <Avatar>
//                     <AvatarImage
//                       src={profileViewUserData.profilePic}
//                       alt="profile pp"
//                     />
//                     <AvatarFallback className="text-md font-semibold text-zinc-700 ">
//                       {
//                         profileViewUserData.firstName &&
//                         profileViewUserData.lastName
//                           ? profileViewUserData.firstName[0] +
//                             profileViewUserData.lastName[0]
//                           : "?" // Fallback character in case of missing names
//                       }
//                     </AvatarFallback>
//                   </Avatar>
//                   <span>
//                     <p className="font-semibold text-md">
//                       {profileViewUserData.firstName}{" "}
//                       {profileViewUserData.lastName}
//                     </p>
//                     <p className="text-xs text-gray-500 font-semibold">
//                       {profileViewUserData.createdAt}
//                     </p>
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <span className="text-lg h-8 w-8 cursor-pointer hover:bg-zinc-200 flex items-center justify-center rounded-full">
//                         <MoreHorizontal className=" text-lg cursor-pointer hover:text-zinc-600   rounded-full" />
//                       </span>
//                     </DialogTrigger>
//                     <DialogContent className="w-96 p-2 shadow-lg border border-gray-200 rounded-md">
//                       <div className="flex gap-4 items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
//                         <span className="text-black text-xl"> dd</span>
//                         <div>
//                           <p className="font-semibold text-sm">h fdjfhdhjfd</p>

//                           <p className="text-xs text-gray-500">hello caption</p>
//                         </div>
//                       </div>
//                     </DialogContent>
//                   </Dialog>
//                   <span className="text-lg h-8 w-8 cursor-pointer hover:bg-zinc-200 flex items-center justify-center rounded-full">
//                     <RxCross1 className="  text-lg cursor-pointer hover:text-zinc-600  rounded-full" />
//                   </span>
//                 </div>
//               </div>

//               <div className="my-2">
//                 <p> {profileViewUserData.caption} </p>
//               </div>

//               <div className="relative h-full w-full flex overflow-hidden">
//                 <img
//                   src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
//                   alt={`post image `}
//                   className="w-full h-96 object-cover border-2 border-gray-200 rounded-md"
//                 />

//                 <div className="absolute text-white right-[10%] bottom-[30%] flex items-center">
//                   <FaPlug className="text-white text-4xl" />
//                   <p className="text-4xl font-semibold">2k</p>
//                 </div>
//               </div>
//               <div className="flex justify-between my-3">
//                 <div className="flex gap-2">
//                   <div className="flex items-center cursor-pointer  ">
//                     <span className="text-2xl z-10">
//                       <AiFillLike className="text-blue-500 hover:scale-110 transition-transform" />
//                     </span>
//                     <span className="text-2xl z-10">
//                       <FcLike className="text-red-500 hover:scale-110 transition-transform" />
//                     </span>
//                   </div>

//                   <p className="text-sm text-gray-500 cursor-pointer ">
//                     3 people liked
//                   </p>
//                 </div>
//                 <div className="flex text-gray-500 cursor-pointer">
//                   <p className="text-sm"> 3 Comments</p>
//                   <p className="text-sm">12 Shares</p>
//                 </div>
//               </div>

//               <hr className="my-3 border-gray-300" />
//               <div className="flex justify-between mx-4">
//                 <span className="flex gap-2 cursor-pointer">
//                   <FaRegThumbsUp className="text-gray-500 text-2xl" />
//                   <label className="text-blue-500 cursor-pointer">Like</label>
//                 </span>
//                 <span className="flex gap-2 cursor-pointer">
//                   <FaWhatsapp className="text-gray-500 text-2xl" />
//                   <label className="text-gray-500 cursor-pointer"> Send </label>
//                 </span>
//                 <span className="flex gap-2 cursor-pointer">
//                   <FaRegComment className="text-gray-500 text-2xl" />
//                   <label className="text-gray-500 cursor-pointer">
//                     Comment
//                   </label>
//                 </span>
//                 <span className="flex gap-2 cursor-pointer">
//                   <FaRegShareSquare className="text-gray-500 text-2xl" />
//                   <label className="text-gray-500 cursor-pointer ">Share</label>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
