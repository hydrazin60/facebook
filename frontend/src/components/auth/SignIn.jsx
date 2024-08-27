import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SignIn() {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="h-[90vh] w-full bg-slate-100 flex justify-around items-center">
        <div className="text-start ">
          <h1 className="text-6xl font-bold text-blue-600 ">facebook</h1>
          <p className="text-2xl">
            Connect with friends and the world <br /> around you on Facebook.
          </p>
        </div>
        <div className="">
          <div className=" flex  items-center justify-center ">
            <div className="shadow-lg flex flex-col gap-5 p-3 rounded-xl h-auto w-96 bg-white ">
              <form className="border-b-2  mx-2  ">
                <div>
                  <Input
                    placeholder="Email address or phone number"
                    type="email"
                    name="email"
                    className="focus-visible:ring-transparent  h-12 my-4 "
                  />
                </div>
                <div>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="focus-visible:ring-transparent  h-12 my-4"
                  />
                </div>
                <Button className="w-full bg-blue-700 h-12 ny-4 text-2xl hover:bg-blue-600">
                  Log In
                </Button>
                <span className="">
                  <p className="text-center text-blue-700 h-12 mt-3">
                    Forgotten password
                  </p>
                </span>
              </form>
              <Button className="bg-green-600 h-14 text-xl hover:bg-green-500 ">
                Create new account
              </Button>
            </div>
          </div>
          <p className="mt-10">
            <b>Create a Page</b> for a celebrity, brand or business.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[50%] bg-white mb-3  ">
        <div className="flex gap-2 border-b-2 text-xs mt-3 text-zinc-400 ">
          <a href="#">English (US) </a>
          <a href="#"> नेपाली</a>
          <a href="#">हिन्दी</a>
          <a href="#"> Español</a>
          <a href="#"> Português (Brasil)</a>
          <a href="#">日本語</a>
          <a href="#"> Français (France)</a>
          <a href="#">Deutsch</a>
          <a href="#">italiano</a>
          <a href="#">Polski</a>
          <a href="#">Espanol</a>
          <a href="#">Portugues (Brasil)</a>
          <a href="#">繁體中文</a>
          <a href="#">简体中文</a>
        </div>
        <div className="flex flex-wrap gap-2 text-sm mt-6 text-zinc-400 ">
          <a href="#"> Sign Up</a>
          <a href="#"> Log In</a>
          <a href="#"> Messenger</a>
          <a href="#">Facebook Lite</a>
          <a href="#">Video</a>
          <a href="#">Places</a>
          <a href="#">Games</a>
          <a href="#">Marketplace</a>
          <a href="#">Meta Pay</a>
          <a href="#"> Oculus</a>
          <a href="#">Portal</a>
          <a href="#"> Instagram</a>
          <a href="#">Bulletin</a>
          <a href="#">Pages</a>
          <a href="#">Page categories</a>
          <a href="#">Jobs</a>
          <a href="#">About</a>
          <a href="#">Create ad</a>
          <a href="#">Create Page</a>
          <a href="#">Developers</a>
          <a href="#">Careers</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
          <a href="#">AdChoices</a>
          <a href="#">Terms</a>
          <a href="#">Help</a>
          <a href="#">Contact uploading and non-users</a>
          <a href="#">Settings</a>
          <a href="#">Activity log</a>
          <a href="#">Meta © 2022</a>
        </div>
      </div>
    </div>
  );
}

/* <div className=" flex  items-center   h-screen justify-center  ">
        <div className="shadow-lg flex flex-col gap-5 p-3 rounded-xl   ">
            <form className="border-b-2 ">
              <div>
                <Input
                  placeholder="Email address or phone number"
                  type="email"
                  name="email"
                  className="focus-visible:ring-transparent my-3"
                />
              </div>
              <div>
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="focus-visible:ring-transparent my-3"
                />
              </div>
              <Button className="w-full bg-blue-700">Log In</Button>
              <span>
                <p className="text-center text-blue-700">Forgotten password</p>
              </span>
            </form>
            <Button className="bg-green-600 ">Create new account</Button>
          </div>
        </div>*/
