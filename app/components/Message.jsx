"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";

const Message = ({ content, role = "user" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // copied tooltip hide
  };

  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}
    >
      <div
        className={`
          relative max-w-[80%] p-3 rounded-lg
          ${isUser ? "bg-blue-600 text-white rounded-br-none" : "bg-neutral-700 text-white rounded-bl-none"}
        `}
      >
        {/* Message Text */}
        <p className="whitespace-pre-wrap">{content}</p>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-1 right-1 text-neutral-300 hover:text-white p-1"
        >
          <Copy size={16} />
        </button>

        {/* Copied Tooltip */}
        {copied && (
          <span className="absolute -top-5 right-1 text-xs text-green-400">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
};

export default Message;
