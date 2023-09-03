"use client";

import React, { useState } from "react";

const BottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e: any) => {
    const y = e.clientY;
    const windowHeight = window.innerHeight;
    const threshold = 200;
    setIsVisible(y > windowHeight - threshold);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      onMouseMove={handleMouseMove}
    >
      <p>This is a bottom bar.</p>
    </div>
  );
};

export default BottomBar;
