"use client";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

type VerifyEmailProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

// const schema = yup.object().shape({
//   email: yup
//     .string()
//     .required("Email is required")
//     .email(" Invalid Email format"),
// });

export default function VerifyEmail({ setActiveStep }: VerifyEmailProps) {
  //   const [isLoading, setIsLoading] = useState(false);

  // REACT HOOK FORM LOGIC
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({ resolver: yupResolver(schema) });

  // Handle Login Form Submission LOGIC
  //   const onSubmitHandler = async () => {
  //     setIsLoading(true);
  //     toast.success("Forgot Password Successful");
  //   };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-[518.4px] rounded-lg mx-4 md:mx-0"
      >
        <div className="bg-[#FFFFFF] max-w-[440px] md:max-w-[480px] mx-auto md:px-2 lg:px-8 py-16 rounded-lg">
          <div className="max-w-[438px] mx-auto px-4 lg:px-0">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-[#141F29] fon font-semibold">
                  Confirm your Email or Phone number
                </p>
                <p className="text-[#B6BABD]">Let get you started</p>
              </div>
              <div className="bg-[#E8FFF3] rounded-full w-fit p-3 text-[#B6BABD] md:hidden">
                <span className="text-[#12CC68] font-semibold">1</span>/
                <span>3</span>
              </div>
            </div>
            {/* <form onSubmit={handleSubmit(onSubmitHandler)}> */}
            <form>
              {/* =======Email ===== */}
              <div className="mt-4">
                <label htmlFor="email" className="font-bold">
                  Email or Phone number
                </label>
                <input
                  type="email"
                  placeholder="Email or Phone number"
                  //   {...register("email")}
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // disabled={isLoading}
                onClick={() => setActiveStep(2)}
                className="cursor-pointer bg-[#E8E9EA] transition duration-500 ease-in-out
                px-8 py-4 mt-8 text-[16px] text-white rounded-lg w-full"
              >
                Proceed
              </motion.button> */}
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}
