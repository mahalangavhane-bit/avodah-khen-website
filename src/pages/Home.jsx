import { NavLink } from "../components/router.jsx";
import useReveal from "../hooks/useReveal.js";
import WordReveal from "../motion/WordReveal.jsx";
import MagneticButton from "../motion/MagneticButton.jsx";
import ParallaxImage from "../motion/ParallaxImage.jsx";
import HeroVideo from "../motion/HeroVideo.jsx";
import HorizontalRail from "../motion/HorizontalRail.jsx";
import CountUp from "../motion/CountUp.jsx";
import Marquee from "../motion/Marquee.jsx";
import Timeline from "../motion/Timeline.jsx";
import { PremiumReveal } from "../motion/Reveal.jsx";
import { editorialStrip, statementImage, heroPoster, solutionImages } from "../data/images.js";

const marqueeWords = ["Real Estate", "Strategy", "Technology", "Data", "Execution", "Investment", "PropTech"];

const pillars = [
  { number: "01", title: "PropTech", text: "Digital products that simplify how property is discovered, marketed and sold." },
  { number: "02", title: "AI + Data", text: "Intelligence that helps teams make faster, more informed decisions." },
  { number: "03", title: "Execution", text: "Technology combined with real-world sales and property expertise." },
];

const challenges = [
  { number: "01", title: "Fragmented discovery", text: "Buyers navigate disconnected listings and channels." },
  { number: "02", title: "Lead leakage", text: "Enquiries can get lost across teams, spreadsheets and messaging." },
  { number: "03", title: "Limited intelligence", text: "Decisions often lack a single view of demand, pricing and performance." },
  { number: "04", title: "Complex sales", text: "Mandates, channel partners and follow-ups require constant coordination." },
];

const ecosystem = [
  ["Property Portal", "Discover"], ["AI + Data", "Understand"], ["Mandates", "Represent"], ["CRM", "Manage"], ["Sales", "Convert"],
];

const solutions = [
  { number: "01", title: "Property Portal", text: "A digital destination for property discovery, project and inventory exploration, rich profiles and buyer enquiries.", to: "/proptech", link: "Explore PropTech" },
  { number: "02", title: "AI-Powered PropTech", text: "AI recommendations, lead intelligence and automation connected to real estate data and sales workflows.", to: "/proptech", link: "Explore capabilities" },
  { number: "03", title: "Property Mandate Services", text: "Project marketing, qualified lead generation, channel coordination and sales execution for selected properties.", to: "/mandate", link: "Explore mandates" },
  { number: "04", title: "Developer Solutions", text: "Launch strategy, digital marketing, lead generation and sales enablement from launch to sell-through.", to: "/services", link: "Explore solutions" },
  { number: "05", title: "CRM & Sales Automation", text: "Structure enquiries, allocation, follow-ups, site visits, conversion tracking and dashboards in a connected journey.", to: "/proptech", link: "Explore PropTech" },
  { number: "06", title: "Data & Market Intelligence", text: "Bring demand signals, pricing visibility and funnel analytics into clearer business decisions.", to: "/research", link: "Explore insights" },
];

const steps = [
  ["01", "Acquire", "Mandate / inventory"], ["02", "Position", "Strategy + content"], ["03", "Generate", "Marketing + demand"],
  ["04", "Manage", "CRM + channels"], ["05", "Convert", "Visits + sales"], ["06", "Learn", "Data + optimization"],
];

const reasons = [
  ["Real-estate first", "Products and workflows designed around property businesses."],
  ["Technology-led", "Modern digital experiences, automation and AI."],
  ["Execution focused", "Technology paired with hands-on sales and mandate capabilities."],
  ["Data connected", "Performance visibility across the customer and sales journey."],
];

export default function Home() {
  useReveal();
  return (
    <main className="av-home">
      <section className="av-home-hero">
        <HeroVideo className="av-home-hero-image" speed={0.14} poster={heroPoster} />
        <div className="av-home-hero-shade" aria-hidden="true" />
        <div className="av-home-hero-content hero-seq">
          <p className="av-eyebrow av-eyebrow-light">REAL ESTATE. REIMAGINED WITH PROPTECH</p>
          <WordReveal as="h1" trigger="view" delay={160} step={60}>Technology-driven solutions.<br />Transforming the way <em>real estate moves.</em></WordReveal>
          <p className="av-hero-lede">We combine real estate expertise with technology to make buying, selling and investing in property simpler, smarter and more transparent.</p>
          <div className="av-actions">
            <MagneticButton><NavLink className="av-button av-button-copper" to="/contact">Talk to our team <span aria-hidden="true"></span></NavLink></MagneticButton>
            <MagneticButton><NavLink className="av-button av-button-outline-light" to="/proptech">Explore PropTech</NavLink></MagneticButton>
          </div>
          <a className="hero-scroll" href="#who-we-are" onClick={(e) => { e.preventDefault(); document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" }); }} aria-label="Scroll to content"><span>Scroll</span><i aria-hidden="true" /></a>
        </div>
      </section>

      <Marquee items={marqueeWords} />

      <section className="av-section av-intro" id="who-we-are">
        <div className="av-section-kicker">WHO WE ARE</div>
        <div className="av-intro-main">
          <WordReveal>A technology-led real estate company built around <em>one connected ecosystem.</em></WordReveal>
          <PremiumReveal className="av-intro-copy" delay={150}>
            <p>AVODAH PropTech connects digital products, real estate expertise and execution across property discovery, marketing and sales.</p>
            <NavLink className="av-text-link" to="/company">Discover the company <span aria-hidden="true"></span></NavLink>
          </PremiumReveal>
        </div>
        <PremiumReveal as="div" className="av-strip" variant="fade" data-cursor="image">
          {editorialStrip.map((img) => (
            <figure key={img.caption}>
              <img src={img.src} srcSet={img.srcSet} sizes="(max-width: 767px) 50vw, 33vw" width={img.w} height={img.h} loading="lazy" decoding="async" alt="" />
              <figcaption aria-hidden="true">{img.caption}</figcaption>
            </figure>
          ))}
        </PremiumReveal>
        <div className="av-pillar-grid reveal-stagger">
          {pillars.map((item) => <article className="av-pillar stagger-card" key={item.number}>
            <div className="av-card-top"><span>{item.number}</span><span className="av-card-mark" aria-hidden="true"></span></div>
            <h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
        </section>

      <section className="av-statement" aria-label="Our focus">
        <ParallaxImage className="av-statement-img" src={statementImage} speed={0.1} width={1800} height={1000} data-cursor="image" />
        <div className="av-statement-shade" aria-hidden="true" />
        <div className="av-statement-inner">
          <span className="av-section-kicker av-statement-kicker">OUR FOCUS</span>
          <WordReveal as="p" className="av-statement-text" step={45}>Connect the right property, the right buyer and the right sales strategy — at scale.</WordReveal>
        </div>
      </section>

      <section className="av-section av-gap-section">
        <div className="av-section-heading">
          <div className="av-section-kicker">THE REAL ESTATE GAP</div>
          <WordReveal>High-value decisions.<br /><em>Fragmented workflows.</em></WordReveal>
          <p>Real estate is high-value, but many workflows remain fragmented.</p>
        </div>
        <div className="av-gap-grid reveal-stagger">
          {challenges.map((item) => <article className="av-gap-card stagger-card" key={item.number}>
            <span className="av-number">{item.number}</span><span className="av-gap-arrow" aria-hidden="true"></span>
            <h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
      </section>

      <section className="av-section av-ecosystem-section">
        <div className="av-section-kicker av-eyebrow-light">OUR CONNECTED ECOSYSTEM</div>
        <div className="av-ecosystem-heading"><WordReveal>One connected layer.<br /><em>Every step in view.</em></WordReveal><p>One ecosystem spanning discovery, demand generation, sales execution and intelligence.</p></div>
        <div className="av-ecosystem-flow reveal-stagger">
          {ecosystem.map(([name, verb], index) => <div className="av-ecosystem-step stagger-card" key={name}>
            <span className="av-eco-index">0{index + 1}</span><strong>{name}</strong><span>{verb}</span>
            {index < ecosystem.length - 1 && <span className="av-eco-connector" aria-hidden="true">→</span>}
          </div>)}
        </div>
        <p className="av-ecosystem-note">A single operating layer for modern real estate businesses.</p>
      </section>

      <section className="av-section av-solutions-section" id="solutions">
        <div className="av-section-heading av-heading-row">
          <div><div className="av-section-kicker">OUR SOLUTIONS</div><WordReveal>From discovery<br />to <em>conversion.</em></WordReveal></div>
          <p>Connected capabilities for property businesses, developers and sales teams.</p>
        </div>
        <HorizontalRail label="Our solutions" className="av-solution-grid reveal-stagger">
          {solutions.map((item, i) => <article className="av-solution-card stagger-card" key={item.number}>
            <div className="av-card-media" aria-hidden="true"><img src={solutionImages[i].src} srcSet={solutionImages[i].srcSet} sizes="(max-width: 767px) 80vw, 380px" style={{ objectPosition: solutionImages[i].pos }} width={720} height={450} loading="lazy" decoding="async" alt="" /></div>
            <div className="av-card-top"><span>{item.number}</span><span className="av-solution-icon" aria-hidden="true"></span></div>
            <h3>{item.title}</h3><p>{item.text}</p><NavLink className="av-text-link" to={item.to}>{item.link} <span aria-hidden="true"></span></NavLink>
          </article>)}
        </HorizontalRail>
      </section>

      <section className="av-section av-process-section">
        <div className="av-section-kicker">HOW WE WORK</div>
        <div className="av-process-heading"><WordReveal>A repeatable model.<br /><em>Measurable outcomes.</em></WordReveal><p>From property acquisition to data-led optimization.</p></div>
        <Timeline axis="x" className="av-process-grid reveal-stagger">
          {steps.map(([number, title, detail]) => <article className="av-process-step stagger-card" key={number}><span><CountUp end={Number(number)} pad={2} duration={900} /></span><h3>{title}</h3><p>{detail}</p></article>)}
        </Timeline>
      </section>

      <Marquee variant="display" reverse speed={70} items={["AVODAH & KHEN", "PropTech", "AI + Data", "Real Estate", "Execution", "Strategy"]} />

      <section className="av-section av-why-section">
        <PremiumReveal variant="clip" className="av-why-image" role="img" aria-label="Contemporary residential development" data-cursor="image" />
        <div className="av-why-content"><div className="av-section-kicker">WHY AVODAH</div><WordReveal>Technology grounded in <em>real estate execution.</em></WordReveal><p className="av-why-lede">Built to bridge technology and real estate execution.</p>
          <div className="av-reason-list reveal-stagger">{reasons.map(([title, text], index) => <div className="av-reason stagger-card" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="av-contact-cta reveal">
        <div><div className="av-section-kicker">LET’S CONNECT</div><WordReveal>Let’s build the future<br /><em>of real estate.</em></WordReveal><p>Partner with us for property mandates, technology, lead generation, CRM, AI and sales execution.</p></div>
        <div className="av-contact-details"><NavLink className="av-button av-button-dark" to="/contact">Contact AVODAH <span aria-hidden="true">↗</span></NavLink></div>
      </section>
    </main>
  );
}
