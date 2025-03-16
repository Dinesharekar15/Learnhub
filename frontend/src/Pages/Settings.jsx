import React, { useState } from "react";
import General from "@/App/General";
import Security from "@/App/Security";
const Settings = () => {
  const [activeTab, setActiveTab] = useState("general"); // Default to "General"

  return (
    <div className="flex flex-col max-w-lg font-sans mb-10">
      <div className="">
        <ul className="flex">
          <li
            className={`mr-10 cursor-pointer pb-2  ${
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
      </div>
      
      <div className="w-full h-[1px] bg-gray-300 "></div>
      {activeTab=="general" && (
          <General/>
      )}
      

      {activeTab=="security" &&(
        <Security/>
      )}
    </div>
  );
};

export default Settings;
