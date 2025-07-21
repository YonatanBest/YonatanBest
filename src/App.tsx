import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function RedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirect = sessionStorage.getItem('redirect');
        if (redirect) {
            sessionStorage.removeItem('redirect');
            navigate(redirect);
        }
    }, [navigate]);

    return null;
}

function App() {
    return (
        <Router basename="/YonatanBest">
            <div className="flex flex-col min-h-screen bg-gray-950 text-white">
                <Navbar />
                <main className="flex-1">
                    <RedirectHandler />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
export default App; 