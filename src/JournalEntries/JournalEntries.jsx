import React from "react";

const JournalEntries = ({ data }) => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Journal Entries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((entry, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">
                            {entry.name || "Untitled Entry"}
                        </h3>
                        <p className="text-gray-600 mt-2">{entry.description || "No description available"}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Date: {new Date(entry.date).toLocaleString()}
                        </p>
                        <p className={`mt-2 font-semibold ${
                            entry.sentiment === "HAPPY" ? "text-green-500" :
                            entry.sentiment === "SAD" ? "text-red-500" :
                            "text-gray-500"
                        }`}>
                            Sentiment: {entry.sentiment || "Not available"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JournalEntries;
