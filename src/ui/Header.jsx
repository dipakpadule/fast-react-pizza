import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between  border-b border-stone-500 bg-yellow-400 px-4 py-4 sm:px-6 text-sm md:text-base">
      <Link to="/" className="font-semibold uppercase tracking-[0.3rem]">
        GBP Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
