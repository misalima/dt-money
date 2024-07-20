import { ListHeader } from "../ListHeader";
import { ListItem } from "../ListItem";

export function List() {
  const mockData = [
    {
      id: 1,
      title: "Desenvolvimento de site",
      price: 12000,
      category: "Venda",
      date: "24/04/2024",
    },
    {
      id: 2,
      title: "Hamburguer",
      price: -59,
      category: "Alimentação",
      date: "10/04/2024",
    },
    {
      id: 3,
      title: "Aluguel do apartamento",
      price: -1200,
      category: "Casa",
      date: "27/03/2024",
    },
    {
      id: 4,
      title: "Computador",
      price: 5400,
      category: "Venda",
      date: "15/03/2024",
    },
  ];

  const list = mockData.map((item) => (
    <ListItem
      key={item.id}
      title={item.title}
      price={item.price}
      category={item.category}
      date={item.date}
    />
  ));

  return (
    <>
      <div className="flex flex-col gap-2 py-5">
        <ListHeader />
        {list}
      </div>
    </>
  );
}
