"use client";

import clsx from "clsx";
import { randomBytes } from "crypto";
import { useState, useEffect } from "react";

const Barrage = () => {
  let init = [
    { id: "123", content: "hello" },
    { id: "124", content: "world" },
    { id: "125", content: "wisdom" },
    { id: "126", content: "panda" },
  ];

  const [barrages, setBarrages] = useState(init);

  // 随机出现在哪一行 1% 到 100% 5%一级
  const randomTop = () => {
    const min = 1;
    const max = 19;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber * 5 + "%";
  };
  // 随机持续时间
  const randomDuration = () => {
    return Math.floor(Math.random() * 6 + 20) + "s";
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full h-2/5 bg-black bg-opacity-40 absolute overflow-x-hidden z-50">
      {barrages.map((barrage) => (
        <div
          key={barrage.id}
          className={clsx(`
            absolute
            text-xl
            text-white
            font-semibold
            right-0
            translate-x-[100%]
            animate-[flow_20s_linear_infinite]
          `)}
          style={{ top: randomTop() }}
        >
          {barrage.content}
        </div>
      ))}
    </div>
  );
};

export default Barrage;
