import useReveal from "../hooks/useReveal.js";
import { NavLink } from "../components/router.jsx";

const reports = [
  { tag: "Climate", date: "Aug '26", title: "Heat-ready housing: what buyers will pay for in 2027", city: "Pan India" },
  { tag: "Cities", date: "Aug '26", title: "Indore & Coimbatore: the next liveable growth belts", city: "Mid-India" },
  { tag: "Circular", date: "Jul '26", title: "Retrofit first: why empty offices can become homes", city: "MMR & NCR" },
  { tag: "Retail", date: "Jul '26", title: "High-street revival vs malls in mid-size India", city: "Tier 2" },
  { tag: "Hospitality", date: "Jun '26", title: "Faith-led travel and the next 40,000 rooms", city: "North & West" },
  { tag: "Workplace", date: "May '26", title: "GCC demand without the glass-box default", city: "Hyderabad" },
];

export default function Research() {
  useReveal();
  return (
    <main className="inner">
      <header className="page-hero">
        <p className="kicker anim-1">Research</p>
        <h1 className="anim-2">Intelligence built for decisions, not press releases</h1>
        <p className="lede anim-3">
          City pulse reports, product-mix studies and bespoke briefs for boards that need more than a headline number.
        </p>
      </header>
      <section id="briefs" className="report-grid wide">
        {reports.map((r, i) => (
          <article key={r.title} className="report reveal" style={{ transitionDelay: `${i * 60}ms` }}>
            <div className={`report-art art-${i % 4}`} />
            <p className="meta">
              {r.tag} · {r.date} · {r.city}
            </p>
            <h3>{r.title}</h3>
            <NavLink to="/contact">Request the PDF</NavLink>
          </article>
        ))}
      </section>
      <section id="bespoke" className="block tight reveal">
        <h2>Bespoke research</h2>
        <p>
          Competition maps, developer assessments and land-economics notes written for a single plot — not recycled from a quarterly pack.
        </p>
        <NavLink className="btn primary" to="/contact">Commission a brief</NavLink>
      </section>
    </main>
  );
}
