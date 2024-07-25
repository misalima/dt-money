import { AddTransactionModal } from "@/components/AddTransactionModal";
import { Header } from "@/components/Header/Index";
import { List } from "@/components/List";
import { ValuesCard } from "@/components/ValuesCard";
import { ValuesCardGroup } from "@/components/ValuesCardGroup";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-[1120px]">
        <ValuesCardGroup />
        <List />
      </div>
    </>
  );
}
