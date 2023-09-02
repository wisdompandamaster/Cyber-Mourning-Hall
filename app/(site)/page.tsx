import Image from "next/image";
import Altar from "./components/Altar";
import WoodenFish from "./components/WoodenFish";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-sky-500 text-center font-semibold text-2xl m-10">
        Cheems
      </h1>
      <Altar />
      <WoodenFish />
    </div>
  );
}
