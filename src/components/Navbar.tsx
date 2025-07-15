import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur flex items-center justify-between px-6 py-3 shadow">
            <Link to="/" className="text-xl font-bold text-blue-400">Yonatan Yishak</Link>
            <div className="hidden md:flex gap-6">
                <Link to="/" className="hover:text-blue-400">Home</Link>
                <Link to="/about" className="hover:text-blue-400">About</Link>
                <Link to="/projects" className="hover:text-blue-400">Projects</Link>
                <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            {open && (
                <div className="absolute top-16 right-6 bg-gray-900 rounded shadow-md flex flex-col gap-2 p-4 md:hidden">
                    <Link to="/" className="hover:text-blue-400" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/about" className="hover:text-blue-400" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/projects" className="hover:text-blue-400" onClick={() => setOpen(false)}>Projects</Link>
                    <Link to="/contact" className="hover:text-blue-400" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
};
export default Navbar; 