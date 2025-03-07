import React from "react";
import "../App.css"; // Ensure styles are imported

const FontShowcase = () => {
    const fontSizes = [
        "text-xs", "text-sm", "text-base", "text-lg", "text-xl",
        "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"
    ];

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-4xl font-bold text-center">Font Showcase</h1>

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
