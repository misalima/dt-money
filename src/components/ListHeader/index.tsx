export function ListHeader() {
  return (
    <div className="text-base text-table-header w-full px-7 py-5 grid grid-cols-9">
      <h3 className="col-span-4">Título</h3>
      <h3 className="col-span-2">Preço</h3>
      <h3 className="col-span-2">Categoria</h3>
      <h3>Data</h3>
    </div>
  );
}
