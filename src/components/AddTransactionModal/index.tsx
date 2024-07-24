import Image from "next/image";
import Input from "../FormControl/Input";
import EntryRadioSelects from "../FormControl/EntryRadioSelects";

interface ModalProps {
  isOpen: boolean
  setIsOpen: Function
}

export function AddTransactionModal({isOpen, setIsOpen}: ModalProps) {
  
  if(isOpen) {
    
    return (
      // Outer overlay
      <div className="w-full h-full absolute flex justify-center items-center z-10 bg-black/50">
        {/* //Modal div */}
        <div className="relative bg-white h-[588px] w-[576px] rounded-md px-10 py-6">
          {/*Close button*/}
          <div className="absolute top-5 right-5">
            <svg
              onClick={() => setIsOpen(false)}
              className="cursor-pointer fill-table-header"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="18"
              height="18"
              viewBox="0 0 30 30"
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </div>
          {/*Modal Title*/}
          <h3 className="my-6 text-2xl font-semibold text-title">
            Cadastrar transação
          </h3>
          {/*Form group*/}
          <form action="submit">
            <Input name="nome" type="text" placeholder="Nome" />
            <Input name="preco" type="number" placeholder="Preço" />
            {/*Radio button group*/}
            <EntryRadioSelects />

            <Input name="categoria" type="text" placeholder="Categoria" />

            <button
              type="submit"
              className="bg-income w-full h-16 text-white font-semibold text-base rounded-md my-3"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
