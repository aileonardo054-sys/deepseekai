'use client'

import Image from "next/image";
import { useState } from "react";
import chatIcon from "@/assets/logo_icon.svg";
import Sidebar from "./components/Sidebar";
import PromptBox from "./components/PromptBox"; 
import Message from "./components/Message";  // <-- IMPORT MESSAGE COMPONENT

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([
    { role: "user", content: "Hello AI, how are you?" },
    { role: "ai", content: "I am fine! How can I help you today?" },
  ]); // initial messages example
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-900 text-white relative">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-4 py-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 justify-center">
          <Image
            src={chatIcon}
            alt="logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <h1 className="text-4xl font-bold text-center">
            Hi, I am Syntra AI.
          </h1>
        </div>

        <p className="text-lg mt-1 text-center opacity-80 mb-6">
          How can I help you today?
        </p>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-3">
          {messages.map((msg, idx) => (
            <Message key={idx} role={msg.role} content={msg.content} />
          ))}
        </div>

        {/* Prompt Box */}
        <PromptBox />

        {/* Footer */}
        <footer className="text-sm opacity-30 text-center mt-4">
          Syntra AI can make mistakes, so please double-check.
        </footer>
      </div>
    </div>
  );
}
