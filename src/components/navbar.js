import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";
import { useState } from "react";

function Navbar() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-green-700 font-bold text-xl sm:text-2xl" onClick={closeMenu}>
            PSA Portal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 text-green-700 font-medium">
              <Link to="/" className="hover:text-green-800 transition duration-200">Home</Link>
              <Link to="/about" className="hover:text-green-800 transition duration-200">About</Link>
              <Link to="/events" className="hover:text-green-800 transition duration-200">Events</Link>
              <Link to="/network" className="hover:text-green-800 transition duration-200">Network</Link>
            </div>
            
            {/* Desktop Auth Section */}
            <div className="flex items-center gap-4 text-sm ml-8">
              {user ? (
                <>
                  {!loading && profile?.name && (
                    <span className="text-gray-700">👋 {profile.name}</span>
                  )}
                  <Link to="/edit-profile" className="text-green-700 hover:text-green-800 transition duration-200">
                    Edit Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 transition duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-green-700 hover:text-green-800 transition duration-200">
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-green-700 hover:text-green-800 focus:outline-none focus:text-green-800 transition duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Mobile Navigation Links */}
              <Link 
                to="/" 
                className="block px-3 py-2 text-green-700 font-medium hover:bg-green-50 rounded-md transition duration-200"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-green-700 font-medium hover:bg-green-50 rounded-md transition duration-200"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/events" 
                className="block px-3 py-2 text-green-700 font-medium hover:bg-green-50 rounded-md transition duration-200"
                onClick={closeMenu}
              >
                Events
              </Link>
              <Link 
                to="/network" 
                className="block px-3 py-2 text-green-700 font-medium hover:bg-green-50 rounded-md transition duration-200"
                onClick={closeMenu}
              >
                Network
              </Link>
              
              {/* Mobile Auth Section */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                {user ? (
                  <>
                    {!loading && profile?.name && (
                      <div className="px-3 py-2 text-gray-700 text-sm">👋 {profile.name}</div>
                    )}
                    <Link 
                      to="/edit-profile" 
                      className="block px-3 py-2 text-green-700 hover:bg-green-50 rounded-md transition duration-200"
                      onClick={closeMenu}
                    >
                      Edit Profile
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        closeMenu();
                      }}
                      className="block w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition duration-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link 
                    to="/login" 
                    className="block px-3 py-2 text-green-700 hover:bg-green-50 rounded-md transition duration-200"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
