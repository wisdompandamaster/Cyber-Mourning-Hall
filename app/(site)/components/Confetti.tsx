"use client";

import confetti from "canvas-confetti";
import { PiConfettiFill } from "react-icons/pi";

const Confetti = () => {
  let colors = ["#00000", "#ffffff"];
  var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["circle"],
    colors: ["#00000", "#ffffff"],
  };
  // let end = Date.now() + 15 * 1000;

  function frame() {
    // 星星礼花
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["circle"],
    });
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
    // 两边礼花
    confetti({
      particleCount: 30,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });
    // 中心随机方向礼花
    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
      colors: colors,
    });
  }
  return (
    <div
      onClick={() => {
        frame();
      }}
      className="
          fixed
          bottom-8
          right-8
          w-14
          h-14
          rounded-lg
          bg-white
          bg-opacity-60
          p-3
          flex
          items-center
          select-none
          hover:bg-opacity-80
          duration-300
        "
    >
      <PiConfettiFill size={50} />
    </div>
  );
};

export default Confetti;
