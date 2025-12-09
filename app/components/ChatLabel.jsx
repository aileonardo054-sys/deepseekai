import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Edit2, Trash2 } from "lucide-react";

const ChatLabel = ({ title = "New Chat", open }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!open) return null;

  return (
    <div className="group flex items-center justify-between px-3 py-2 hover:bg-neutral-700 cursor-pointer transition-all duration-200 relative rounded-md">
      {/* Chat Title */}
      <p className="text-sm text-neutral-200 font-medium truncate">{title}</p>

      {/* 3-dot menu button */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenu(!openMenu);
          }}
          className="text-neutral-400 hover:text-white transition-opacity opacity-0 group-hover:opacity-100"
        >
          <MoreVertical size={18} />
        </button>

        {/* Dropdown Menu → show on hover OR click */}
        {(openMenu) && (
          <div className="absolute right-0 top-6 w-40 bg-neutral-900 border border-neutral-700 shadow-lg rounded-lg overflow-hidden transition-all duration-200 z-50">
            <button className="w-full flex items-center gap-2 px-3 py-2 text-neutral-200 hover:bg-neutral-800 transition">
              <Edit2 size={16} /> Edit
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-red-500 hover:bg-neutral-800 transition">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLabel;
