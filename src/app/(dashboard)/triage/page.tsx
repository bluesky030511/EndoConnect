"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const QuestionsPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const router = useRouter();

  const options = ["Rarely", "Sometimes", "Often", "Always"];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    router.push("/results");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="bg-white rounded-lg shadow-md w-full max-w-[600px]">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6 text-black text-center">
            Digital Screening
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Please answer the following questions for the initial assessment.
          </p>

          <div className="space-y-8">
            {/* First Question */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                1. How often do you experience pelvic pain?
              </h3>
              <div className="space-y-4">
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="painFrequency"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                      className="h-5 w-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 text-lg">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Second Question */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                2. Where is the pain located?
              </h3>
              <div className="border-2 border-gray-300 rounded-md aspect-video w-full max-w-[300px] mx-auto">
                {/* Empty square for pain location */}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={handleNext}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 px-4 rounded-md transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
