"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-[600px] w-full space-y-6"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

const SupportGroupPage = () => {
  const router = useRouter();
  const [showRules, setShowRules] = useState(false);
  const [question, setQuestion] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleJoinGroup = () => {
    if (!showRules) {
      setShowRules(true);
      return;
    }
    // Here you would handle the group registration
    router.push("/support-group/calendar");
  };

  const handleCalendarView = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/support-group/calendar");
  };

  const handleFeedback = () => {
    router.push("/feedback");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      <div className="max-w-[800px] mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Círculo Endo
          </h1>
          <h2 className="text-2xl text-gray-600 text-center mb-2">
            Conversas sobre Dor, Saúde e Coragem
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 text-center">
            Um espaço seguro para compartilhar experiências e encontrar apoio
          </p>
        </div>

        {/* Group Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Dinâmica dos Encontros
            </h3>
            <p className="text-gray-600 text-lg">
              Encontros digitais semanais com mediação profissional e foco em acolhimento, 
              escuta ativa, saúde mental e autocuidado.
            </p>
          </section>

          <section className="bg-blue-50 rounded-xl p-6 space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              Aviso Importante
            </h3>
            <p className="text-gray-600">
              Este grupo não substitui consulta médica ou psicológica. 
              É um espaço de apoio emocional e troca segura.
            </p>
          </section>

          {/* Question Input */}
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Tem alguma pergunta ou tópico de interesse?
            </h3>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Compartilhe suas dúvidas ou temas que gostaria de discutir no grupo..."
              className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
            />
          </section>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleJoinGroup}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
          >
            Quero participar do grupo
          </button>
          <button
            onClick={handleCalendarView}
            className="w-full bg-white hover:bg-gray-50 text-blue-500 font-semibold py-4 px-6 rounded-xl border-2 border-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Ver datas e horários disponíveis
          </button>
          
          {/* Feedback Button */}
          <div className="pt-8 border-t-2 border-gray-100">
            <button
              onClick={handleFeedback}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Avaliar minha experiência
            </button>
          </div>
        </div>

        {/* Rules Modal */}
        {mounted && showRules && (
          <Modal onClose={() => setShowRules(false)}>
            <h3 className="text-2xl font-semibold text-gray-800">
              Regras de Convivência e Privacidade
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">1. Respeito Mútuo</h4>
                <p className="text-gray-600">
                  Todas as experiências e opiniões compartilhadas devem ser respeitadas.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">2. Confidencialidade</h4>
                <p className="text-gray-600">
                  O que é compartilhado no grupo permanece no grupo.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">3. Participação</h4>
                <p className="text-gray-600">
                  Você pode participar como se sentir confortável - falando ou apenas ouvindo.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800">4. Compromisso</h4>
                <p className="text-gray-600">
                  Procure ser pontual e avisar caso não possa comparecer.
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setShowRules(false)}
                className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={handleJoinGroup}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                Concordo e quero participar
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SupportGroupPage; 