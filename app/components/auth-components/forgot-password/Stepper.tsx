import { Circle } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

export default function Stepper({ activeStep }) {
  const steps = [
    { title: "Confirm your Email or Phone number" },
    { title: "Verify your information (OTP)" },
    { title: "Change Password" },
  ];

  return (
    <div className="max-w-[600px] mx-auto px-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[#141F29] font-semibold text-lg">
            Forgot Password
          </h2>
          <p className="text-[#B6BABD] text-sm">
            Follow the step below to recover your account password
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={` ${
              activeStep > index ? "completed" : ""
            } flex items-center gap-2.5 relative  mt-10`}
          >
            <div className="flex items-center justify-center">
              {activeStep > index ? (
                <FaCheckCircle size={24} color="#12CC68" />
              ) : (
                <Circle size={24} color="#B6BABD" />
              )}
            </div>
            <div className="flex-grow">
              <p className="text-gray-500">{`Step ${index + 1}`}</p>
              <p className="font-semibold text-[#141F29]">{step.title}</p>
            </div>
            {/* Step line using inline styles since Tailwind doesn't handle :after */}
            {index !== steps.length - 1 && (
              <div
                style={{
                  content: '""',
                  position: "absolute",
                  left: "12px",
                  top: "45px",
                  bottom: "-20px",
                  width: "2px",
                  height:"72px",
                  background:
                    "repeating-linear-gradient(to bottom, #B6BABD 0, #B6BABD 5px, transparent 5px, transparent 10px)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
