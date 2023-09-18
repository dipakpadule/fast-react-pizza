import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button"
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-[1rem] ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium  uppercase text-stone-500">Sold out</p>}
          <Button>Add To Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
