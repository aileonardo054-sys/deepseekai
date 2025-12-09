import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "Syntera AI",
  description: "Syntera AI is an advanced intelligent assistant designed to deliver fast, accurate and human-like responses. It combines deep knowledge, smart reasoning and real-time insights to help users with coding, problem-solving, content creation, learning and daily tasks. Built for powerful performance and a smooth user experience, Syntera AI offers a modern interface, lightning-fast replies and next-generation AI capabilities.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        >
        {children}
      </body>
    </html>
        </ClerkProvider>
  );
}
