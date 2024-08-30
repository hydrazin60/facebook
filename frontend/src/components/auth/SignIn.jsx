import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const footerData = [
  { id: "1", name: "English (UK)" },
  { id: "2", name: "नेपाली" },
  { id: "3", name: "हिन्दी" },
  { id: "4", name: "Españo " },
  { id: "5", name: "Portugues (Portugal) " },
  { id: "6", name: "Français (France) " },
  { id: "7", name: "Deutsch (Deutschland) " },
  { id: "8", name: "中文(简体" },
];
const footerData2 = [
  { id: "1", name: "Sign Up" },
  { id: "2", name: "Log In" },
  { id: "3", name: "Messenger" },
  { id: "4", name: "Facebook Lite" },
  { id: "5", name: "Watch" },
  { id: "6", name: "Places" },
  { id: "7", name: "Games" },
  { id: "8", name: "Marketplace" },
  { id: "9", name: "Facebook Pay" },
  { id: "10", name: "Oculus" },
  { id: "11", name: "Portal" },
  { id: "12", name: "Instagram" },
  { id: "13", name: "Bulletin" },
  { id: "14", name: "Services" },
  { id: "15", name: "Voting Information Center" },
  { id: "16", name: "Groups" },
  { id: "17", name: "About" },
  { id: "18", name: "Create Ad" },
  { id: "19", name: "Create Page" },
  { id: "20", name: "Developers" },
  { id: "21", name: "Careers" },
  { id: "22", name: "Privacy" },
  { id: "23", name: "Cookies" },
  { id: "24", name: "Ad Choices" },
  { id: "25", name: "Terms" },
  { id: "26", name: "Help" },
  { id: "27", name: "Contact Uploading & Non-Users" },
  { id: "28", name: "Mobile" },
  { id: "29", name: "Meta Verified" },
  { id: "30", name: "Meta © 2022" },
  { id: "31", name: "Facebook © 2022" },
  { id: "32", name: "English (UK)" },
  { id: "33", name: "हिन्दी" },
  { id: "34", name: "Españo " },
  { id: "35", name: "Portugues (Portugal) " },
  { id: "36", name: "Français (France) " },
  { id: "37", name: "Deutsch (Deutschland) " },
  { id: "38", name: "中文(简体" },
  { id: "39", name: "Sign Up" },
  { id: "40", name: "Log In" },
  { id: "41", name: "Messenger" },
  { id: "42", name: "Facebook Lite" },
  { id: "43", name: "Watch" },
  { id: "44", name: "Places" },
  { id: "45", name: "Games" },
  { id: "46", name: "Marketplace" },
  { id: "47", name: "Facebook Pay" },
  { id: "48", name: "Oculus" },
  { id: "49", name: "Portal" },
  { id: "50", name: "Instagram" },
  { id: "51", name: "Bulletin" },
  { id: "52", name: "Services" },
];
export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleOnchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="h-[100vh] w-screen flex flex-col  overflow-y-scroll mb-10">
      <div className="h-[70%] w-full bg-gray-200 sm:h-[80%] flex   items-center justify-around ">
        <div className="h-80 flex flex-col w-1/2 max-w-xl   justify-center items-start   ">
          <h1 className="text-6xl text-blue-600 font-bold"> facebook</h1>
          <h2 className="text-3xl ">
            Connect with friends and the world around you on Facebook.
          </h2>
        </div>
        <div>
          <form
            className=" w-96 bg-white shadow-lg rounded-lg p-5 "
            onSubmit={handleFormSubmit}
          >
            <div className="mb-5">
              <Input
                type="email"
                placeholder="Email or phone number"
                className="h-12 text-lg"
                name="email"
                required
                value={formData.email}
                onChange={handleOnchange}
              />
            </div>
            <div className="mb-5">
              <Input
                type="password"
                placeholder="Password"
                className="h-12 text-lg"
                name="password"
                required
                value={formData.password}
                onChange={handleOnchange}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 h-12 text-xl font-bold "
              >
                Log In
              </Button>
            </div>
            <div className="mt-3 flex justify-center mb-5 ">
              <span className="text-blue-600 text-sx">Forgotten password?</span>
            </div>
            <hr className="my-3 text-black" />
            <div className="flex justify-center">
              <Button className=" text-lg bg-green-600 h-12 mt-6 ">
                Create New Account
              </Button>
            </div>
          </form>

          <div className="text-center mt-5">
            <span className="text-sx text-black font-bold">
              Create a Page {""}
            </span>
            <span className="text-sm">for a celebrity, brand or business.</span>
          </div>
        </div>
      </div>

      <div className="h-[30%] w-full sm:h-[20%]">
        <div className="flex justify-center items-center gap-2 py-2">
          {footerData.map((data) => (
            <span
              key={data.id}
              className="text-xs text-gray-500 cursor-pointer hover:underline"
            >
              {data.name}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <hr className="w-11/12 border-t border-gray-300 my-1" />
        </div>
        <div className="flex justify-center flex-wrap gap-2 px-4 py-2">
          {footerData2.map((data) => (
            <span
              key={data.id}
              className="text-xs text-gray-500   cursor-pointer hover:underline"
            >
              {data.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
