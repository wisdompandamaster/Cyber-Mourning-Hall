"use client";

import back_audio from "@/public/asset/大祭灵 (唢呐版).mp3";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";

const BackAudio = () => {
  const [play, setPlay] = useState(true);

  // 之前 puase() 失效是因为每次更新 play 都会创建新的 audio，用useMemo 可以解决这个问题
  const audio = useMemo(
    () => (typeof window !== "undefined" ? new Audio(back_audio) : null),
    []
  );

  if (audio) {
    audio.loop = true;
  }

  const handleClick = () => {
    setPlay(!play);
    if (audio) {
      play ? audio.play() : audio.pause();
    }
  };

  return (
    <div
      className="
         fixed 
         rounded-lg
         bottom-8
         right-48
         w-14
         h-14
         bg-white
         bg-opacity-60
         p-3
         flex
         items-center
         select-none
         hover:bg-opacity-80
         duration-300
    "
      onClick={handleClick}
    >
      {play ? (
        <MdOutlineMusicOff size={30} />
      ) : (
        <MdOutlineMusicNote size={30} />
      )}
    </div>
  );
};

export default BackAudio;
