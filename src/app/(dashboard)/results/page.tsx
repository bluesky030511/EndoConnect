"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ResultsPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="bg-white rounded-lg shadow-md w-full max-w-[600px]">
        <div className="p-6 space-y-8">
          <h2 className="text-3xl font-bold text-center text-black">
            Screening Result
          </h2>

          {/* Result Message */}
          <div className="bg-gray-300 rounded-lg p-4">
            <p className="text-gray-700">
              Based on your answers, you may be experiencing the symptoms of
              endometriosis.
            </p>
          </div>

          {/* Educational Trail Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-black">
              Recommended Educational Trail
            </h3>

            <div className="border rounded-lg p-4 flex items-center space-x-4 text-gray-700">
              <div className="w-12 h-12 flex items-center justify-center border rounded-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">What is endometha?</h4>
                <p className="text-gray-600">
                  Introductory text on the condition and its impact
                </p>
              </div>
            </div>
          </div>

          {/* Go to Trail Button */}
          <button
            onClick={() => router.push("/trail")}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-medium py-4 px-4 rounded-lg transition-colors"
          >
            Go to Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
