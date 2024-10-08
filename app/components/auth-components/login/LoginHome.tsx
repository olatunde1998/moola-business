"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { BiHide, BiShow } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email(" Invalid Email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must not exceed 15 characters"),
});

export default function LoginHome() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // REACT HOOK FORM LOGIC
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Watch email and password values
  // const email = watch("email");
  // const password = watch("password");
  // Handle Login Form Submission LOGIC
  const onSubmitHandler = async () => {
    setIsLoading(true);
    toast.success("Login Successful");

  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-[50%] xl:w-[518.4px] rounded-lg mx-4 md:mx-0"
      >
        <div className="bg-white max-w-[440px] md:max-w-[480px] mx-auto md:px-2 lg:px-8 h-[500px] mt-10 md:mt-12 xl:mt-16 pt-10 rounded-lg">
          <div className="max-w-[438px] mx-auto px-4 lg:px-0">
            <div>
              <Image
                src="/images/moola-brand-logo.png"
                width={100}
                height={100}
                alt="doctor pics"
                className="w-[70px] h-[70px]"
              />
            </div>
            <p className="text-[18px] font-bold">
              Login to your Moola Business
            </p>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              {/* =======Email ===== */}
              <div className="mt-4">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                  maxLength={40}
                  className="border-[1.5px] border-gray-200 px-3 py-4 focus:outline-none placeholder:text-sm cursor-text flex justify-between rounded-lg w-full"
                />
              </div>

              {/* =======  Password ======== */}
              <div className="mt-4 relative">
                <div>
                  <label htmlFor="password" className="font-bold">
                    Password
                  </label>
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Password"
                    {...register("password")}
                    maxLength={32}
                    className="border-[1.5px] border-gray-200 pr-12 pl-3 py-4 focus:outline-none placeholder:text-sm cursor-text flex justify-between rounded-lg w-full"
                  />
                </div>
                <span
                  className="absolute cursor-pointer bottom-4 right-2 pt-4 flex items-center mr-[0.25rem] text-[#FF8447]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <BiHide
                    size={24}
                    className={
                      showPassword === false
                        ? "hidden items-center cursor-pointer"
                        : "text-gray-500"
                    }
                  />
                  <BiShow
                    size={24}
                    className={
                      showPassword === true
                        ? "hidden items-center cursor-pointer"
                        : "text-gray-500"
                    }
                  />
                </span>
              </div>
              {/* ====Forget Password ===== */}
              <Link
                href="/forgot-password"
                className="ml-4 mt-2 hover:underline block text-md text-right text-[#12CC68]"
              >
                Forgot Password?
              </Link>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  cursor-pointer bg-[#12CC68] transition duration-500 ease-in-out px-8 py-4 mt-6 text-[16px] text-white rounded-lg w-full"
              >
                {isLoading ? "Authenticating...." : "Login"}
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className={`${
                  errors.email || errors.password || !email || !password
                    ? "cursor-not-allowed bg-[#E8E9EA]"
                    : "cursor-pointer bg-[#1F4D36] transition duration-500 ease-in-out hover:shadow-[0_0_20px_rgba(31,77,54,0.7)] hover:brightness-150"
                } px-8 py-4 mt-4 text-[16px] text-white rounded-lg w-full`}
              >
                {isLoading ? "Authenticating...." : "Login"}
              </motion.button> */}
            </form>
          </div>
        </div>
        {/* ====== Don't have an account ======  */}
        <div className="mt-6 xl:mt-10 py-4  flex items-center justify-center text-center text-sm bg-[#E8E9EA4A] max-w-[370px] mx-auto px-2 rounded-lg text-white">
          <p>New to Moola Business?</p>
          <Link href="/signup" className="ml-2">
            Sign up
          </Link>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}
