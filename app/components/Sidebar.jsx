"use client";

import { useState } from "react";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

import deepLogo from "@/assets/logo_icon.svg";
import Image from "next/image";
import { Menu, X, PlusCircle, Search, Folder, User } from "lucide-react";

import ChatLabel from "./ChatLabel";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 text-white bg-neutral-900 cursor-pointer"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen bg-neutral-800 text-white transition-all duration-300 ease-in-out ${
          open ? "w-64" : "w-20"
        } overflow-hidden shadow-xl flex flex-col`}
      >
        {/* Top Logo */}
        <div className="h-14 flex items-center justify-center relative cursor-pointer">
          <div
            className={`absolute transition-all duration-500 ${
              open ? "opacity-0 scale-50" : "opacity-100 scale-100"
            }`}
          >
            <Image src={deepLogo} alt="Deepseek Logo" width={40} height={40} />
          </div>

          <div
            className={`absolute text-xl font-bold transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {open && "Syntra AI"}
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-3 p-4">
          <MenuItem open={open} icon={<PlusCircle size={22} />} text="New Chat" />
          <MenuItem open={open} icon={<Search size={22} />} text="Search Chats" />
          <MenuItem open={open} icon={<Folder size={22} />} text="Projects" />
        </div>

        {/* Saved Chats */}
        <div className="flex flex-col gap-2 p-4">
          <ChatLabel title="Chat 1" open={open} />
          
        </div>

        {/* Bottom Profile Section */}
        <div className="p-4 border-t border-neutral-700 mt-auto">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center gap-3 hover:bg-neutral-700 px-2 py-2 rounded-lg transition-all cursor-pointer">
                <User size={22} />
                <span
                  className={`text-base font-medium transition-all duration-500 ${
                    open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                >
                  {open && "Login"}
                </span>
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-3">
              <UserButton afterSignOutUrl="/" />
              <span
                className={`text-base font-medium transition-all duration-500 ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
              >
                {open && "My Account"}
              </span>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, text, open }) {
  return (
    <button className="flex items-center gap-3 hover:bg-neutral-700 px-2 py-2 rounded-lg transition-all cursor-pointer">
      {icon}
      <span
        className={`text-base font-medium transition-all duration-500 ${
          open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
        }`}
      >
        {open && text}
      </span>
    </button>
  );
}
