import Image from "next/image";
import { AddTransactionModal } from "../AddTransactionModal";
import { useState } from "react";

export function Header() {
  const [openModal, setOpenModal] = useState(false);
    return (
    <>
      <AddTransactionModal isOpen={openModal} setIsOpen={setOpenModal}/>
      <header className="bg-header h-[212px] w-full">
        <div className="mx-auto flex justify-between max-w-[1120px] pt-8">
          <Image
            className="max-h-10"
            width={172}
            height={40}
            src="/images/logo.png"
            alt="logo"
          />
          <button onClick={() => setOpenModal(true)} className="bg-button text-white size-4 w-[195px] h-[48px] = rounded-md text-center flex items-center justify-center hover:opacity-90">
            Nova Transação
          </button>
        </div>
      </header>
    </>
  );
}
