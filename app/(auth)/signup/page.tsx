"use client";
import SignUpHome from "@/app/components/auth-components/signup/SignUpHome";
import SignUpHomeTwo from "@/app/components/auth-components/signup/SignUpHome";
import SignUpPassword from "@/app/components/auth-components/signup/SignUpPassword";
import SignUpPasswordTwo from "@/app/components/auth-components/signup/SignUpPasswordTwo";
import SignUpVerifyOTP from "@/app/components/auth-components/signup/SignUpVerifyOTP";
import SignUpVerifyOTPTwo from "@/app/components/auth-components/signup/SignUpVerifyOTPTwo";
import { useEffect, useState } from "react";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = "/images/moola-auth-bg.png";
    img.onload = () => setIsLoading(false);
  }, []);
  return (
    <div
      className={`absolute inset-0 bg-center bg-no-repeat bg-cover  text-[#1F4D36] md:flex justify-center h-screen overflow-y-scroll ${
        isLoading ? "bg-[#08592E]" : "bg-[url(/images/moola-auth-bg.png)]"
      }`}
    >
      <div className="md:flex justify-between">
        <SignUpHomeTwo />
      </div>

      {/* <div className="md:flex justify-between">
        <SignUpPassword />
        <SignUpPasswordTwo />
      </div> */}

      {/* <div className="md:flex justify-between">
        <SignUpVerifyOTP />
        <SignUpVerifyOTPTwo />
      </div> */}
    </div>
  );
}
