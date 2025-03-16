import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, Home, BookOpen } from "lucide-react"; // Import icons
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { NavLink } from "react-router-dom";
const Header = () => {
  const isAuthenticated = localStorage.getItem("token");
  
  return (
    <header className="w-full top-0 left-0 flex items-center justify-between p-2 px-8 border-b shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12">
          {" "}
          {/* Increase width and height */}
          <AvatarImage src="/public/4k.jpg" alt="avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
      <div className="relative w-1/3">
        <Input
          type="text"
          placeholder="Type Here To Search.."
          className="pr-10 rounded-full bg-slate-100"
        />
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
      </div>
      
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <NavLink
          to={"my-zone"}
          >
            <Avatar className="w-12 h-12">
            <AvatarImage src="/public/4k.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          </NavLink>
          
        ) : (
          <div className="flex gap-2">
            <NavLink to={"/signup"}>
              <Button variant="default" className="rounded-full bg-blue-500">
                Signup
              </Button>
            </NavLink>
            <NavLink to={"/signin"}>
              <Button variant="default" className="rounded-full bg-blue-500">
                Login
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
