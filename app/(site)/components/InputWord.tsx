"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const InputWord = () => {
  return (
    <div
      className="
       fixed
       bottom-8
       w-1/3
    "
    >
      <input
        placeholder={"type in some mourning words"}
        className="
          text-black
          font-light
          py-2
          px-4
          h-12
          bg-neutral-100
          w-full
          rounded-full
          focus:outline-none
          bg-opacity-70
        "
      />
    </div>
  );
};

export default InputWord;
