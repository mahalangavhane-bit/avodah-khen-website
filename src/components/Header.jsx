import { useEffect, useState } from "react";
import { NavLink } from "./router.jsx";
import logo from "../assets/avodah-khen-logo.png";

const menus = {
  services: [
    { to: "/services", label: "All services" },
    { to: "/mandate", label: "Mandate" },
    { to: "/proptech", label: "Proptech" },
    { to: "/fintech", label: "Fintech" },
  ],
  media: [
    { to: "/media", label: "Awards" },
    { to: "/media", label: "In the news" },
  ],
  company: [
    { to: "/company", label: "Who we are" },
    { to: "/company", label: "Leadership" },
    { to: "/careers", label: "Careers" },
  ],
  research: [
    { to: "/research", label: "Reports & viewpoints" },
    { to: "/research", label: "City pulse briefs" },
    { to: "/research", label: "Bespoke research" },
  ],
};

export default function Header({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);

    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="topbar">
    <NavLink className="logo" to="/">
      <img
        src={logo}
        alt="AVODAH & KHEN LLP"
        className="company-logo"
      />
    </NavLink>

      <button
        className="menu-btn"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav className={open ? "open" : ""}>
        {Object.entries(menus).map(([key, items]) => (
          <div
            className="drop"
            key={key}
            onMouseEnter={() => setHover(key)}
            onMouseLeave={() => setHover(null)}
          >
            <NavLink
              to={`/${key}`}
              onClick={() => setOpen(false)}
            >
              {key[0].toUpperCase() + key.slice(1)}
            </NavLink>

            <div
              className={
                hover === key ? "mega show" : "mega"
              }
            >
              {items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}

        <NavLink
          className="nav-cta"
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}