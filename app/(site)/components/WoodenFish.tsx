// import "./WoodenFish.css";
"use client";

import { memo, useState } from "react";
import woodenfish from "@/public/image/woodenfish.png";
import woodenfish_audio from "@/public/asset/woodenfish.mp3";
import Image from "next/image";

function WoodenFish() {
  const [count, setCount] = useState(0);

  const audio =
    typeof window !== "undefined" ? new Audio(woodenfish_audio) : null;

  const addCount = (e: any) => {
    e.stopPropagation();
    if (audio) {
      audio.play();
    }
    var tag = document.createElement("div"); //创建一个div标签
    tag.textContent = "功德 + 1";
    tag.className =
      "absolute top-5 text-white left-16 opacity-0 animate-[add_1s_ease-out]";
    document.getElementById("woodenfish")?.appendChild(tag); //为父元素添加一个div标签

    // 到时候就清除
    setTimeout(() => {
      document.getElementById("woodenfish")?.removeChild(tag);
    }, 800);

    setCount((count) => count + 1);
  };

  return (
    <div
      id="woodenfish"
      className="group w-40 h-40 relative font-['KaiTi'] font-semibold"
      onClick={addCount}
    >
      <Image
        className=" mt-5 active:animate-[knock_0.3s_ease-in-out] cursor-pointer"
        src={woodenfish}
        alt={"woodenfish"}
      />
      <div className="text-sm text-gray-100 text-center">
        {"今日功德 " + count}
      </div>
    </div>
  );
}

export default memo(WoodenFish);
