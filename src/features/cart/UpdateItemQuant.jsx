import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decItemQuant, incItemQaunt } from "./cartSlice";

function UpdateItemQuant({ pizzaId, curQuant }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button onClick={() => dispatch(decItemQuant(pizzaId))}>-</Button>
      <span>{curQuant}</span>
      <Button onClick={() => dispatch(incItemQaunt(pizzaId))}>+</Button>
    </div>
  );
}

export default UpdateItemQuant;
