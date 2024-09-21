"use client";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

type SignUpPasswordProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must not exceed 15 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .min(6, "Confirm Password must be at least 6 characters")
    .max(32, "Confirm Password must not exceed 15 characters"),
});

export default function SignUpPassword({ setActiveStep }: SignUpPasswordProps) {
  // const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // REACT HOOK FORM LOGIC
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Watch confirmPassword and phoneNumber values
  // const password = watch("password");
  // const confirmPassword = watch("confirmPassword");

  // Handle Login Form Submission LOGIC
  const onSubmitHandler = async () => {
    // setIsLoading(true);
    toast.success("Signup Successful");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-[518.4px] rounded-lg mx-4 md:mx-0"
      >
        <div className="bg-white max-w-[440px] md:max-w-[480px] mx-auto md:px-2 lg:px-8  mt-6  py-10 rounded-lg">
          <div className="max-w-[438px] mx-auto px-4 lg:px-0">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-[16px]">
                  Setup your account profile
                </p>
                <p className="text-[#B6BABD]">Enter your account password</p>
              </div>
              <div className="bg-[#E8FFF3] rounded-full w-fit p-3 text-[#B6BABD]">
                <span className="text-[#12CC68] font-semibold">2</span>/
                <span>3</span>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
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

              {/* =======  Confirm Password ======== */}
              <div className="mt-4 relative">
                <div>
                  <label htmlFor="password" className="font-bold">
                    Confirm Password
                  </label>
                  <input
                    type={`${showConfirmPassword ? "text" : "password"}`}
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                    maxLength={32}
                    className="border-[1.5px] border-gray-200 pr-12 pl-3 py-4 focus:outline-none placeholder:text-sm cursor-text flex justify-between rounded-lg w-full"
                  />
                </div>
                <span
                  className="absolute cursor-pointer bottom-4 right-2 pt-4 flex items-center mr-[0.25rem] text-[#FF8447]"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <BiHide
                    size={24}
                    className={
                      showConfirmPassword === false
                        ? "hidden items-center cursor-pointer"
                        : "text-gray-500"
                    }
                  />
                  <BiShow
                    size={24}
                    className={
                      showConfirmPassword === true
                        ? "hidden items-center cursor-pointer"
                        : "text-gray-500"
                    }
                  />
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // disabled={isLoading || code.some((digit) => !digit)}
                onClick={() => setActiveStep(1)}
                className="
                  cursor-pointer bg-[#12CC68] transition duration-500 ease-in-out px-8 py-4 mt-6 text-[16px] text-white rounded-lg w-full"
              >
                Proceed
              </motion.button>

              {/* <button
                disabled={isLoading}
                className={`${
                  errors.confirmPassword ||
                  errors.password ||
                  !confirmPassword ||
                  !password
                    ? "cursor-not-allowed bg-[#E8E9EA]"
                    : "cursor-pointer bg-[#1F4D36] transition duration-500 ease-in-out hover:shadow-[0_0_20px_rgba(31,77,54,0.7)] hover:brightness-150"
                } px-8 py-4 mt-8 text-[16px] text-white rounded-lg w-full`}
              >
                Proceed
              </button> */}
            </form>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}
