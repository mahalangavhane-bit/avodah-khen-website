import { NavLink } from "../components/router.jsx";
import useReveal from "../hooks/useReveal.js";

const focusAreas = [
  ["01", "PropTech", "Digital products that simplify how property is discovered, marketed and sold."],
  ["02", "AI + Data", "Intelligence that helps teams make faster, more informed decisions."],
  ["03", "Execution", "Technology combined with real-world sales and property expertise."],
];

const gaps = [
  ["Fragmented discovery", "Buyers navigate disconnected listings and channels."],
  ["Lead leakage", "Enquiries can get lost across teams, spreadsheets and messaging."],
  ["Limited intelligence", "Decisions often lack a single view of demand, pricing and performance."],
  ["Complex sales", "Mandates, channel partners and follow-ups require constant coordination."],
];

const capabilities = [
  { label: "PROPERTY PORTAL", title: "Property discovery", intro: "A modern digital destination for property discovery and qualified enquiries.", items: ["Smart property search", "Project and inventory discovery", "Rich property profiles", "Buyer enquiry journeys", "Location-led discovery", "Lead capture and routing"] },
  { label: "AI-POWERED PROPTECH", title: "Intelligence in the workflow", intro: "Use intelligence to reduce manual work and improve every stage of the property journey.", items: ["AI recommendations based on preferences, behavior and context", "Lead intelligence to prioritize enquiries and surface intent", "Automation for follow-ups, reporting and repetitive sales workflows"] },
  { label: "PROPERTY MANDATE SERVICES", title: "Representation and sales execution", intro: "End-to-end representation and sales execution for selected projects and properties.", items: ["Exclusive mandates and project marketing", "Lead generation and enquiry routing", "Channel management and sales execution", "Performance intelligence across enquiries, visits and conversions"] },
  { label: "DEVELOPER SOLUTIONS", title: "From launch to sell-through", intro: "A technology and execution layer for developers from launch to sell-through.", items: ["Launch strategy and market positioning", "Digital marketing around project, location and buyer intent", "Lead generation across digital and partner channels", "Sales enablement with workflows, data and visibility"] },
  { label: "CRM & SALES AUTOMATION", title: "A structured sales journey", intro: "Turn every enquiry into a structured, measurable sales journey.", items: ["Lead capture and allocation", "Follow-ups and next-step visibility", "Site visit bookings, outcomes and actions", "Conversion funnel monitoring and dashboards"] },
  { label: "DATA & MARKET INTELLIGENCE", title: "Actionable business visibility", intro: "Turn property and customer data into actionable business visibility.", items: ["Demand signals: understand what buyers are searching for", "Pricing visibility: compare market context and project positioning", "Funnel analytics: see where demand converts or drops"] },
];

const operatingSteps = [
  ["01", "Acquire", "Mandate / inventory"], ["02", "Position", "Strategy + content"], ["03", "Generate", "Marketing + demand"],
  ["04", "Manage", "CRM + channels"], ["05", "Convert", "Visits + sales"], ["06", "Learn", "Data + optimization"],
];

const distinctions = [
  ["Real-estate first", "Products and workflows designed around property businesses."],
  ["Technology-led", "Modern digital experiences, automation and AI."],
  ["Execution focused", "Technology is paired with hands-on sales and mandate capabilities."],
  ["Data connected", "Performance can be measured across the customer and sales journey."],
];

export default function Company() {
  useReveal();
  return (
    <div className="av-company">
      <section className="av-company-hero">
        <div className="av-company-hero-image" aria-hidden="true" />
        <div className="av-company-hero-content hero-enter"><p className="av-eyebrow av-eyebrow-light">AVODAH & KHEN LLP</p><h1>Real Estate.<br />Technology.<br /><em>Intelligence.</em></h1><p>A connected platform for property discovery, mandates, sales, CRM, data and AI-powered real estate.</p><NavLink className="av-button av-button-copper" to="/contact">Connect with us <span aria-hidden="true">↗</span></NavLink></div>
        <div className="av-company-hero-tag">PROPERTY • TECHNOLOGY • GROWTH</div>
      </section>

      <section className="av-company-section av-company-overview reveal">
        <div className="av-company-label">WHO WE ARE</div><div className="av-company-overview-grid"><h2>A technology-led real estate company built around <em>one connected ecosystem.</em></h2><div><p>AVODAH PropTech brings together digital products, intelligence and real-world property expertise across discovery, marketing and sales.</p><p>Our focus is to connect the right property, the right buyer and the right sales strategy — at scale.</p></div></div>
        <div className="av-company-focus-grid reveal-stagger">{focusAreas.map(([n, title, text]) => <article className="stagger-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="av-company-gap reveal">
        <div className="av-company-label">THE REAL ESTATE GAP</div><h2>Real estate is high-value,<br /><em>but many workflows remain fragmented.</em></h2>
        <div className="av-company-gap-grid reveal-stagger">{gaps.map(([title, text], i) => <article className="stagger-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="av-company-ecosystem reveal">
        <div className="av-company-label av-eyebrow-light">OUR CONNECTED ECOSYSTEM</div><h2>One ecosystem spanning discovery, demand generation, sales execution and intelligence.</h2>
        <div className="av-company-flow reveal-stagger">{[["PROPERTY PORTAL", "Discover"], ["AI + DATA", "Understand"], ["MANDATES", "Represent"], ["CRM", "Manage"], ["SALES", "Convert"]].map(([name, action], i) => <div className="stagger-card" key={name}><span>0{i + 1}</span><strong>{name}</strong><small>{action}</small></div>)}</div>
        <p>A single operating layer for modern real estate businesses.</p>
        <div className="av-company-ecosystem-note"><span>PORTAL</span><span>AI</span><span>DATA</span><span>CRM</span><span>MANDATES</span><strong>REAL ESTATE INTELLIGENCE</strong><small>Connected workflows • Shared data • Better visibility</small></div>
      </section>

      <section className="av-company-capabilities reveal">
        <div className="av-company-label">CORE CAPABILITIES</div><div className="av-company-capabilities-head"><h2>Connected capabilities.<br /><em>Practical execution.</em></h2><p>From property discovery and project positioning to sales workflows and performance visibility.</p></div>
        <div className="av-capability-list reveal-stagger">{capabilities.map((cap, i) => <article className="av-capability stagger-card" key={cap.label}><div className="av-capability-number">0{i + 1}</div><div className="av-capability-main"><span>{cap.label}</span><h3>{cap.title}</h3><p>{cap.intro}</p></div><ul>{cap.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="av-company-approach reveal">
        <div className="av-company-label av-eyebrow-light">OUR APPROACH & OPERATING MODEL</div><h2>How we work—from acquisition to <em>continuous learning.</em></h2><p className="av-company-approach-intro">A repeatable operating model from property acquisition to measurable outcomes.</p>
        <div className="av-operating-grid reveal-stagger">{operatingSteps.map(([n, title, text]) => <article className="stagger-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="av-company-different reveal">
        <div className="av-company-label">WHAT MAKES OUR APPROACH DIFFERENT</div><h2>Built to bridge technology and <em>real estate execution.</em></h2>
        <div className="av-difference-grid reveal-stagger">{distinctions.map(([title, text], i) => <article className="stagger-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="av-company-vision reveal"><div className="av-company-label av-eyebrow-light">OUR VISION</div><h2>Build the operating system for a smarter, more connected <em>real estate market.</em></h2><div className="av-company-vision-words reveal-stagger"><span className="stagger-card">Discover.</span><span className="stagger-card">Engage.</span><span className="stagger-card">Convert.</span></div><p>We are building technology that brings property discovery, mandates, marketing, CRM, sales and intelligence into one connected experience.</p></section>

      <section className="av-company-cta reveal"><div><div className="av-company-label">AVODAH PROPTECH</div><h2>Let’s build the future<br /><em>of real estate.</em></h2><p>Partner with us for property mandates, technology, lead generation, CRM, AI and sales execution.</p></div><div className="av-company-contact"><NavLink className="av-button av-button-dark" to="/contact">Contact us <span aria-hidden="true">↗</span></NavLink></div></section>
    </div>
  );
}
