import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn.jsx";
import LeftSidbar from "./components/LeftSidbar.jsx";
import Home from "./components/Home.jsx";
import RightSidbar from "./components/RightSidbar.jsx";
import Header from "./components/Header.jsx";
import UserProfile from "./page/UserProfile.jsx";
import { useSelector } from "react-redux";
import EditProfile from "./components/userProfile/EditProfile.jsx";
export default function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-between bg-gray-50 ">
              <Header />
              <LeftSidbar />
              <Home />
              <RightSidbar />
            </div>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <div>
              <Header />
              <UserProfile />
            </div>
          }
        />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
