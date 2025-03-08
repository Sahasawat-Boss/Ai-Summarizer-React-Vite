import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure styles are imported

const FontShowcase = () => {
    const navigate = useNavigate(); // Hook for navigation

    const fontSizes = [
        "text-xs", "text-sm", "text-base", "text-lg", "text-xl",
        "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"
    ];

    return (
        <div className="p-6 space-y-6">
            {/* Home Button */}
            <div className="flex justify-center">
                <button
                    onClick={() => navigate("/")} // ✅ Navigate back to Home
                    className="absolute left-8 black_btn px-6 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                    ⬅ Back to Home
                </button>
            </div>

            <h1 className="text-4xl font-bold text-center">FrontShow Case</h1>
            <p className="text-lg text-center my-8">Explore the fonts used in this project!</p>

            {/* Satoshi Font Section */}
            <div className="border p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-2">Satoshi Font (Default)</h2>
                {fontSizes.map((size, index) => (
                    <p key={index} className={`${size} font-satoshi`}>
                        {size} - The quick brown fox jumps over the lazy dog.
                    </p>
                ))}
            </div>

            {/* Inter Font Section */}
            <div className="border p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-2">Inter Font</h2>
                {fontSizes.map((size, index) => (
                    <p key={index} className={`${size} font-inter`}>
                        {size} - The quick brown fox jumps over the lazy dog.
                    </p>
                ))}
            </div>
        </div>
    );
};

export default FontShowcase;
