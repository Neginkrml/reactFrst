import React, { useState } from "react";

export default function EscapeAndShow() {
  const [pos, setPos] = useState({ top: 200, left: 200 });
  const [showDiv, setShowDiv] = useState(false);

  const handleMouseEnter = () => {
    const btnWidth = 120;
    const btnHeight = 50;

    // Pencere genişlik ve yüksekliği alınıyor
    const maxLeft = window.innerWidth - btnWidth;
    const maxTop = window.innerHeight - btnHeight;

    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    setPos({ left: newLeft, top: newTop });
  };

  const handleSecondButtonClick = () => {
    setShowDiv(true);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-yellow-200 flex flex-col items-center pt-24 select-none">
      <h1 className="text-3xl font-bold mb-8 text-purple-700 drop-shadow-lg">
        HBD İhtiyar! 🎉
      </h1>

      {/* Kaçan Buton */}
      <button
        onMouseEnter={handleMouseEnter}
        style={{
          position: "fixed",
          top: pos.top,
          left: pos.left,
          width: 120,
          height: 50,
          zIndex: 1000,
        }}
        className="bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition-all cursor-pointer"
      >
        Zümra alzehimer
      </button>

      {/* Sakin Buton */}
      <button
        onClick={handleSecondButtonClick}
        className="mt-16 bg-green-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-green-600 transition cursor-pointer"
      >
        Balığım ama unutmadım!💌
      </button>

      {/* Sabit Yazı Div */}
      {showDiv && (
        <div className="mt-8 max-w-xl p-6 bg-white rounded-lg shadow-lg border-2 border-green-400 text-green-800 font-semibold text-lg">
          <p>
            🎉İyi ki doğdun Mızaffer hep Allah için işleseydin çalışasaydın🥳✨
          </p>
          <p className="mt-4">Büyüyünce Set ol inşallah</p>
          <p className="mt-4">Başarıların Daim bol içine sindiği gibi olsun</p>
          <p className="mt-4">
            Hastayız ve kolumuz sakat efenim bizden süs püs bu seferlik anca bu
            kadar
          </p>
        </div>
      )}
    </div>
  );
}
