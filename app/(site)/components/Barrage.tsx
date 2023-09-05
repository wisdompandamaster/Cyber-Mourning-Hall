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
    { id: "127", content: "hello" },
    { id: "128", content: "world" },
    { id: "129", content: "wisdompandamaster" },
    { id: "130", content: "panda" },
    { id: "131", content: "hello" },
    { id: "132", content: "world" },
    { id: "133", content: "wisdom" },
    { id: "134", content: "panda" },
  ];

  const [barrages, setBarrages] = useState(init);

  // 随机出现在哪一行 0% 到 90%  6% 为一级,一共 15 行
  const randomTop = () => {
    const min = 0;
    const max = 15;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber * 6 + "%";
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
