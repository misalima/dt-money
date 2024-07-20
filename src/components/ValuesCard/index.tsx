import Image from "next/image";

interface ValuesCardProps {
    title: string;
    iconUrl: string;
    value: number;
    color: string;
}

export function ValuesCard({title, iconUrl, value, color}: ValuesCardProps) {
    let bgColor = "bg-white text-title";
    
    if (color != "white") {
        bgColor = "bg-" + color + " text-white"
    }
    return (
      <div
        className={"px-8 py-5 w-[352px] h-[136px] rounded-md transform -translate-y-1/2 grid grid-cols-2 " + bgColor }
      >
        <h3 className="text-base">{title}</h3>
        <Image
          className="max-h-8 justify-self-end"
          width={32}
          height={32}
          src={iconUrl}
          alt="income"
        ></Image>
        <h3 className="text-3xl self-end col-span-2">
          R$ <span className="font-medium">{value}</span>,00
        </h3>
      </div>
    );
}
