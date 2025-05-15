"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Module {
  id: number;
  title: string;
  description: string;
  readingTime: number;
  progress: number;
}

const TrailPage = () => {
  const router = useRouter();
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules: Module[] = [
    {
      id: 1,
      title: "O que é endometriose?",
      description: "Entenda o que acontece no seu corpo e como essa condição pode se manifestar.",
      readingTime: 15,
      progress: 0
    },
    {
      id: 2,
      title: "Como lidar com a dor pélvica crônica?",
      description: "Orientações práticas e estratégias de autocuidado.",
      readingTime: 20,
      progress: 0
    },
    {
      id: 3,
      title: "Saúde mental e endometriose",
      description: "Impactos emocionais, ansiedade e como buscar suporte.",
      readingTime: 18,
      progress: 0
    },
    {
      id: 4,
      title: "Nutrição e estilo de vida anti-inflamatório",
      description: "Como a alimentação e os hábitos cotidianos influenciam na dor.",
      readingTime: 25,
      progress: 0
    }
  ];

  const totalProgress = Math.round(
    (modules.reduce((acc, module) => acc + module.progress, 0) / (modules.length * 100)) * 100
  );

  const handleStartModule = (moduleId: number) => {
    setSelectedModule(moduleId);
    // Here you would navigate to the specific module content
    router.push(`/trail/module/${moduleId}`);
  };

  const handleCustomTrail = () => {
    // Here you would navigate to the custom trail builder
    router.push("/trail/custom");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      <div className="max-w-[800px] mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Sua Trilha Personalizada
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Criamos uma trilha com conteúdos pensados especialmente para o seu perfil.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progresso geral</span>
              <span>{totalProgress}%</span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-4">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{module.id}</span>
                </div>
                <div className="flex-grow space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {module.title}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {module.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      ⏱️ {module.readingTime} minutos de leitura
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-gray-500">
                        {module.progress}%
                      </div>
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 transition-all duration-300"
                          style={{ width: `${module.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => handleStartModule(1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
          >
            Iniciar Módulo 1
          </button>
          <button
            onClick={handleCustomTrail}
            className="w-full bg-white hover:bg-gray-50 text-blue-500 font-semibold py-4 px-6 rounded-xl border-2 border-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
          >
            Quero montar minha própria trilha
          </button>
          
          {/* Feedback Button */}
          <div className="pt-8 border-t-2 border-gray-100">
            <button
              onClick={() => router.push("/feedback")}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
            >
              ⭐ Avaliar minha experiência
            </button>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Sua opinião é muito importante para continuarmos melhorando
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailPage; 