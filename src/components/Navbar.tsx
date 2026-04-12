import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-pill" aria-label="Primary navigation">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">YY</span>
          <span>Yonatan</span>
        </Link>

        <button
          type="button"
          className="navbar-menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
