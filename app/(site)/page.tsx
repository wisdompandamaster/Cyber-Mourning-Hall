/*
 * @Author: wisdompandamaster 2532569059@qq.com
 * @Date: 2023-09-12 08:30:18
 * @LastEditors: wisdompandamaster 2532569059@qq.com
 * @LastEditTime: 2023-09-20 19:14:50
 * @FilePath: \WEBd:\Code\Cyber-Mourning-Hall\cyber-mourning-hall\app\(site)\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from "next/image";
import Altar from "./components/Altar";
import WoodenFish from "./components/WoodenFish";
import BottomBar from "./components/BottomBar";
import Confetti from "./components/Confetti";
import InputWord from "./components/InputWord";
import BulletScreen from "./components/BulletScreen";
import getMouringWords from "../actions/getMourningWords";

export default async function Home() {
  const mourningWords = await getMouringWords();

  return (
    <div className="flex flex-col items-center">
      <div
        id="banner"
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
          id="right"
          className="absolute left-1/2 top-48 translate-x-52  bg-white
         bg-opacity-50  rounded-lg px-2 py-6 leading-10 w-20 tracking-widest"
        >
          微胖是福能纳百千事
        </p>
        <p
          id="left"
          className="absolute left-1/2 top-48 -translate-x-72  bg-white
         bg-opacity-50  rounded-lg px-2 py-6 leading-10 w-20 tracking-widest"
        >
          摆烂为智得脱世间苦
        </p>
      </div>
      <Altar />
      <WoodenFish />
      <BottomBar />
      <Confetti />
      <BulletScreen mourningWords={mourningWords} />
    </div>
  );
}
