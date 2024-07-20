import { Header } from "@/components/Header/Index";
import { ValuesCard } from "@/components/ValuesCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1120px] flex justify-between">
        <ValuesCard
          title="Entradas"
          iconUrl="/images/income.png"
          value={17400}
          color="white"
        />
        <ValuesCard
          title="Saídas"
          iconUrl="/images/outcome.png"
          value={1259}
          color="white"
        />
        <ValuesCard
          title="Total"
          iconUrl="/images/total.png"
          value={16141}
          color="income"
        />
      </div>
    </>
  );
}
