import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/public/signup", {
                username: name,
                email: email,
                password: password,
            });

            navigate("/login"); // Redirect to login page after successful signup
        } catch (err) {
            console.error(err);
            setError("Signup failed. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-gray-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 font-semibold hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
// Compare this snippet from src/components/Dashboard.jsx: