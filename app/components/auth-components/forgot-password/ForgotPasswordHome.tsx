"use client";
import { ToastContainer } from "react-toastify";
import VerifyEmail from "./VerifyEmail";
import ChangePassword from "./ChangePassword";
import VerifyOTP from "./VerifyOTP";
import { useState } from "react";
import Stepper from "./Stepper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ForgotPasswordHome() {
  const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:flex mx-auto justify-between items-center xl:px-32 px-4 pb-6 pt-24 md:pt-8 max-w-[440px] md:max-w-none"
      >
        <div>
          <Image
            src="/images/moola-brand-logo-v3.png"
            width={100}
            height={100}
            alt="Moola Brand Logo"
            className="w-[148px] h-[28px] md:w-[190px] md:h-[35px]"
          />
        </div>
        <div className="flex items-center">
          <p className="text-sm">Already have an account?</p>
          <Link href="/" className="ml-2 font-bold text-[#12CC68]">
            Login
          </Link>
        </div>
      </motion.div>
      <div className="md:mt-16 xl:mt-24 md:flex justify-between xl:w-[1024px] items-center mx-auto">
        <div className="hidden md:block">
          <Stepper activeStep={activeStep} />
        </div>
        {activeStep === 1 && <VerifyEmail setActiveStep={setActiveStep} />}
        {activeStep === 2 && <VerifyOTP setActiveStep={setActiveStep} />}
        {activeStep === 3 && <ChangePassword setActiveStep={setActiveStep} />}
      </div>
      <ToastContainer />
    </>
  );
}
