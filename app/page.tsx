"use client";
import LoginHome from "@/app/components/auth-components/login/LoginHome";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = "/images/moola-auth-bg.png";
    img.onload = () => setIsLoading(false);
  }, []);
  return (
    <div
      className={`absolute inset-0 bg-center bg-no-repeat bg-cover  text-[#1F4D36] md:flex justify-center h-screen overflow-y-hidden ${
        isLoading ? "bg-[#08592E]" : "bg-[url(/images/moola-auth-bg.png)]"
      }`}
    >
      <LoginHome />
    </div>
  );
}
