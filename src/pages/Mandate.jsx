import React from "react";
import useReveal from "../hooks/useReveal.js";
<<<<<<< HEAD
import WordReveal from "../motion/WordReveal.jsx";
import CountUp from "../motion/CountUp.jsx";
import Timeline from "../motion/Timeline.jsx";
=======
import salesObjectivesImage from "../assets/sales-objectives.jpg";
import mandateAgreementImage from "../assets/mandate-agreement.jpg";
import salesKpiImage from "../assets/sales-kpi.jpg";
import salesExecutionImage from "../assets/sales-execution.jpg";
import soleSellingImage from "../assets/sale-partner-meeting.jpg";
>>>>>>> e0e939b (Update homepage and careers design)

const steps = [
  {
    image: salesObjectivesImage,
    title: "Define Your Sales Objectives, So That We As Your Sole Selling Partner.",
    intro: "Get Clarity To Attain Our Aommox GOAC. of Branding, Quick Sales At The Best Rates. So we need Clarity On..",
    items: ["Target buyer segment", "Total inventory size", "Target revenue", "Funding & cash-flow requirement", "Launch timeline", "Sales cycle expectation"],
  },
  {
    image: mandateAgreementImage,
    title: "Negotiate the Mandate Agreement",
    intro: "We Ensure That Our Agreement with the Developer Clearly Defines:",
    items: ["Revenue targets", "Commission structure", "Exclusive Clause", "Marketing responsibilities under brand mandates", "Duration", "Reporting frequency", "Exit Clause"],
    notes: ["Legal clarity ensures smooth execution of sales mandate."],
  },
  {
    image: salesKpiImage,
    title: "Set Performance KPIs (Key Performance Indicators)",
    intro: "We Define measurable KPIs such as:",
    items: ["Site visit targets", "Monthly booking targets", "Channel partner activation numbers", "Conversion ratios", "Inventory absorption rate", "Revenue milestone tracking"],
  },
  {
    image: salesExecutionImage,
    title: "Sales",
    intro: "For maximum impact: We ensure that...",
    items: ["Digital marketing must support on-ground sales", "Branding must be unified", "Messaging must remain consistent", "CRM tracking must be active", "Campaigns must align with pricing"],
    notes: ["A Fragmented marketing weakens mandate effectiveness"],
  },
];

const benefits = [
  "Unified Brand Positioning",
  "Strong Pricing Discipline",
  "Structured Inventory Release",
  "Data-driven execution",
  "Single-point Accountability",
  "Faster Inventory Absorption",
];

const whenToAppoint = [
  "New project launch",
  "Pre-launch planning",
  "Large township developments",
  "Redevelopment projects",
  "Slow-moving inventory",
  "Expansion into Mumbai markets",
];

const support = [
  "Market expertise across Mumbai",
  "Strategic brand-mandate implementation",
  "End-to-end exclusive sales mandates",
  "Broker ecosystem management",
  "On-site sales deployment",
  "CRM-driven reporting",
];

function Mandate() {
  useReveal();

  return (
    <main className="mandate-page">
      <section className="mandate-hero">
        <div className="mandate-container">
<<<<<<< HEAD
          <span className="mandate-eyebrow anim-1 reveal">AVODAH &amp; KHEN LLP</span>
          <WordReveal as="h1" trigger="view" delay={140} step={50}>
=======
          <span className="mandate-eyebrow anim-1">AVODAH &amp; KHEN</span>
          <h1 className="anim-2">
>>>>>>> e0e939b (Update homepage and careers design)
            Why Should You Appoint Us As Your Sole Selling Partner
            <span> for Your Project</span>
          </WordReveal>
        </div>
      </section>

<<<<<<< HEAD
      <section className="mandate-section">
        <div className="mandate-container">
          <div className="mandate-intro reveal">
            <span className="mandate-label">SOLE SELLING PARTNER</span>
            <h3>Step-By-Step Guide For Developers In India</h3>
            <p>
              Launching a real estate project is a major financial decision.
              Choosing the right Sole Selling Partner under structured sales
              mandates and brand mandates can directly impact your revenue,
              pricing discipline, and inventory absorption.
              <br />
              At Avodah &amp; Khen we are Backed by <CountUp end={20} suffix="+" /> years experience in
              sales &amp; brand mandates, we support developers across Mumbai
              with structured exclusive mandate models.
            </p>
          </div>
        </div>
      </section>
=======
  <section className="mandate-section mandate-intro-section">
  <div className="mandate-container">
    <div className="mandate-intro mandate-intro-split reveal">
      <div className="mandate-intro-content">
        <span className="mandate-label">
          SOLE SELLING PARTNER
        </span>

        <h3>Step-By-Step Guide For Developers In India</h3>

        <p>
          Launching a real estate project is a major financial decision.
          Choosing the right Sole Selling Partner under structured sales
          mandates and brand mandates can directly impact your revenue,
          pricing discipline, and inventory absorption.
        </p>

        <p>
          At Avodah &amp; Khen, backed by 20+ years of experience in
          sales &amp; brand mandates, we support developers across Mumbai
          with structured exclusive mandate models.
        </p>
      </div>

      <div className="mandate-intro-image">
        <img
          src={soleSellingImage}
          alt="Real estate professionals discussing a residential project"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>
>>>>>>> e0e939b (Update homepage and careers design)

      <section className="mandate-section mandate-light">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">UNDERSTANDING THE MODEL</span>
            <h3>What is a Sole Selling Partner?</h3>
          </div>
          <div className="mandate-definition reveal">
            <p>
              A Sole Selling Partner is appointed under an exclusive sales
              mandate agreement to manage the complete sales lifecycle of a
              project.
            </p>
            <h3>Our Sole selling model ensures:</h3>
            <ul>
              <li>We give you a Centralized pricing Strategy</li>
              <li>A Structured inventory allocation</li>
              <li>A well Established and Controlled broker network</li>
              <li>Transparent reporting</li>
              <li>A deal and perfect accountability</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mandate-section">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">STEP-BY-STEP GUIDE</span>
            <h3>While Appointing Us As Your Sole Selling Partner, You Need To...</h3>
          </div>
<<<<<<< HEAD
          <Timeline axis="y" className="mandate-steps">
            {steps.map((step) => (
              <article className="mandate-step reveal" key={step.number}>
                <div className="mandate-step-number">{step.number}</div>
                <div className="mandate-step-content">
                  <h3>{step.title}</h3>
                  {step.intro && <p>{step.intro}</p>}
                  <ul>
                    {step.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {step.notes && (
                    <div className="mandate-notes">
                      {step.notes.map((note) => (
                        <p key={note}><strong>Note: </strong>{note}</p>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </Timeline>
=======
        <div className="mandate-steps">
          {steps.map((step) => (
        <article
          className="mandate-step mandate-step-with-image reveal"
          key={step.number}
        >
      <div className="mandate-step-image">
        <img src={step.image} alt={step.title} loading="lazy" />
      </div>

      <div className="mandate-step-content">
        <h3>{step.title}</h3>

        {step.intro && <p>{step.intro}</p>}

        <ul>
          {step.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {step.notes && (
          <div className="mandate-notes">
            {step.notes.map((note) => (
              <p key={note}>
                <strong>Note: </strong>
                {note}
              </p>
            ))}
          </div>
        )}
      </div>
    </article>
  ))}
</div>
>>>>>>> e0e939b (Update homepage and careers design)
        </div>
      </section>

      <section className="mandate-section mandate-dark">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">KEY BENEFITS</span>
            <h3>Benefits of Appointing Avodah &amp; Khen a Sole Selling Partner</h3>
          </div>
          <div className="mandate-grid">
            {benefits.map((benefit, index) => (
              <div className="mandate-card reveal" key={benefit}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mandate-section mandate-light">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">TIMING</span>
            <h3>When Should You Appoint Avodah &amp; Khen As Your Sole Selling Partner?</h3>
          </div>
          <div className="mandate-grid">
            {whenToAppoint.map((item) => (
              <div className="mandate-card mandate-card-light reveal" key={item}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mandate-section">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">SALES STRUCTURE</span>
            <h3>Sole Selling Partner vs Multiple Channel Partners</h3>
          </div>
          <div className="mandate-comparison">
            <div className="comparison-column reveal">
              <h3>Why should you Appoint a Single Sole Selling Partners</h3>
              <ul>
                <li>Strong Pricing control</li>
                <li>Unified brand messaging</li>
                <li>Clear accountability</li>
                <li>Structured inventory allocation</li>
                <li>Centralized reporting</li>
              </ul>
            </div>
            <div className="comparison-column reveal">
              <h3>Why should you Avoid Appointing Multiple Channel Partners</h3>
              <ul>
                <li>Pricing inconsistency</li>
                <li>Fragmented brand communication</li>
                <li>Confused accountability</li>
                <li>Inventory conflicts</li>
                <li>Scattered reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mandate-section mandate-dark">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
<<<<<<< HEAD
            <span className="mandate-label">AVODAH &amp; KHEN LLP</span>
            <h3>How Avodah &amp; Khen LLP Supports Developers</h3>
            <p>With <CountUp end={20} suffix="+" /> years experience in sales &amp; brand mandates, we offer:</p>
=======
            <span className="mandate-label">AVODAH &amp; KHEN</span>
            <h3>How Avodah &amp; Khen Supports Developers</h3>
            <p>With 20+ years experience in sales &amp; brand mandates, we offer:</p>
>>>>>>> e0e939b (Update homepage and careers design)
          </div>
          <div className="mandate-grid">
            {support.map((item, index) => (
              <div className="mandate-card reveal" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mandate-section mandate-pride">
        <div className="mandate-container">
          <div className="mandate-heading reveal">
            <span className="mandate-label">OUR STRENGTH</span>
            <h3>We Pride Ourselves With...</h3>
            <p>
              Our approach is built around experience, accountability,
              structured execution and a deep understanding of the real estate
              sales ecosystem.
            </p>
          </div>

          <div className="mandate-pride-grid">
            <div className="mandate-pride-card reveal">
              <span>01</span>
              <p>
                Proven exclusive sales mandate and brand mandates experience
              </p>
            </div>

            <div className="mandate-pride-card reveal">
              <span>02</span>
              <p>
               Market expertise in PAN Mumbai.
              </p>
            </div>

            <div className="mandate-pride-card reveal">
              <span>03</span>
              <p>
                Dedicated on-ground sales team
              </p>
            </div>

            <div className="mandate-pride-card reveal">
              <span>04</span>
              <p>
                CRM & reporting systems
              </p>
            </div>

            <div className="mandate-pride-card reveal">
              <span>05</span>
              <p>
                Strong broker network
              </p>
            </div>

            <div className="mandate-pride-card reveal">
              <span>06</span>
              <p>
               Developer references
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mandate-final">
        <div className="mandate-container reveal">
          <span className="mandate-label">FINAL TAKEAWAY</span>
          <p>
            Appointing a Sole Selling Partner is not outsourcing sales.
            It is building a structured, accountable and revenue-driven sales
            system backed by professional Sales mandates and brand mandates.
          </p>
          <h4>If you want to:</h4>
          <ul>
            <li>Launch stronger.</li>
            <li>Sell faster.</li>
            <li>Maintain pricing discipline</li>
            <li>Avoid broker conflicts</li>
          </ul>
        </div>
      </section>

      <section className="mandate-final">
        <div className="mandate-container reveal">
          <span className="mandate-label">
            So Are You Ready to Appoint Us As Your Sole Selling Partner?
          </span>
          <h4>Contact Us Now:</h4>
          <ul>
            <li>Planning a New Project Launch?</li>
            <li>Looking for structured sales execution in Mumbai?</li>
          </ul>
          <br />
          <p>
            Connect with AVODAH &amp; KHEN today and let's structure your
            project under a powerful exclusive{" "}
            <strong>sales mandates and brand mandates</strong> model.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Mandate;
