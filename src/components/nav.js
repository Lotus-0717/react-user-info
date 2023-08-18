import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
export default function Nav() {
  return (
    <nav className="h-screen fixed top-0 w-40 p-5 bg-[#ddd]">
      <h1 className="text-2xl font-bold">User-Info</h1>
      <ul className="mt-5">
        <li className="leading-relaxed text-xl font-bold">
          <Link
            to="/"
            className="flex items-center hover:opacity-60 transition"
          >
            <p>首頁</p>
            <FaChevronRight />
          </Link>
        </li>
        <li className="leading-relaxed text-xl font-bold">
          <Link
            to="/user"
            className="flex items-center hover:opacity-60 transition"
          >
            <p>關於</p>
            <FaChevronRight />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
