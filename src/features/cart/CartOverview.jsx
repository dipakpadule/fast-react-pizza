import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalPrice, totalQuant } from "./cartSlice";
function CartOverview() {
  const totalCartQuant = useSelector(totalQuant);

  const totalCost = useSelector(totalPrice);

  if (!totalCartQuant) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalCartQuant} pizzas</span>
        <span>${totalCost}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
