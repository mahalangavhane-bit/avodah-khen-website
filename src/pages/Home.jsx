import { useState } from "react";
import { NavLink } from "../components/router.jsx";
import useReveal from "../hooks/useReveal.js";
import useCountUp from "../hooks/useCountUp.js";

const services = {
  climate: {
    label: "Climate",
    title: "Climate & Resilience Advisory",
    text: "Heat-risk mapping, flood-safe masterplans and green-rated product strategy for homes that stay liveable as cities warm.",
    items: ["Heat-island audits", "Flood & drainage scoring", "Green home product design"],
  },
  living: {
    label: "Cities",
    title: "Liveable Cities Advisory",
    text: "We work the 15-minute neighbourhood: mixed streets, last-mile transit, schools, parks and walkable retail — not only towers.",
    items: ["Neighbourhood playbooks", "Transit-oriented plots", "Public-space briefs"],
  },
  circular: {
    label: "Circular",
    title: "Circular Buildings Studio",
    text: "Reuse, retrofit and material passports so developers cut waste, unlock faster occupancy and keep embodied carbon in check.",
    items: ["Retrofit vs rebuild", "Material reuse markets", "Fit-out circularity"],
  },
  intelligence: {
    label: "Intelligence",
    title: "Mid-India Intelligence",
    text: "Deep research on growing cities — Indore, Coimbatore, Lucknow, Vizag, Jaipur — where demand is shifting faster than metros.",
    items: ["City pulse reports", "Plot-level demand maps", "Investor briefings"],
  },
};

const reports = [
  { tag: "Climate", date: "Aug '26", title: "Heat-ready housing: what buyers will pay for in 2027" },
  { tag: "Cities", date: "Aug '26", title: "Indore & Coimbatore: the next liveable growth belts" },
  { tag: "Circular", date: "Jul '26", title: "Retrofit first: why empty offices can become homes" },
  { tag: "Retail", date: "Jul '26", title: "High-street revival vs malls in mid-size India" },
];

const ideas = [
  { kicker: "Idea 01", title: "Shade as infrastructure", text: "We treat tree cover, colonnades and cool roofs as assets — scored like FSI, not landscaping extras." },
  { kicker: "Idea 02", title: "Homes that earn their keep", text: "Balconies as food gardens, rooftops as solar commons, and parking that converts to markets on weekends." },
  { kicker: "Idea 03", title: "Trust before volume", text: "A buyer bill of rights: water hours, commute times and flood history on every listing — no fine print." },
];

const logos = ["Niva Homes", "Arka Funds", "Civic Board", "Saffron REIT", "Kala Workspace", "Orion Parks", "Blueline Infra", "Harbor Living"];

function Stat({ end, suffix, label }) {
  const [ref, value] = useCountUp(end);
  return (
    <div ref={ref}>
      <strong>
        {value.toLocaleString("en-IN")}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  useReveal();
  const [active, setActive] = useState("climate");
  const current = services[active];

  return (
    <>
      <section className="hero">
        <div className="hero-kenburns" />
        <div className="hero-copy">
          <p className="eyebrow anim-1">Advisory for every stage of a warmer city</p>
          <h1 className="anim-2">Real estate that still works when the climate does not.</h1>
          <p className="lede anim-3">
            Velora is an independent advisory for developers, funds and cities that want liveable
            neighbourhoods — cooler streets, circular buildings and honest market intelligence.
          </p>
          <div className="actions anim-4">
            <NavLink className="btn primary" to="/services">Discover our services</NavLink>
            <NavLink className="btn ghost" to="/research">Read the latest brief</NavLink>
          </div>
        </div>
        <div className="scroll-cue">Scroll</div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...logos, ...logos].map((name, i) => (
            <span key={`${name}-${i}`}>{name}</span>
          ))}
        </div>
      </section>

      <section className="pillars">
        {[
          ["Street-level intelligence", "Walk scores, shade maps and commute reality — not only absorption charts."],
          ["Advice plus execution", "From land brief to launch, with partners who actually build what we recommend."],
          ["Climate as a product", "Cooling, water and energy designed in, then priced like a real amenity."],
          ["Trusted by city-makers", "Developers, housing boards and patient capital looking past the next quarter."],
        ].map(([title, text], i) => (
          <article key={title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="block">
        <p className="kicker reveal">Our services</p>
        <h2 className="reveal">Integrated solutions for a changing landscape</h2>
        <div className="tabs reveal">
          {Object.entries(services).map(([key, s]) => (
            <button
              key={key}
              className={active === key ? "tab on" : "tab"}
              onClick={() => setActive(key)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="service-panel reveal" key={active}>
          <div className="fade-swap">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
            <ul>
              {current.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <NavLink className="text-link" to="/services">Explore all services</NavLink>
          </div>
          <div className="service-visual" aria-hidden="true" />
        </div>
      </section>

      <section className="stats">
        <div className="stats-copy reveal">
          <p className="kicker">Our story</p>
          <h2>Trusted to deliver liveable value, not just transacted volume</h2>
          <NavLink className="btn ghost light" to="/company">Read who we are</NavLink>
        </div>
        <div className="stat-grid">
          <Stat end={180} suffix="+" label="Urbanists, climate analysts and deal teams across India" />
          <Stat end={42} suffix="k cr" label="Projects advised with a climate or circular brief since 2021" />
          <Stat end={22} suffix=" cities" label="Studios in India plus desks in Dubai, Lisbon and Singapore" />
          <Stat end={3200} suffix="" label="Local partners who know the street, not only the brochure" />
        </div>
      </section>

      <section className="block">
        <div className="row-head reveal">
          <div>
            <p className="kicker">Research</p>
            <h2>Intelligence built for confident decisions</h2>
          </div>
          <NavLink className="text-link" to="/research">View all reports</NavLink>
        </div>
        <div className="report-grid">
          {reports.map((r, i) => (
            <article key={r.title} className="report reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={`report-art art-${i}`} />
              <p className="meta">
                {r.tag} · {r.date}
              </p>
              <h3>{r.title}</h3>
              <NavLink to="/research">View report</NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="block ideas">
        <p className="kicker reveal">Different ideas</p>
        <h2 className="reveal">What we believe that most brokers will not say</h2>
        <div className="idea-grid">
          {ideas.map((idea, i) => (
            <article key={idea.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <span>{idea.kicker}</span>
              <h3>{idea.title}</h3>
              <p>{idea.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="reveal">
          <p className="kicker">Contact</p>
          <h2>Tell us the city, the plot, or the problem.</h2>
          <p>A 20-minute briefing. No pitch deck until we have walked the street.</p>
        </div>
        <div className="reveal">
          <NavLink className="btn primary" to="/contact">Open the contact page</NavLink>
        </div>
      </section>
    </>
  );
}
