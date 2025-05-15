"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FeedbackPage = () => {
  const router = useRouter();
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState("");
  const [preferences, setPreferences] = useState({
    newContent: false,
    research: false,
    interviews: false,
  });
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleSubmit = () => {
    // Here you would handle the feedback submission
    // For now, we'll just redirect to the home page
    router.push("/");
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 p-6">
      <div className="max-w-[800px] mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Sua Avaliação
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Ajude-nos a melhorar sua experiência no EndoConnect
          </p>
        </div>

        {/* Rating Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              🌟 Como você avalia sua experiência com o EndoConnect até agora?
            </h2>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className="text-4xl transition-transform hover:scale-110 focus:outline-none"
                >
                  {star <= (hoverRating || rating) ? "⭐" : "⭒"}
                </button>
              ))}
            </div>
          </section>

          {/* Comment Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              💬 Deseja deixar algum comentário, sugestão ou relato?
            </h2>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={500}
              placeholder="Seu feedback é muito importante para nós..."
              className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
            />
            <p className="text-right text-sm text-gray-500">
              {comment.length}/500 caracteres
            </p>
          </section>

          {/* Preferences Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              📌 Preferências Futuras
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  checked={preferences.newContent}
                  onChange={() => handlePreferenceChange("newContent")}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  Desejo ser avisada sobre novos conteúdos
                </span>
              </label>
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  checked={preferences.research}
                  onChange={() => handlePreferenceChange("research")}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  Gostaria de participar de estudos científicos
                </span>
              </label>
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  checked={preferences.interviews}
                  onChange={() => handlePreferenceChange("interviews")}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700">
                  Aceito ser convidada para entrevistas ou grupos focais
                </span>
              </label>
            </div>
          </section>
        </div>

        {/* Submit Button */}
        <div className="space-y-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
          >
            Enviar Avaliação
          </button>
          <p className="text-center text-gray-500 text-sm">
            Sua opinião é muito importante para continuarmos melhorando
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage; 