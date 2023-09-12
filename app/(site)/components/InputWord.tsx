"use client";

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputsProps {
  inputWord: string;
}

interface InputWordProps {
  setBarrages: Function;
}

// 防抖函数
let timerId: string | number | NodeJS.Timeout | undefined;
function debounce(func: Function, delay: number): Function {
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(args);
    }, delay);
  };
}

const InputWord: React.FC<InputWordProps> = ({ setBarrages }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>();

  const onSubmit: SubmitHandler<InputsProps> = (data) => {
    const submit = () =>
      axios
        .post("/api/word", {
          ...data,
        })
        .then((res) => console.log(res.data));

    debounce(submit, 2000)();
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div
      className="
       fixed
       bottom-8
       w-1/3
    "
    >
      <form className="flex gap-1" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="
          text-black
          font-light
          py-2
          px-4
          h-12
          bg-neutral-100
          w-full
          rounded-lg
          focus:outline-none
          bg-opacity-70
        "
          defaultValue="愿 cheems 安息"
          {...register("inputWord")}
        />

        {/* 一些form 示例 */}
        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register("exampleRequired", { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <div></div>
        <input
          className="h-12 w-16 bg-gray-400 font-semibold rounded-md"
          type="submit"
          value={"Send"}
        />
      </form>
    </div>
  );
};

export default InputWord;
