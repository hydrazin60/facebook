// import React, { useEffect } from "react";
// import Post from "./Post";
// import POsts from "./POsts";
// import { RiLiveFill } from "react-icons/ri";
// import { MdPhotoSizeSelectActual } from "react-icons/md";
// import { BsCameraReelsFill } from "react-icons/bs";
// import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
// import PostCreate from "./PostCreate";
// import { useSelector } from "react-redux";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import axios from "axios";

// export default function Home() {
//   const { user } = useSelector((state) => state.auth);

//   const [isPostCreateDialogOpen, setIsPostCreateDialogOpen] =
//     React.useState(false);
//   const [totalFBpost, setTotalFBpost] = React.useState([]);

//   useEffect(() => {
//     const fetchAllPosts = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:4000/facebook/api/v1/post/show-all-post",
//           { withCredentials: true }
//         );
//         if (res.data.success) {
//           setTotalFBpost(res.data.data);
//         } else {
//           console.log(`Error during fetching post: ${res.data.message}`);
//         }
//       } catch (err) {
//         console.log(`Error during fetching post: ${err.message}`);
//       }
//     };
//     fetchAllPosts();
//   }, []);

//   return (
//     <div className=" relative mt-16 w-[37%] mx-auto flex flex-col gap-4">
//       <section className="  h-32 rounded-lg w-full p-2 border-2 bg-white shadow-lg ">
//         <div className="h-1/2  border-b border-zint-400 flex justify-between items-center">
//           <Avatar className=" cursor-pointer">
//             <AvatarImage src={user.profilePic} alt="Profile" />
//             <AvatarFallback>
//               {user.firstName[0] + "." + user.lastName[0]}
//             </AvatarFallback>
//           </Avatar>
//           <input
//             type="text"
//             placeholder={`What's on your mind, ${
//               user ? user.lastName : "" || user ? user.firstName : ""
//             }?`}
//             className="w-[90%] cursor-pointer h-10 bg-transparent focus:outline-none px-4 placeholder-zinc-400 placeholder:font-[400] bg-zinc-100 hover:bg-zinc-200 rounded-full"
//             readOnly
//             onClick={() => setIsPostCreateDialogOpen(true)}
//           />
//         </div>
//         <div className="h-1/2 flex items-center    ">
//           <div className="flex cursor-pointer items-center justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
//             <RiLiveFill className="text-red-500 text-2xl " />{" "}
//             <p className="text-zinc-500 font-semibold">Live video</p>
//           </div>
//           <div className="flex items-center cursor-pointer justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
//             <MdPhotoSizeSelectActual className="text-green-500 text-2xl" />{" "}
//             <p className="text-zinc-500 font-semibold">Photo/video</p>
//           </div>
//           <div className="flex items-center cursor-pointer justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
//             <BsCameraReelsFill className="text-red-400 text-2xl" />{" "}
//             <p className="text-zinc-500 font-semibold">Reel</p>
//           </div>
//         </div>
//       </section>
//       <PostCreate
//         open={isPostCreateDialogOpen}
//         onClose={() => setIsPostCreateDialogOpen(false)}
//       />
//       <div>
//         {totalFBpost.map((item) => (
//           <POsts key={item} allPost={totalFBpost} />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import PostCreate from "./PostCreate";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import axios from "axios";
import { createPost } from "@/redux/postSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isPostCreateDialogOpen, setIsPostCreateDialogOpen] = useState(false);
  const [totalFBpost, setTotalFBpost] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/facebook/api/v1/post/show-all-post",
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(createPost(res.data.data));
          setTotalFBpost(res.data.data);
        } else {
          console.error(`Error during fetching post: ${res.data.message}`);
        }
      } catch (err) {
        console.error(`Error during fetching post: ${err.message}`);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <div className="relative mt-16 w-[43%] bg-slate-50 mx-auto flex flex-col gap-4">
      {/* Create Post Section */}
      <section className="h-32 rounded-lg w-full p-2 border-2 bg-white shadow-lg">
        <div className="h-1/2 border-b border-zint-400 flex justify-between items-center">
          {/* <Avatar className="cursor-pointer">
            <AvatarImage src={user.profilePic} alt="Profile" />
            <AvatarFallback>
              {user.firstName[0] + "." + user.lastName[0]}
            </AvatarFallback>
          </Avatar> */}
          {user && user.profilePic ? (
            <>
               <img
                src={user.profilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </>
          ) : (
            <>
              <span className="w-7 h-7 rounded-full flex items-center justify-center font-semibold text-lg">
                {user && user.firstName && user.lastName
                  ? `${user.firstName[0]}.${user.lastName[0]}`
                  : ""}
              </span>
            </>
          )}
          <input
            type="text"
            placeholder={`What's on your mind,  ${user.firstName}?`}
            className="w-[90%] cursor-pointer h-10 bg-transparent focus:outline-none px-4 placeholder-zinc-400 placeholder:font-[400] bg-zinc-100 hover:bg-zinc-200 rounded-full"
            readOnly
            onClick={() => setIsPostCreateDialogOpen(true)}
          />
        </div>
        <div className="h-1/2 flex items-center">
          <div className="flex cursor-pointer items-center justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
            <RiLiveFill className="text-red-500 text-2xl" />
            <p className="text-zinc-500 font-semibold">Live video</p>
          </div>
          <div className="flex items-center cursor-pointer justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
            <MdPhotoSizeSelectActual className="text-green-500 text-2xl" />
            <p className="text-zinc-500 font-semibold">Photo/video</p>
          </div>
          <div className="flex items-center cursor-pointer justify-center gap-2 h-9 w-1/3 rounded-lg hover:bg-zinc-300">
            <BsCameraReelsFill className="text-red-400 text-2xl" />
            <p className="text-zinc-500 font-semibold">Reel</p>
          </div>
        </div>
      </section>

      {/* Post Create Dialog */}
      <PostCreate
        open={isPostCreateDialogOpen}
        onClose={() => setIsPostCreateDialogOpen(false)}
      />

      {/* Render Posts */}
      <div>
        {totalFBpost.map((post) => (
          <Post key={post._id} allPost={post} />
        ))}
      </div>
    </div>
  );
}
