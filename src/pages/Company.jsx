import useReveal from "../hooks/useReveal.js";

const pillars = [
  {
    number: "01",
    title: "PropTech",
    text: "Digital products that simplify how property is discovered, marketed and sold.",
    icon: "⌕",
  },
  {
    number: "02",
    title: "AI + Data",
    text: "Intelligence that helps teams make faster, more informed decisions.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Execution",
    text: "Technology combined with real-world sales and property expertise.",
    icon: "↗",
  },
];

const gapItems = [
  {
    icon: "⌕",
    title: "Fragmented discovery",
    text: "Buyers navigate disconnected listings and channels.",
  },
  {
    icon: "!",
    title: "Lead leakage",
    text: "Enquiries can get lost across teams, spreadsheets and messaging.",
  },
  {
    icon: "◉",
    title: "Limited intelligence",
    text: "Decisions often lack a single view of demand, pricing and performance.",
  },
  {
    icon: "↗",
    title: "Complex sales",
    text: "Mandates, channel partners and follow-ups require constant coordination.",
  },
];

const solutionItems = [
  ["PROPERTY PORTAL", "Discover"],
  ["AI + DATA", "Understand"],
  ["MANDATES", "Represent"],
  ["CRM", "Manage"],
  ["SALES", "Convert"],
];

const portalItems = [
  "Smart property search",
  "Project & inventory discovery",
  "Rich property profiles",
  "Buyer enquiry journeys",
  "Location-led discovery",
  "Lead capture & routing",
];

const aiItems = [
  {
    icon: "✦",
    title: "AI Recommendations",
    text: "Match buyers with relevant properties using preferences, behavior and context.",
  },
  {
    icon: "◎",
    title: "Lead Intelligence",
    text: "Prioritize enquiries, surface intent and help teams focus their time.",
  },
  {
    icon: "⚡",
    title: "Automation",
    text: "Accelerate follow-ups, reporting and repetitive sales workflows.",
  },
];

const mandateItems = [
  "Exclusive mandates",
  "Project marketing",
  "Lead generation",
  "Channel management",
  "Sales execution",
  "Performance intelligence",
];

const developerItems = [
  {
    icon: "↗",
    title: "Launch Strategy",
    text: "Market positioning, digital presence and demand-generation planning.",
  },
  {
    icon: "◉",
    title: "Digital Marketing",
    text: "Campaigns designed around project, location and buyer intent.",
  },
  {
    icon: "+",
    title: "Lead Generation",
    text: "Capture enquiries across digital and partner channels.",
  },
  {
    icon: "⚡",
    title: "Sales Enablement",
    text: "Give sales teams the workflows, data and visibility they need.",
  },
];

const crmItems = [
  "Lead Capture",
  "Lead Allocation",
  "Follow-ups",
  "Site Visits",
  "Conversion",
  "Dashboards",
];

const intelligenceItems = [
  {
    icon: "◉",
    title: "Demand signals",
    text: "Understand what buyers are searching for.",
  },
  {
    icon: "◉",
    title: "Pricing visibility",
    text: "Compare market context and project positioning.",
  },
  {
    icon: "◉",
    title: "Funnel analytics",
    text: "See where demand converts or drops.",
  },
];

const workSteps = [
  ["01", "Acquire", "Mandate / inventory"],
  ["02", "Position", "Strategy + content"],
  ["03", "Generate", "Marketing + demand"],
  ["04", "Manage", "CRM + channels"],
  ["05", "Convert", "Visits + sales"],
  ["06", "Learn", "Data + optimization"],
];

const whyItems = [
  {
    title: "Real-estate first",
    text: "Products and workflows designed around property businesses.",
  },
  {
    title: "Technology-led",
    text: "Modern digital experiences, automation and AI.",
  },
  {
    title: "Execution focused",
    text: "Technology is paired with hands-on sales and mandate capabilities.",
  },
  {
    title: "Data connected",
    text: "Performance can be measured across the customer and sales journey.",
  },
];

export default function Company() {
  useReveal();

  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-bg" />

        <div className="about-hero-content">
          <p className="about-kicker reveal">
            AVODAH PROPTECH
          </p>

          <h1 className="reveal">
            Real Estate.
            <br />
            Technology.
            <br />
            Intelligence.
          </h1>

          <p className="about-hero-text reveal">
            A connected platform for property discovery, mandates, sales,
            CRM, data and AI-powered real estate.
          </p>
        </div>

        <div className="about-hero-orbit">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            AVODAH
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section about-who">
        <div className="about-container">

          <div className="about-section-heading reveal">
            <span>WHO WE ARE</span>

            <h3>
              A technology-led real estate company built around one connected
              ecosystem.
            </h3>
          </div>

          <div className="about-pillars">
            {pillars.map((item) => (
              <article
                className="about-pillar reveal"
                key={item.title}
              >
                <div className="about-pillar-top">
                  <span>{item.number}</span>
                  <strong>{item.icon}</strong>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="about-focus reveal">
            <span>OUR FOCUS</span>

            <p>
              Connect the right property, the right buyer and the right sales
              strategy — at scale.
            </p>
          </div>

          {/* IMAGE BLOCK 1 */}
          <div className="about-image-block reveal">
            <div className="about-image">
              <img
                src="/about-real-estate.jpg"
                alt="Modern Mumbai real estate"
              />
            </div>

            <div className="about-image-copy">
              <span className="about-section-label">
                REAL ESTATE + TECHNOLOGY
              </span>

              <h3>
                Where property meets intelligence.
              </h3>

              <p>
                We combine real estate understanding with technology, data
                and execution to create a more connected property ecosystem.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* REAL ESTATE GAP */}
      <section className="about-section about-gap">
        <div className="about-container">

          <div className="about-section-heading centered reveal">
            <span>THE REAL ESTATE GAP</span>

            <h3>
              Real estate is high-value, but many workflows remain fragmented.
            </h3>
          </div>

          <div className="gap-grid">
            {gapItems.map((item) => (
              <article
                className="gap-card reveal"
                key={item.title}
              >
                <div className="gap-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* OUR SOLUTION */}
      <section className="about-section about-solution">
        <div className="about-container">

          <div className="about-section-heading reveal">
            <span>OUR SOLUTION</span>

            <h3>
              One ecosystem spanning discovery, demand generation, sales
              execution and intelligence.
            </h3>
          </div>

          <div className="solution-flow reveal">
            {solutionItems.map(([title, subtitle], index) => (
              <div
                className="solution-step"
                key={title}
              >
                <div className="solution-number">
                  0{index + 1}
                </div>

                <h3>{title}</h3>

                <span>{subtitle}</span>
              </div>
            ))}
          </div>

          <p className="solution-caption reveal">
            A single operating layer for modern real estate businesses.
          </p>

        </div>
      </section>

      {/* PROPERTY PORTAL */}
      <section className="about-section about-feature">
        <div className="about-container about-two-column">

          <div className="feature-copy reveal">
            <span className="feature-label">
              PROPERTY PORTAL
            </span>

            <h3>
              A modern digital destination for property discovery and
              qualified enquiries.
            </h3>

            <p>
              Designed to make property discovery faster, clearer and more
              connected to buyer intent.
            </p>
          </div>

          <div className="feature-list">
            {portalItems.map((item, index) => (
              <div
                className="feature-list-item reveal"
                key={item}
              >
                <span>0{index + 1}</span>

                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI */}
      <section className="about-section about-ai">
        <div className="about-container">

          <div className="about-section-heading reveal">
            <span>AI-POWERED PROPTECH</span>

            <h3>
              Use intelligence to reduce manual work and improve every stage
              of the property journey.
            </h3>
          </div>

          <div className="ai-grid">
            {aiItems.map((item) => (
              <article
                className="ai-card reveal"
                key={item.title}
              >
                <div className="ai-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="ai-note reveal">
            AI becomes useful when it is connected to real estate data and
            real sales workflows.
          </div>

        </div>
      </section>

      {/* MANDATES */}
      <section className="about-section about-mandates">
        <div className="about-container about-two-column">

          <div className="feature-copy reveal">
            <span className="feature-label">
              PROPERTY MANDATE SERVICES
            </span>

            <h3>
              End-to-end representation and sales execution for selected
              projects and properties.
            </h3>
          </div>

          <div className="mandate-list">
            {mandateItems.map((item, index) => (
              <div
                className="mandate-list-item reveal"
                key={item}
              >
                <span>0{index + 1}</span>

                <strong>{item}</strong>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DEVELOPER SOLUTIONS */}
      <section className="about-section about-developers">
        <div className="about-container">

          <div className="about-section-heading centered reveal">
            <span>DEVELOPER SOLUTIONS</span>

            <h3>
              A technology and execution layer for developers from launch to
              sell-through.
            </h3>
          </div>

          <div className="developer-grid">
            {developerItems.map((item) => (
              <article
                className="developer-card reveal"
                key={item.title}
              >
                <div className="developer-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="developer-caption reveal">
            Technology + marketing + sales execution
          </div>

          {/* IMAGE BLOCK 2 */}
          <div className="about-image-block reverse reveal">
            <div className="about-image-copy">
              <span className="about-section-label">
                DEVELOPER SOLUTIONS
              </span>

              <h3>
                From launch strategy to sell-through.
              </h3>

              <p>
                Technology, marketing and sales execution working together
                to help developers create demand and convert it into
                measurable outcomes.
              </p>
            </div>

            <div className="about-image">
              <img
                src="/about-development.jpg"
                alt="Modern real estate development"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CRM */}
      <section className="about-section about-crm">
        <div className="about-container">

          <div className="about-section-heading reveal">
            <span>CRM & SALES AUTOMATION</span>

            <h3>
              Turn every enquiry into a structured, measurable sales journey.
            </h3>
          </div>

          <div className="crm-dashboard reveal">

            <div className="crm-top">
              <span>SALES PIPELINE</span>
              <span>REAL ESTATE CRM</span>
            </div>

            <div className="crm-bars">
              {crmItems.map((item, index) => (
                <div
                  className="crm-bar"
                  key={item}
                  style={{
                    "--bar-height": `${35 + index * 10}%`,
                  }}
                >
                  <div className="crm-bar-fill" />

                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* DATA */}
      <section className="about-section about-data">
        <div className="about-container">

          <div className="about-section-heading reveal">
            <span>DATA & MARKET INTELLIGENCE</span>

            <h3>
              Turn property and customer data into actionable business
              visibility.
            </h3>
          </div>

          <div className="data-visual reveal">

            <div className="data-chart-header">
              <span>PROJECT PERFORMANCE</span>
              <small>ILLUSTRATIVE VIEW</small>
            </div>

            <div className="data-chart">
              <div className="chart-line line-one" />
              <div className="chart-line line-two" />
              <div className="chart-line line-three" />

              <div className="chart-point point-one" />
              <div className="chart-point point-two" />
              <div className="chart-point point-three" />
              <div className="chart-point point-four" />
              <div className="chart-point point-five" />
            </div>

            <div className="chart-labels">
              <span>Q1</span>
              <span>Q2</span>
              <span>Q3</span>
              <span>Q4</span>
              <span>Q5</span>
              <span>Q6</span>
            </div>

          </div>

          <div className="intelligence-grid">
            {intelligenceItems.map((item) => (
              <article
                className="intelligence-card reveal"
                key={item.title}
              >
                <span>{item.icon}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="about-section about-ecosystem">
        <div className="about-container">

          <div className="about-section-heading centered reveal">
            <span>THE AVODAH ECOSYSTEM</span>

            <h3>
              Multiple capabilities, connected through one real estate
              technology layer.
            </h3>
          </div>

          <div className="ecosystem">

            <div className="eco-center reveal">
              REAL ESTATE
              <br />
              INTELLIGENCE
            </div>

            <div className="eco-node eco-portal reveal">
              PORTAL
            </div>

            <div className="eco-node eco-ai reveal">
              AI
            </div>

            <div className="eco-node eco-data reveal">
              DATA
            </div>

            <div className="eco-node eco-crm reveal">
              CRM
            </div>

            <div className="eco-node eco-mandates reveal">
              MANDATES
            </div>

          </div>

          <p className="ecosystem-caption reveal">
            Connected workflows • Shared data • Better visibility
          </p>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="about-section about-work">
        <div className="about-container">

          <div className="about-section-heading reveal">
            <span>HOW WE WORK</span>

            <h3>
              A repeatable operating model from property acquisition to
              measurable outcomes.
            </h3>
          </div>

          <div className="work-timeline">
            {workSteps.map(([number, title, text]) => (
              <article
                className="work-step reveal"
                key={number}
              >
                <span>{number}</span>

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* WHY AVODAH */}
      <section className="about-section about-why">
        <div className="about-container">

          <div className="about-section-heading centered reveal">
            <span>WHY AVODAH</span>

            <h3>
              Built to bridge technology and real estate execution.
            </h3>
          </div>

          <div className="why-grid">
            {whyItems.map((item, index) => (
              <article
                className="why-card reveal"
                key={item.title}
              >
                <span>0{index + 1}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="about-vision">
        <div className="about-container">

          <span className="reveal">
            OUR VISION
          </span>

          <h3 className="reveal">
            Build the operating system for a smarter, more connected real
            estate market.
          </h3>

          <div className="vision-words reveal">
            <strong>Discover.</strong>
            <strong>Engage.</strong>
            <strong>Convert.</strong>
          </div>

          <p className="reveal">
            We are building technology that brings property discovery,
            mandates, marketing, CRM, sales and intelligence into one
            connected experience.
          </p>

          <div className="vision-tag reveal">
            THE NEXT GENERATION OF PROPTECH
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container reveal">

          <span>AVODAH PROPTECH</span>

          <h2>
            Let's build the future
            <br />
            of real estate.
          </h2>

          <p>
            Partner with us for property mandates, technology, lead
            generation, CRM, AI and sales execution.
          </p>

          <div className="cta-details">
            <a href="mailto:info@avodahproptech.com">
              info@avodahproptech.com
            </a>

            <a href="tel:+917507607744">
              7507607744
            </a>

            <span>
              Mumbai • India
            </span>
          </div>

        </div>
      </section>

    </main>
  );
}