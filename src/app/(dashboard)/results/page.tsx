"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ResultsPage = () => {
  const router = useRouter();
  const [feedbackGiven, setFeedbackGiven] = useState<boolean | null>(null);

  const handleFeedback = (isHelpful: boolean) => {
    setFeedbackGiven(isHelpful);
    // Here you can add logic to send feedback to your backend
    
    // After a short delay, show the detailed feedback page
    setTimeout(() => {
      router.push("/feedback");
    }, 1000);
  };

  const handleProfessionalSupport = () => {
    // Here you would handle the professional support request
    window.open("https://endoconnect.com/professional-support", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-[800px] overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-500 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Resultado da Triagem
          </h1>
          <p className="text-xl text-center opacity-90">
            Análise preliminar dos seus sintomas
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Result Message */}
          <section className="bg-blue-50 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Resultado Preliminar
            </h2>
            <p className="text-gray-700 text-lg">
              Com base em suas respostas, você pode estar enfrentando sintomas compatíveis com endometriose.
            </p>
          </section>

          {/* Educational Trail Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Trilha Educativa Recomendada
            </h2>
            
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-gray-800">
                    Módulo 1 – O que é endometriose?
                  </h3>
                  <p className="text-gray-600">
                    Conheça mais sobre a condição, seus sintomas e como ela pode afetar sua qualidade de vida.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Group Section */}
          <section className="bg-purple-50 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Grupo de Apoio
            </h2>
            <p className="text-gray-700">
              Participe do nosso grupo de apoio para compartilhar experiências e encontrar suporte com outras pessoas que enfrentam desafios semelhantes.
            </p>
            <button
              onClick={() => router.push("/support-group")}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Conhecer o Grupo de Apoio
            </button>
          </section>

          {/* Feedback Section */}
          <section className="bg-gray-50 rounded-xl p-6 space-y-4">
            <h3 className="font-medium text-gray-800">
              Essa resposta foi útil?
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => handleFeedback(true)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  feedbackGiven === true
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                Sim
              </button>
              <button
                onClick={() => handleFeedback(false)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  feedbackGiven === false
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                Não
              </button>
            </div>
            {feedbackGiven !== null && (
              <p className="text-sm text-gray-500 animate-fade-in">
                Obrigado pelo feedback! Você será redirecionada para uma página de avaliação detalhada.
              </p>
            )}
          </section>

          {/* Professional Support Link */}
          <div className="text-center">
            <button
              onClick={handleProfessionalSupport}
              className="text-blue-500 hover:text-blue-600 transition-colors underline"
            >
              Falar com profissional de saúde
            </button>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button
              onClick={() => router.push("/trail")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
            >
              Ir para Trilha
            </button>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Conteúdo personalizado baseado no seu perfil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
