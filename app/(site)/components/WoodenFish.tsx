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
    // const tag = document.getElementById("tag")!;
    // tag.classList.add("animate-[add_1s_ease-out]");
    setCount((count) => count + 1);
  };

  return (
    <div
      className="group w-40 h-40 relative font-['KaiTi'] font-semibold"
      onClick={addCount}
    >
      <Image
        className=" mt-5 active:animate-[knock_0.3s_ease-in-out] cursor-pointer"
        src={woodenfish}
        alt={"woodenfish"}
      />
      <div className="absolute top-5 text-white left-16 opacity-0 group-active:animate-[add_1s_ease-out]">
        功德 + 1
      </div>
      <div className="text-sm text-gray-100 text-center">
        {"今日功德 " + count}
      </div>
    </div>
  );
}

export default memo(WoodenFish);
