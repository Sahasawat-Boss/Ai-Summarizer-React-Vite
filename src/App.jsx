import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Demo from "./components/demo";
import Footer from "./components/Footer";
import FontShowcase from "./components/FontShowcase"; // Import the new page

import "./App.css";
import FontPage from "./pages/FontPage";

const App = () => {
    return (
        <Router>
            {/* Background Gradient */}
            <main>
                <div className="main">
                    <div className="gradient"></div>
                </div>

                {/* Page Content */}
                <div className="app">
                    <Routes>
                        {/* Home Page */}
                        <Route path="/" element={<><Hero /><Demo /></>} />

                        {/* Font Showcase Page */}
                        <Route path="/FontPage" element={<FontPage />} />
                    </Routes>
                </div>

                {/* Footer (Always Visible) */}
                <div className="bottom-0"><Footer /></div>
            </main>
        </Router>

    );
};

export default App;
