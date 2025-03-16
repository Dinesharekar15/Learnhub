import React from "react";
import Footer from "../App/Footer";
import Sidebar from "@/App/Sidebar";
import Header from "@/App/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <Header />
      </nav>

      <div className="flex  pt-16">
        {/* Sidebar */}
        <aside className="w-64 fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-md">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex flex-col flex-1 ml-60 p-4 min-h-[calc(100vh-4rem)]">
          <main className="flex-1">
            <Outlet />
          </main>
          <footer className="mt-auto">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
