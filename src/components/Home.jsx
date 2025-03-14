import { useEffect, useState } from "react";
import JournalEntries from "../JournalEntries/JournalEntries";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`${apiUrl}dashboard`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                // console.log("User Data:", response.data);
                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
                setError("Failed to load data. Please log in.");
                navigate("/login");
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, [navigate]);

    if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

    return (
        <>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
             {user?.journalEntries ? (
                 <JournalEntries data={user.journalEntries} />
            ) : (
                 <p className="text-center text-gray-500">No journal entries found.</p>
             )}
         </div>
        
        {/* <CallWeather/> */}
        </>
    );
};

export default Home;
