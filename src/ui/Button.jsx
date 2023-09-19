import { Link } from "react-router-dom";

function Button({ children, disabled, to, onClick }) {
  const classname =
    "bg-yellow-400 uppercase font-semibold inline-block py-1 px-3 tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed sm: px - 6 sm: py - 4";

  if (to)
    return (
      <Link to={to} className={classname}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={classname}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={classname}>
      {children}
    </button>
  );
}

export default Button;
