import { useEffect, useState } from "react";
import { NavLink } from "./router.jsx";

const menus = {
  services: [
    { to: "/services", label: "All services" },
    { to: "/mandate", label: "Mandate" },
    { to: "/services", label: "Climate & Resilience" },
    { to: "/services", label: "Liveable Cities" },
    { to: "/services", label: "Circular Buildings" },
    { to: "/services", label: "Mid-India Intelligence" },
  ],
  media: [
    { to: "/media", label: "Awards" },
    { to: "/media", label: "Podcasts & films" },
    { to: "/media", label: "In the news" },
  ],
  company: [
    { to: "/company", label: "Who we are" },
    { to: "/company", label: "Leadership" },
    { to: "/company", label: "Community impact" },
    { to: "/company", label: "Careers" },
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
        <span className="mark">A</span> AVODAH &amp; KHEN LLP
      </NavLink>
      <button className="menu-btn" onClick={() => setOpen((v) => !v)}>
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
            <NavLink to={`/${key}`} onClick={() => setOpen(false)}>
              {key[0].toUpperCase() + key.slice(1)}
            </NavLink>
            <div className={hover === key ? "mega show" : "mega"}>
              {items.map((item) => (
                <NavLink key={item.label} to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
        <NavLink className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
