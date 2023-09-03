"use client";

import Image from "next/image";
import cheems_pic from "@/public/image/cheems.png";

const Altar = () => {
  return (
    <div className="flex justify-center w-full select-none">
      <div className="flex justify-center items-center">
        <Image
          src={cheems_pic}
          alt="cheems"
          height="288"
          width="288"
          className="rounded-lg sepia"
        />
      </div>
    </div>
  );
};

export default Altar;
