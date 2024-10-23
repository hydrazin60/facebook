import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";

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
const BirthMonth = [
  { id: "1", name: "January" },
  { id: "2", name: "February" },
  { id: "3", name: "March" },
  { id: "4", name: "April" },
  { id: "5", name: "May" },
  { id: "6", name: "June" },
  { id: "7", name: "July" },
  { id: "8", name: "August" },
  { id: "9", name: "September" },
  { id: "10", name: "October" },
  { id: "11", name: "November" },
  { id: "12", name: "December" },
];
const Birthday = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
  { id: "6", name: "6" },
  { id: "7", name: "7" },
  { id: "8", name: "8" },
  { id: "9", name: "9" },
  { id: "10", name: "10" },
  { id: "11", name: "11" },
  { id: "12", name: "12" },
  { id: "13", name: "13" },
  { id: "14", name: "14" },
  { id: "15", name: "15" },
  { id: "16", name: "16" },
  { id: "17", name: "17" },
  { id: "18", name: "18" },
  { id: "19", name: "19" },
  { id: "20", name: "20" },
  { id: "21", name: "21" },
  { id: "22", name: "22" },
  { id: "23", name: "23" },
  { id: "24", name: "24" },
  { id: "25", name: "25" },
  { id: "26", name: "26" },
  { id: "27", name: "27" },
  { id: "28", name: "28" },
  { id: "29", name: "29" },
  { id: "30", name: "30" },
  { id: "31", name: "31" },
  { id: "32", name: "32" },
];
const BirthYear = [
  { id: "1", name: "1990" },
  { id: "2", name: "1991" },
  { id: "3", name: "1992" },
  { id: "4", name: "1993" },
  { id: "5", name: "1994" },
  { id: "6", name: "1995" },
  { id: "7", name: "1996" },
  { id: "8", name: "1997" },
  { id: "9", name: "1998" },
  { id: "10", name: "1999" },
  { id: "11", name: "2000" },
  { id: "12", name: "2001" },
  { id: "13", name: "2002" },
  { id: "14", name: "2003" },
  { id: "15", name: "2004" },
  { id: "16", name: "2005" },
  { id: "17", name: "2006" },
  { id: "18", name: "2007" },
  { id: "19", name: "2008" },
  { id: "20", name: "2009" },
  { id: "21", name: "2010" },
  { id: "22", name: "2011" },
  { id: "23", name: "2012" },
  { id: "24", name: "2013" },
  { id: "25", name: "2014" },
  { id: "26", name: "2015" },
  { id: "27", name: "2016" },
  { id: "28", name: "2017" },
  { id: "29", name: "2018" },
  { id: "30", name: "2019" },
  { id: "31", name: "2020" },
  { id: "32", name: "2021" },
  { id: "33", name: "2022" },
  { id: "34", name: "2023" },
  { id: "35", name: "2024" },
  { id: "36", name: "2025" },
];

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showSignUp, setShowSignUp] = useState(false);
  const [SignupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:4000/facebook/api/v1/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message || "Successfully logged in!", {
          position: "top-right",
          autoClose: 3000,
          style: {
            border: "1px solid #4caf50",
            background: "#e8f5e9",
            color: "#4caf50",
          },
        });
      } else {
        toast.error(res.data.message || "Login failed!", {
          position: "top-right",
          autoClose: 3000,
          style: {
            border: "1px solid #f44336",
            background: "#ffebee",
            color: "#f44336",
          },
        });
      }
    } catch (err) {
      console.log("sign in error", err);
      toast.error(
        err?.response?.data?.message || "An unexpected error occurred",
        {
          position: "top-right",
          autoClose: 3000,
          style: {
            border: "1px solid #f44336",
            background: "#ffebee",
            color: "#f44336",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChangeSignUp = (e) => {
    setSignupFormData({ ...SignupFormData, [e.target.name]: e.target.value });
  };

  const handleFormSubmitSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/facebook/api/v1/user/register",
        SignupFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setShowSignUp(false);
        toast.success(res.data.message || "Successfully signed up!", {
          position: "top-right",
          autoClose: 3000,
          style: {
            border: "1px solid #4caf50",
            background: "#e8f5e9",
            color: "#4caf50",
          },
        });
      } else {
        toast.error(res.data.message || "Sign up failed!", {
          position: "top-right",
          autoClose: 3000,
          style: {
            border: "1px solid #f44336",
            background: "#ffebee",
            color: "#f44336",
          },
        });
      }
    } catch (err) {
      console.log("sign up error", err);
      toast.error(
        err?.response?.data?.message || "An unexpected error occurred",
        {
          position: "top-right",
          autoClose: 3000,
          style: {
            border: "1px solid #f44336",
            background: "#ffebee",
            color: "#f44336",
          },
        }
      );
    }
  };
  return (
    <>
      <div
        className={`h-[100vh] w-screen flex flex-col overflow-y-scroll mb-10 ${
          showSignUp ? "blur-sm" : ""
        }`}
      >
        <div className="h-[70%] w-full bg-gray-200 sm:h-[80%] flex items-center justify-around">
          <div className="h-80 flex flex-col w-1/2 max-w-xl justify-center items-start">
            <h1 className="text-6xl text-blue-600 font-bold">facebook</h1>
            <h2 className="text-3xl">
              Connect with friends and the world around you on Facebook.
            </h2>
          </div>
          <div>
            <form
              className="w-96 bg-white shadow-lg rounded-lg p-5"
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
                  onChange={handleOnChange}
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
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 h-12 text-xl font-bold"
                >
                  {loading ? "Loading...." : "Log In"}
                </Button>
              </div>
              <div className="mt-3 flex justify-center mb-5">
                <span className="text-blue-600 text-sx cursor-pointer hover:underline">
                  Forgotten password?
                </span>
              </div>
              <hr className="my-3 text-black" />
              <div className="flex justify-center">
                <Button
                  type="button"
                  className="text-lg bg-green-600 h-12 mt-6"
                  onClick={() => setShowSignUp(true)}
                >
                  Create New Account
                </Button>
              </div>
            </form>

            <div className="text-center mt-5">
              <span className="text-sx text-black font-bold">
                Create a Page{" "}
              </span>
              <span className="text-sm">
                for a celebrity, brand or business.
              </span>
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
                className="text-xs text-gray-500 cursor-pointer hover:underline"
              >
                {data.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-full sm:w-96 max-w-lg rounded-lg shadow-lg p-6 relative">
            <div className="flex justify-between items-center border-b-2 pb-2 mb-4">
              <span>
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-sm text-gray-700">
                  It's free and always will be.
                </p>
              </span>
              <MdCancel
                className="text-2xl cursor-pointer"
                onClick={() => setShowSignUp(false)}
              />
            </div>
            <>
              <div className="flex flex-col gap-4">
                <form
                  action=""
                  className="flex flex-col gap-4"
                  onSubmit={handleFormSubmitSignUp}
                >
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="h-10 text-lg bg-gray-100 border-2 border-gray-300"
                    name="firstName"
                    required
                    value={SignupFormData.firstName}
                    onChange={handleInputChangeSignUp}
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="h-10 text-lg bg-gray-100 border-2 border-gray-300"
                    name="lastName"
                    required
                    value={SignupFormData.lastName}
                    onChange={handleInputChangeSignUp}
                  />
                  <Input
                    type="email"
                    placeholder="Mobile number or email"
                    className="h-10 text-lg bg-gray-100 border-2 border-gray-300"
                    name="email"
                    required
                    value={SignupFormData.email}
                    onChange={handleInputChangeSignUp}
                  />
                  <div className="flex gap-3">
                    <Input
                      type="password"
                      placeholder="New password"
                      className="h-10 text-lg bg-gray-100 border-2 border-gray-300"
                      name="password"
                      required
                      value={SignupFormData.password}
                      onChange={handleInputChangeSignUp}
                    />
                  </div>
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    className="h-10 text-lg bg-gray-100 border-2 border-gray-300"
                    name="confirmPassword"
                    required
                    value={SignupFormData.confirmPassword}
                    onChange={handleInputChangeSignUp}
                  />

                  <div>
                    <label className="text-xs text-gray-500">Birthday ?</label>
                    <div className="flex justify-between">
                      <select
                        className="h-9 text-md rounded-sm  font-medium bg-gray-100 border-2 border-gray-300"
                        name="birthMonth"
                        value={SignupFormData.birthMonth}
                        onChange={handleInputChangeSignUp}
                      >
                        {BirthMonth.map((month) => (
                          <option key={month.id} value={month.name}>
                            {month.name}
                          </option>
                        ))}
                      </select>
                      <select
                        className="h-9 text-md w-28 rounded-sm font-medium bg-gray-100 border-2 border-gray-300"
                        name="birthday"
                        value={SignupFormData.birthday}
                        onChange={handleInputChangeSignUp}
                      >
                        {Birthday.map((day) => (
                          <option key={day.id} value={day.name}>
                            {day.name}
                          </option>
                        ))}
                      </select>
                      <select
                        className="h-9 w-28 text-md rounded-sm font-medium bg-gray-100 border-2 border-gray-300"
                        name="birthYear"
                        value={SignupFormData.birthYear}
                        onChange={handleInputChangeSignUp}
                      >
                        {BirthYear.map((year) => (
                          <option key={year.id} value={year.name}>
                            {year.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500">Gender</label>
                    <div className="flex justify-between gap-3">
                      <section className="w-28 h-9 font-medium bg-white flex items-center border-2 px-2">
                        <label className="flex items-center cursor-pointer w-full">
                          <input
                            type="radio"
                            name="gender"
                            className="mr-2"
                            value="male"
                            checked={SignupFormData.gender === "male"}
                            onChange={handleInputChangeSignUp}
                          />
                          Male
                        </label>
                      </section>
                      <section className=" w-28 h-9 font-medium bg-white flex items-center border-2 px-2">
                        <label className="flex items-center cursor-pointer w-full">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="mr-2"
                            checked={SignupFormData.gender === "female"}
                            onChange={handleInputChangeSignUp}
                          />
                          Female
                        </label>
                      </section>
                      <section className=" w-28 h-9 font-medium bg-white flex justify-between  items-center border-2 px-2">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={SignupFormData.gender === "other"}
                            className="form-radio h-3 w-3 text-blue-600 border-gray-300 mr-2"
                            onChange={handleInputChangeSignUp}
                          />
                          Other
                        </label>
                      </section>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-gray-500">
                        People who use our service may have uploaded your
                        contact information to Facebook
                        <span className="text-blue-600">Learn more</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-3">
                        By clicking Sign Up, you agree to our{" "}
                        <span className="text-blue-600">Terms</span>
                        <span className="text-blue-600">
                          Privacy Policy
                        </span>{" "}
                        and
                        <span className="text-blue-600"> Cookies Policy</span>
                        You may receive SMS Notifications from us and can opt
                        out any time.
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 h-12 text-xl font-bold"
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
}
