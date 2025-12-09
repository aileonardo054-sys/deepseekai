"use client";

import { useState } from "react";
import { Send, Mic, ImageIcon } from "lucide-react";

export default function PromptBox() {
  const [input, setInput] = useState("");
  const isEmpty = input.trim().length === 0;

  return (
    <div className="w-full max-w-2xl mt-10 px-4">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-3 flex items-center gap-3 shadow-lg">

        {/* LEFT ICONS */}
        <button className="p-2 rounded-lg hover:bg-neutral-800 transition cursor-pointer">
          <ImageIcon size={20} />
        </button>

        <button className="p-2 rounded-lg hover:bg-neutral-800 transition cursor-pointer">
          <Mic size={20} />
        </button>

        {/* INPUT BOX */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a message..."
          className="flex-1 bg-transparent outline-none text-white placeholder-neutral-400 text-base"
        />

        {/* SEND BUTTON */}
        <button
          disabled={isEmpty}
          className={`p-2 rounded-lg transition-all cursor-pointer
            ${isEmpty ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:bg-neutral-800"}
          `}
        >
          <Send size={22} />
        </button>

      </div>
    </div>
  );
}
