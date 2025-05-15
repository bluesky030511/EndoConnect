"use client";

import { useRouter } from "next/navigation";
import React from "react";

const OnboardingPage = () => {
  const router = useRouter();

  const handleAgree = () => {
    router.push("/triage");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-[800px] overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-500 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to EndoConnect
          </h1>
          <p className="text-xl text-center opacity-90">
            We're here to help you understand your symptoms and learn more about gynecological health.
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Welcome Message */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              👋 Welcome Message
            </h2>
            <p className="text-gray-600 text-lg">
              "Estamos aqui para ajudar você a entender seus sintomas e aprender mais sobre a saúde ginecológica."
            </p>
          </section>

          {/* Glossary Section */}
          <section className="space-y-4 bg-blue-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              📖 Introductory Glossary
            </h2>
            <p className="text-gray-600">
              Throughout your journey, medical terms will be presented in accessible language to ensure better understanding.
              We believe in making healthcare information clear and approachable.
            </p>
          </section>

          {/* Consent Form */}
          <section className="border-2 border-blue-200 p-6 rounded-xl space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
              🔐 Scientific Consent Form
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Your data will be used anonymously and securely to support scientific research.
                You can revoke this consent at any time.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Key Points:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Your data is anonymized and protected</li>
                  <li>You can withdraw consent at any time</li>
                  <li>Research helps improve endometriosis understanding and care</li>
                  <li>Compliant with LGPD principles</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Action Button */}
          <div className="pt-4">
            <button
              onClick={handleAgree}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
            >
              Concordo e Quero Começar
            </button>
            <p className="text-center text-gray-500 mt-4 text-sm">
              By clicking "Agree", you accept our terms and consent to participate in the research
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
