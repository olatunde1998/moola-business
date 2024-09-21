"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import ContactInformation from "./ContactInformation";
import SignUpVerifyOTP from "./SignUpVerifyOTP";
import SignUpPassword from "./SignUpPassword";

export default function SignUpHome() {
  const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-[518.4px] rounded-lg mx-4 md:mx-0"
      >
        <div className="flex flex-col mx-auto px-4 md:items-center mt-10 md:mt-12 xl:mt-5 max-w-[440px] md:max-w-none">
          <div>
            <Image
              src="/images/moola-brand-logo-v2.png"
              width={100}
              height={100}
              alt="doctor pics"
              className="w-[63px] h-[53px] md:w-[70px] md:h-[70px]"
            />
          </div>
          <p className="text-[18px] font-bold text-white mt-2">
            Signup to Moola Business
          </p>
        </div>

        <div className="xl:w-[1024px] mx-auto">
          {activeStep === 1 && (
            <ContactInformation setActiveStep={setActiveStep} />
          )}
          {activeStep === 2 && (
            <SignUpVerifyOTP setActiveStep={setActiveStep} />
          )}
          {activeStep === 3 && <SignUpPassword setActiveStep={setActiveStep} />}
        </div>

        {/* ====== Don't have an account ======  */}
        <div className="mt-6 xl:mt-10 py-4  flex items-center justify-center text-center text-sm bg-[#E8E9EA4A] max-w-[370px] mx-auto px-2 rounded-lg text-white">
          <p>Already have an account?</p>
          <Link href="/" className="ml-2">
            Login
          </Link>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}
