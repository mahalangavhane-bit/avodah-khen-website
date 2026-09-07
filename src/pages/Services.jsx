import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import { NavLink } from "../components/router.jsx";

const offerings = [
  {
    id: "climate",
    title: "Climate & Resilience",
    text: "Heat, flood and water risk folded into product, pricing and masterplan — so a 2035 city still feels liveable.",
    points: ["Microclimate modelling", "Cool-roof & shade playbooks", "Insurance-ready risk scores"],
  },
  {
    id: "living",
    title: "Liveable Cities",
    text: "Neighbourhood design that puts schools, shade and last-mile first. Towers are the last drawing, not the first.",
    points: ["15-minute audits", "Street activation", "Public-space briefs"],
  },
  {
    id: "circular",
    title: "Circular Buildings",
    text: "Retrofit, reuse and material passports. We help clients keep embodied carbon in the building instead of the landfill.",
    points: ["Rebuild vs retrofit", "Fit-out circularity", "Demolition as a materials mine"],
  },
  {
    id: "intelligence",
    title: "Mid-India Intelligence",
    text: "Demand maps for cities that metros still treat as footnotes — with field teams who walk the plot.",
    points: ["City pulse reports", "Launch timing", "Investor memos"],
  },
];

const faqs = [
  ["What does Velora actually do?", "Advisory plus execution across climate, neighbourhoods, circular buildings and city intelligence — not a brokerage shopfront."],
  ["Do you work only in metros?", "No. Mid-size cities are the core of our research and much of our live work."],
  ["Can one client use several services?", "Yes. Most mandates start with intelligence, then product, then launch support."],
];

export default function Services() {
  useReveal();
  const [open, setOpen] = useState(0);

  return (
    <main className="inner">
      <header className="page-hero">
        <p className="kicker anim-1">Services</p>
        <h1 className="anim-2">Comprehensive solutions across every stage of a liveable city</h1>
        <p className="lede anim-3">
          Sector expertise and execution for developers, funds, occupiers and civic clients.
        </p>
      </header>
      <div className="card-stack">
        {offerings.map((item, i) => (
          <article key={item.id} id={item.id} className="offer reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <ul>
              {item.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="block tight">
        <h2 className="reveal">Frequently asked</h2>
        {faqs.map(([q, a], i) => (
          <button
            key={q}
            className={open === i ? "faq on" : "faq"}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{q}</span>
            {open === i && <p>{a}</p>}
          </button>
        ))}
        <NavLink className="btn primary" to="/contact">Talk to an advisor</NavLink>
      </section>
    </main>
  );
}
