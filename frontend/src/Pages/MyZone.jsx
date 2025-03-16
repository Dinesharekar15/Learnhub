import React from "react";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import Purchases from "./Purchases";
import General from "@/App/General";
import Security from "@/App/Security";
import { NavLink } from "react-router-dom";

const MyZone = () => {
  const [activeTab, setActiveTab] = useState("purchases"); // Default to "General"
  return (
    <div>
      <nav className=" flex justify-between">
        <div className="flex items-center gap-4">
            <NavLink to={"/"}>
            <Avatar className="w-12 h-12">
            {" "}
            {/* Increase width and height */}
            <AvatarImage src="/public/4k.jpg" alt="avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
            </NavLink>
          
        </div>
        <div className="flex items-center gap-4">
            <NavLink to={"/my-zone"}>
          <Avatar className="w-12 h-12">
            {" "}
            {/* Increase width and height */}
            <AvatarImage src="/public/4k.jpg" alt="avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          </NavLink>
        </div>
      </nav>

      <div className="mt-10 flex justify-between">
        <ul className="flex gap-8">
          <li
            className={`cursor-pointer pb-2 ${
              activeTab === "purchases"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("purchases")}
          >
            Purchases
          </li>
          <li
            className={` cursor-pointer pb-2 ${
              activeTab === "general"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("general")}
          >
            General
          </li>
          <li
            className={`cursor-pointer pb-2 ${
              activeTab === "security"
                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </li>
        </ul>
        <div className="bg-black text-white font-semibold p-3 rounded-3xl">
            <button>Log Out</button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300 "></div>
      {activeTab == "purchases" && <Purchases />}
      {activeTab == "general" && <General />}
      {activeTab == "security" && <Security />}
    </div>
  );
};

export default MyZone;
