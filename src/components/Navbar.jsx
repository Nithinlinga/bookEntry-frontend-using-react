import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="bg-black text-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition">
                    MyWebsite
                </Link>

                <div className="space-x-6">
                    {!isAuthenticated ? (
                        <>
                            <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
                            <Link to="/signup" className="hover:text-gray-300 transition">Signup</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
                            <Link to="/dashboard" className="hover:text-gray-300 transition">Dashboard</Link>
                            <button
                                onClick={handleLogout}
                                className="hover:text-gray-300 transition"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
