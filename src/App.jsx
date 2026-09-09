import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { NavLink, useRoute } from "./components/router.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Research from "./pages/Research.jsx";
import Media from "./pages/Media.jsx";
import Company from "./pages/Company.jsx";
import Contact from "./pages/Contact.jsx";
import Mandate from "./pages/Mandate.jsx";
import Proptech from "./pages/Proptech.jsx";
import Fintech from "./pages/Fintech.jsx";
import Careers from "./pages/Careers.jsx";

const pages = {
  "/": Home,
  "/services": Services,
  "/research": Research,
  "/media": Media,
  "/company": Company,
  "/contact": Contact,
  "/mandate": Mandate,
  "/proptech": Proptech,
  "/fintech": Fintech,
  "/careers": Careers,
};

const searchIndex = [
  { to: "/services", title: "Climate & Resilience Advisory" },
  { to: "/services", title: "Liveable Cities Advisory" },
  { to: "/research", title: "Heat-ready housing report" },
  { to: "/media", title: "Street Talk podcast" },
  { to: "/company", title: "Leadership team" },
  { to: "/contact", title: "Request a briefing" },
];

export default function App() {
  const path = useRoute();
  const Page = pages[path] || Home;
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    setTick((n) => n + 1);
  }, [path]);

  const hits = searchIndex.filter((item) =>
    item.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="site">
      <Header onSearch={() => setSearch(true)} />
      <div key={tick} className="page-enter">
        <Page />
      </div>
      <Footer />

      {search && (
        <div className="search-layer" onClick={() => setSearch(false)}>
          <div className="search-box" onClick={(e) => e.stopPropagation()}>
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search services, reports, people..."
            />
            <ul>
              {hits.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.to}
                    onClick={() => {
                      setSearch(false);
                      setQ("");
                    }}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
