
interface ListItemsProps {
    title: string,
    price: number,
    category: string,
    date: string,
}

export function ListItem({title, price, category, date}: ListItemsProps) {
  
    const priceCondition = price > 0 ? "text-income" : "text-outcome"
    const formattedPrice = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
    <div className="rounded-md text-base bg-white w-full px-7 py-6 grid grid-cols-9">
      <h3 className="text-title col-span-4">{title}</h3>
      <h3 className={`col-span-2 ${priceCondition}`}>{formattedPrice}</h3>
      <h3 className="text-table-header col-span-2">{category}</h3>
      <h3 className="text-table-header">{date}</h3>
    </div>
  );
}
