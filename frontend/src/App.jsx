import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn.jsx";
import LeftSidbar from "./components/LeftSidbar.jsx";
import Home from "./components/Home.jsx";
import RightSidbar from "./components/RightSidbar.jsx";
import Header from "./components/Header.jsx";
import UserProfile from "./page/UserProfile.jsx";
import { useSelector } from "react-redux";
export default function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-between ">
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

        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
