"use client";

import clsx from "clsx";
import { randomBytes } from "crypto";
import { useState, useEffect, TimeHTMLAttributes } from "react";
import Bullet from "./Bullet";
import { MdOutlineCommentsDisabled, MdOutlineComment } from "react-icons/md";
import InputWord from "./InputWord";
import { MouringWord } from "@prisma/client";

interface BarrageProps {
  mourningWords: MouringWord[];
}

const Barrage: React.FC<BarrageProps> = ({ mourningWords }) => {
  const [barrages, setBarrages] = useState(mourningWords);
  const [showWall, setShowWall] = useState(true);

  // 随机出现在哪一行 0% 到 90%  6% 为一级,一共 15 行
  const randomTop = () => {
    const min = 0;
    const max = 15;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber * 6 + "%";
  };
  // 随机持续时间,使每条弹幕移动速度不同
  const randomDuration = () => {
    return Math.floor(Math.random() * 6 + 20) + "s";
  };

  useEffect(() => {
    const wall = document.getElementById("wall");
    // 每 1 秒取一个弹幕显示
    let timer: string | number | NodeJS.Timeout | undefined;
    // 如果要显示弹幕就启动 interval 计时器
    if (showWall) {
      timer = setInterval(() => {
        var randomIndex = Math.floor(Math.random() * barrages.length);
        let barrageContent = barrages[randomIndex];
        const bullet = document.createElement("div");
        bullet.classList.add(
          "absolute",
          "text-xl",
          "text-white",
          "font-semibold",
          "right-0",
          "translate-x-[100%]",
          `animate-[flow_20s_linear]`
        );
        bullet.style.top = randomTop();
        bullet.style.animationDuration = randomDuration();
        bullet.textContent = barrageContent.content;
        // 动画结束后去除元素
        bullet.addEventListener("animationend", (e) => {
          wall?.removeChild(bullet);
          bullet.remove();
        });
        wall?.appendChild(bullet);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
      const divElement = document.getElementById("wall") as HTMLElement;
      if (!showWall) {
        console.log("clear");
        divElement.innerHTML = "";
      }
    };
  }, [barrages, showWall]);

  return (
    <>
      <div
        id="wall"
        className={clsx(
          ` 
             w-full 
             h-2/5 
           bg-black 
             bg-opacity-0 
             absolute 
             overflow-x-hidden 
             z-50
            `,
          !showWall && "hidden"
        )}
      ></div>
      <div
        className="
        fixed
        bottom-8
        right-28
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
        <div onClick={() => setShowWall(!showWall)}>
          {!showWall ? (
            <MdOutlineCommentsDisabled size={30} />
          ) : (
            <MdOutlineComment size={30} />
          )}
        </div>
      </div>
      <InputWord setBarrages={setBarrages} />
    </>
  );
};

export default Barrage;
