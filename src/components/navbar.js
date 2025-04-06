import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-center space-x-8 shadow-md">
      <Link to="/" className="hover:text-green-200 font-semibold">
        Home
      </Link>
      <Link to="/about" className="hover:text-green-200 font-semibold">
        About
      </Link>
      <Link to="/events" className="hover:text-green-200 font-semibold">
        Events
      </Link>
      <Link to="/login" className="hover:text-green-200 font-semibold">
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
