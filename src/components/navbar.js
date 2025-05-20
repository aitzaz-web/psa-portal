import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";

function Navbar() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="relative flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b border-gray-100">
      {/* Left: Logo */}
      <Link to="/" className="text-green-700 font-bold text-2xl">
        PSA Portal
      </Link>

      {/* Center: Absolutely Centered Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 text-green-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/network">Network</Link>
      </div>

      {/* Right: Auth actions */}
      <div className="flex items-center gap-4 text-sm">
        {user ? (
          <>
            {!loading && profile?.name && (
              <span className="text-gray-700">👋 {profile.name}</span>
            )}
            <Link to="/edit-profile" className="text-green-700 hover:underline">
              Edit Profile
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-green-700 hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
