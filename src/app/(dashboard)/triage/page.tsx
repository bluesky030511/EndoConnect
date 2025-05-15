"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TriagePage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const router = useRouter();

  const options = [
    "Raramente",
    "Às vezes",
    "Frequentemente",
    "Sempre",
    "Prefiro não responder"
  ];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    router.push("/results");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-[800px] overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-500 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Triagem Digital
          </h1>
          <p className="text-xl text-center opacity-90">
            Vamos começar a entender seus sintomas com algumas perguntas simples
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Questions Section */}
          <div className="space-y-12">
            {/* First Question */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                1. Com que frequência você sente dor pélvica?
              </h2>
              <div className="space-y-4">
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center p-4 space-x-3 cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
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
            </section>

            {/* Second Question */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                2. Onde a dor se localiza?
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="border-2 border-blue-200 rounded-xl aspect-[4/3] w-full max-w-[400px] mx-auto bg-white relative">
                  {/* Placeholder for the interactive body map */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Clique ou toque para indicar a área da dor
                  </div>
                </div>
                <p className="text-center text-gray-500 mt-4">
                  Toque ou clique na imagem para marcar as áreas onde sente dor
                </p>
              </div>
            </section>
          </div>

          {/* Action Button */}
          <div className="pt-8">
            <button
              onClick={handleNext}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
            >
              Próximo
            </button>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Suas respostas nos ajudarão a personalizar sua experiência
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriagePage;
