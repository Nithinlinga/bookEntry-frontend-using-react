import { useEffect, useState } from "react";
import axios from "axios";
import CallWeather from "./CallWeather";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`${apiUrl}dashboard`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.log(error)
                setError("Failed to load data. Please log in.");
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, []);


    if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-400 to-green-300">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-gray-200 bg-gradient-to-br from-blue-400 to-green-600">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    🚀 Dashboard
                </h2>

                {user ? (
                    <div className="space-y-5 ">
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <p className="text-gray-700 text-lg">
                                <strong>Name:</strong> {user.username}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <p className="text-gray-700 text-lg">
                                <strong>Email:</strong> {user.email}
                            </p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <strong className="text-gray-700 text-lg">Roles:</strong>
                            <div className="flex gap-2 mt-2">
                                {user.roles.map((role, index) => (
                                    <span key={index} className="px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-sm">
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
