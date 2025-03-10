import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar"

const Footer = () => {
  return (
    <footer className="flex justify-between bg-blue-100 rounded-lg h-52 p-8">
      <div className='flex items-center gap-4'>
                <Avatar >
                  <AvatarImage src="../Images/4k.jpg" alt="avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
      </div>
      <div>
        <h2 className="font-bold">Quik Links</h2>
        <ul className="text-blue-500 underline leading-9">
          <li><link rel="stylesheet" href="#" />Terms & Condition</li>
          <li><link rel="stylesheet" href="#" />Privacy Policy</li>
          <li><link rel="stylesheet" href="#" />Refunds & Cancellation Policy</li>
        </ul>
      </div>
      <div className="leading-10">
        <h2 className="font-bold">Download App</h2>
        <h2 className="font-bold">Follow Us</h2>
        <h3 className="font-bold">Powered By</h3>
      </div>
    </footer>
  );
};

export default Footer;
