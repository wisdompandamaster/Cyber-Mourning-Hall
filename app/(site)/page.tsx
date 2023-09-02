import Image from "next/image";
import Altar from "./components/Altar";

export default function Home() {
  return (
    <div className="w-full h-full">
      <h1 className="text-sky-500 text-center font-semibold text-2xl p-10">
        Cheems
      </h1>
      <Altar />
    </div>
  );
}
