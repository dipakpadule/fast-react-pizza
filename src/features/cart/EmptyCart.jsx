import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-5 flex items-center justify-center font-semibold">
        Oops! Your 🛒 is still empty. Start adding some delicious 🍕
      </p>
    </div>
  );
}

export default EmptyCart;
