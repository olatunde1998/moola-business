"use client";
// import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

type ContactInformationProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email(" Invalid Email format"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .min(6, "Phone Number must be at least 6 characters")
    .max(20, "Phone Number must not exceed 15 characters"),
});

export default function ContactInformation({
  setActiveStep,
}: ContactInformationProps) {
  // const [isLoading, setIsLoading] = useState(false);

  // REACT HOOK FORM LOGIC
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Watch email and phoneNumber values
  // const email = watch("email");
  // const phoneNumber = watch("phoneNumber");
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
                <p className="text-[#B6BABD]">
                  Enter your contact information to get started
                </p>
              </div>
              <div className="bg-[#E8FFF3] rounded-full w-fit p-3 text-[#B6BABD]">
                <span className="text-[#12CC68] font-semibold">1</span>/
                <span>3</span>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              {/* =======     Phone Number ======== */}
              <div className="mt-4 relative">
                <div>
                  <label htmlFor="phone number" className="font-bold">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    {...register("phoneNumber")}
                    maxLength={20}
                    className="border-[1.5px] border-gray-200 pr-12 pl-3 py-4 focus:outline-none placeholder:text-sm cursor-text flex justify-between rounded-lg w-full"
                  />
                </div>
              </div>

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

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // disabled={isLoading || code.some((digit) => !digit)}
                onClick={() => setActiveStep(2)}
                className="
                  cursor-pointer bg-[#12CC68] transition duration-500 ease-in-out px-8 py-4 mt-6 text-[16px] text-white rounded-lg w-full"
              >
                Proceed
              </motion.button>

              {/* <motion.button
                disabled={isLoading}
                className={`${
                  errors.email || errors.phoneNumber || !email || !phoneNumber
                    ? "cursor-not-allowed bg-[#E8E9EA]"
                    : "cursor-pointer bg-[#1F4D36] transition duration-500 ease-in-out hover:shadow-[0_0_20px_rgba(31,77,54,0.7)] hover:brightness-150"
                } px-8 py-4 mt-8 text-[16px] text-white rounded-lg w-full`}
              >
                Proceed
              </motion.button> */}
            </form>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </>
  );
}
