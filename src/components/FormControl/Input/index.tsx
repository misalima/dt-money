import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export default function Input({...props}: InputProps) {
  return (
    <input
      className="border-2 border-[#d7d7d7] outline-1 outline-table-header text-base w-full h-16 my-3 bg-[#e7e9ee] px-5 rounded-md"
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}

