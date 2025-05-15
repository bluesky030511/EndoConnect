"use client";

import { useRouter } from "next/navigation";
import React from "react";

const AgreeCard = () => {
  const router = useRouter();

  const handleAgree = () => {
    router.push("/triage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="bg-white rounded-lg shadow-md w-full max-w-[600px]">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6 text-black text-center">
            Welcome to EndoConnect
          </h2>
          <p className="text-gray-600 mb-4">
            We're here to help you understand your symptoms and learn more about
            gynecological health.
          </p>
          <h3 className="text-2xl font-normal mb-2 text-black">
            Glossary
          </h3>
          <p className="text-gray-600 mb-6">
            To make it easier for you to understand, <br/>We provide explanations in accessible language for medical terms.
          </p>
          <div className="border-2 p-6 rounded-3xl">
            <h3 className="text-2xl font-normal mb-2 text-black">Scientific Consent Form</h3>
            <p className="text-gray-600 mb-6">Your data will be used for scientific research, with guaranteed privacy and anonymity.</p>
          </div>
        </div>
        
        <div className="px-6 pb-6">
          <button
            onClick={handleAgree}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-4 px-4 rounded-md transition-colors"
          >
            I agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgreeCard;
