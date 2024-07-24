import Image from 'next/image';
import React, { useState } from 'react'

export default function EntryRadioSelects() {
  const [optionChecked, setOptionChecked] = useState(0);

  const changeOptionChecked = (value: number) => {
    setOptionChecked(value);
  }
  return (
    <div className="flex gap-2 my-3">
      <label
        htmlFor="entrada"
        className={`${
          optionChecked == 0 ? "bg-green-300 text-title" : ""
        } cursor-pointer flex justify-center items-center gap-2 w-1/2 h-16 rounded-md border-2 border-[#d7d7d7]`}
      >
        <Image
          className="max-h-8"
          width={24}
          height={24}
          src="/images/income.png"
          alt="income"
        ></Image>
        Entrada
      </label>
      <input
        className="hidden"
        type="radio"
        name="tipo"
        id="entrada"
        onChange={() => changeOptionChecked(0)}
      />
      <label
        htmlFor="saida"
        className={`${
          optionChecked == 1 ? "bg-red-300 text-title" : ""
        } cursor-pointer flex justify-center items-center gap-2 w-1/2 h-16 rounded-md border-2 border-[#d7d7d7]`}
      >
        <Image
          className="max-h-8"
          width={24}
          height={24}
          src="/images/outcome.png"
          alt="income"
        ></Image>
        Saída
      </label>
      <input
        className="hidden"
        type="radio"
        name="tipo"
        id="saida"
        onChange={() => changeOptionChecked(1)}
      />
    </div>
  );
}
