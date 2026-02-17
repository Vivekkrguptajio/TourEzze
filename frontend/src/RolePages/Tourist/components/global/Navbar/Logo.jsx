import { Link } from "react-router-dom";

export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0 z-50"
    >
      <img
        src="/Photos/NavbarLogo/logo.png"
        className="w-9 h-9 sm:w-10 sm:h-10"
        alt="Jharkhand Tourism"
      />
      <div className="leading-tight">
        <h1 className="text-green-100 text-base sm:text-lg font-bold tracking-wide">
          Jharkhand
        </h1>
        <p className="text-[8px] sm:text-[9px] text-green-300 uppercase tracking-widest">
          Tourism
        </p>
      </div>
    </Link>
  );
}
