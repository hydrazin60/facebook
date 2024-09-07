import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn.jsx";
import LeftSidbar from "./components/LeftSidbar.jsx";
import Home from "./components/Home.jsx";
import RightSidbar from "./components/RightSidbar.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-between">
               <Header />
              <LeftSidbar />
              <Home />
              <RightSidbar />
            </div>
          }
        />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
