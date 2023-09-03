import Image from "next/image";
import Altar from "./components/Altar";
import WoodenFish from "./components/WoodenFish";
import BottomBar from "./components/BottomBar";
import Confetti from "./components/Confetti";
import InputWord from "./components/InputWord";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="
        text-gray-800
        text-center 
        font-bold 
        text-3xl 
        m-10 
        font-[KaiTi] 
        select-none
        bg-white
        bg-opacity-50
        p-2
        rounded-lg
        "
      >
        <p className="tracking-[1em] mb-3 translate-x-3">音容宛在</p>
        <p className="tracking-[1em] translate-x-3">趣姆肆公千古</p>
      </div>
      <div
        className="
         text-gray-800
         text-center 
         font-bold 
         text-3xl 
         font-[KaiTi] 
         select-none
         text-col
         absolute
         z-30
      "
      >
        <p
          className="absolute left-1/2 top-48 translate-x-52  bg-white
         bg-opacity-50  rounded-lg px-2 py-6 leading-10 w-20 tracking-widest"
        >
          微胖是福能纳百千事
        </p>
        <p
          className="absolute left-1/2 top-48 -translate-x-72  bg-white
         bg-opacity-50  rounded-lg px-2 py-6 leading-10 w-20 tracking-widest"
        >
          摆烂为智得脱世间苦
        </p>
      </div>

      <Altar />
      <WoodenFish />
      <BottomBar />
      <InputWord placeholder="type in some words to mourn" />
      <Confetti />
    </div>
  );
}
