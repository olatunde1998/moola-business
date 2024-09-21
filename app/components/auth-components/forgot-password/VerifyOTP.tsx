"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { formatTime } from "@/utils/utils";

type VerifyOTPProps = {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function VerifyOTP({ setActiveStep }: VerifyOTPProps) {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(59);

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      // Focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;

      // Check if the inputRef is not null before focusing
      if (inputRefs.current[focusIndex]) {
        inputRefs.current[focusIndex]!.focus();
      }
    } else {
      newCode[index] = value;
      setCode(newCode);

      // Move focus to the next input field if value is entered
      if (value && index < 5) {
        if (inputRefs.current[index + 1]) {
          inputRefs.current[index + 1]!.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = useCallback(
    async (e?: React.FormEvent<HTMLFormElement>) => {
      e?.preventDefault();
      const verificationCode = code.join("");
      console.log(verificationCode, "this is the code");
      // const body = {
      //   code: verificationCode,
      // };
      try {
        // const response = await VerifyEmailRequest(body);
        toast.success("otp verified");
        // setTimeout(() => {
        //   setIsLoading(false);
        //   //   router.push("/");
        // }, 3000);
      } catch (error) {
        console.log(error);
      }
    },
    [code]
  );

  // Auto submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit();
    }
  }, [code, handleSubmit]);

  // Countdown timer logic
  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (minutes === 0 && seconds === 0) {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown); // Clear the interval on unmount
  }, [minutes, seconds]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-[518.4px] rounded-lg mx-4 md:mx-0"
      >
        <div className="bg-[#FFFFFF] max-w-[440px] md:max-w-[480px] mx-auto md:px-2 lg:px-8 py-10 rounded-lg">
          <div className="max-w-[438px] mx-auto px-4 lg:px-0">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-[#141F29] fon font-semibold">
                  Verify your information
                </p>
                <p className="text-[#B6BABD]">
                  Enter the 6-digit OTP sent to your phone number or email
                  address.
                </p>
              </div>
              <div className="bg-[#E8FFF3] rounded-full w-fit p-3 text-[#B6BABD] md:hidden">
                <span className="text-[#12CC68] font-semibold">2</span>/
                <span>3</span>
              </div>
            </div>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              {/* =======Verification Code ===== */}
              <div className="mt-4 flex justify-between gap-1 md:gap-2 overflow-scroll">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={6}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 md:w-14 md:h-14 text-2xl text-center md:text-5xl font-semibold text-black border-2 border-gray-200 px-3 py-2.5 focus:outline-none placeholder:text-sm cursor-text flex justify-between rounded-lg"
                  />
                ))}
              </div>
              <p className="mt-6 text-center text-[#ABABAB]">
                Resend in:{" "}
                <span className="text-black">
                  {formatTime(minutes)}:{formatTime(seconds)}
                </span>
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // disabled={isLoading || code.some((digit) => !digit)}
                onClick={() => setActiveStep(3)}
                className="
                  cursor-pointer bg-[#12CC68] transition duration-500 ease-in-out px-8 py-4 mt-6 text-[16px] text-white rounded-lg w-full"
              >
                Proceed
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}
