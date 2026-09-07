
import React from "react";

const steps = [
  {
    number: "01",
    title:
      "Define Your Sales Objectives, So That We As Your Sole Selling Partner.",
    intro:
      "Get Clarity To Attain Our Aommox GOAC. of Branding, Quick Sales At The Best Rates. So we need Clarity On..",
    items: [
      "Total inventory size",
      "Target revenue",
      "Launch timeline",
      "Target buyer segment",
      "Sales cycle expectation",
      "Funding / cash-flow pressure",
    ],
  },
  {
    number: "02",
    title: "Negotiate the Mandate Agreement",
    intro:
      "We Ensure That Our Agreement with the Developer Clearly Defines:",
    items: [
      "Exclusive Clause",
      "Duration(typically 12-18 months)",
      "Revenue targets",
      "Commission structure",
      "Marketing responsibilities under brand mandates",
      "Exit Clause",
      "Reporting frequency",
    ],
    notes: ["Legal clarity ensures smooth execution of saled mandate."],
  },
  {
    number: "03",
    title: "Set Performance KPIs(Key performance Indicators)",
    intro: "We Define measurable KPIs such as:",
    items: [
      "Monthly booking target",
      "Site visit targets",
      "Conversion ratios",
      "Inventory absorption rate",
      "Channel partner activation numbers",
      "Revenue milestone tracking",
    ],
  },
  {
    number: "04",
    title: "Sales",
    intro: "For maximum impact: We ensurers that...",
    items: [
      "Branding must be unified",
      "Compaigns must align with pricing",
      "Digital marketing must support on-ground sales",
      "Messaging must remain consistent",
      "CRM tracking must be active",
    ],
    notes: ["Fragmented marketing weakens mandate effectiveness"],
  },
];

const benefits = [
  "Faster inventory absorption",
  "Strong pricing discipline",
  "Structured inventory release",
  "Unified brand positioning",
  "Single-point accountability",
  "Data-driven sales execution",
];

const whenToAppoint = [
  "New project launch",
  "Pre-launch planning",
  "Slow-moving inventory",
  "Large township developments",
  "Redevelopment projects",
  "Expansion into Mumbai markets",
];

const support = [
  "End-to-end exclusive sales mandates",
  "Strategic brand-mandate implementation",
  "Broker ecosystem management",
  "On-site sales deployment",
  "CRM-driven reporting",
  "Revenue-focused planning",
  "Market expertise across Mumbai",
];

function Mandate() {
  return (
    <main className="mandate-page">

      {/* HERO */}
      <section className="mandate-hero">
        <div className="mandate-container">
          <span className="mandate-eyebrow">AVODAH &amp; KHEN LLP</span>

          <h1>
            Why Should You Appoint Us As Your Sole Selling Partner
            <span> for Your Project</span>
          </h1>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mandate-section">
        <div className="mandate-container">
          <div className="mandate-intro">
            <span className="mandate-label">SOLE SELLING PARTNER</span>

            <h2>Step-By-Step Guide For Developers In India</h2>

            <p>
              Launching a real estate project is a major financial decision.
              Choosing the right Sole Selling Partner under structured sales
              mandates and brand mandates can directly impact your revenue,
              pricing discipline, and inventory absorption.
              <br />
              At Avodah &amp; Khen we are Backer by 20+ years experience in
              sales &amp; brand mandates, we support developers across Mumbai,
              Vasai, Virar and India with structured exclusive mandate models.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS A SOLE SELLING PARTNER */}
      <section className="mandate-section mandate-light">
        <div className="mandate-container">
          <div className="mandate-heading">
            <span className="mandate-label">UNDERSTANDING THE MODEL</span>
            <h2>What is a Sole Selling Partner?</h2>
          </div>

          <div className="mandate-definition">
            <p>
              A Sole Selling Partner is appointed under an exclusive sales
              mandate agreement to manage the complete sales lifecycle of a
              project.
            </p>

            <h3>Our Sole selling model ensures:</h3>

            <ul>
              <li>Centralized pricing Strategy</li>
              <li>Structured inventory allocation</li>
              <li>Controlled broker network</li>
              <li>
                Unified branding communication under clear brand mandates
              </li>
              <li>Transparent reporting</li>
              <li>Higher accountability</li>
            </ul>

            <p>
              Strategic execution of <strong>Sales mandate</strong>
            </p>
          </div>
        </div>
      </section>

      {/* STEP BY STEP */}
      <section className="mandate-section">
        <div className="mandate-container">
          <div className="mandate-heading">
            <span className="mandate-label">STEP-BY-STEP GUIDE</span>

            <h2>
              While Appointing Us As Your Sole Selling Partner, You Need To
            </h2>
          </div>

          <div className="mandate-steps">
            {steps.map((step) => (
              <article className="mandate-step" key={step.number}>
                <div className="mandate-step-number">
                  {step.number}
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
                        <p key={note}>{note}</p>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mandate-section mandate-dark">
        <div className="mandate-container">
          <div className="mandate-heading">
            <span className="mandate-label">KEY BENEFITS</span>

            <h2>
              Benefits of Appointing Avodah &amp; Khen LLP a Sole Selling
              Partner
            </h2>
          </div>

          <div className="mandate-grid">
            {benefits.map((benefit, index) => (
              <div className="mandate-card" key={benefit}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO APPOINT */}
      <section className="mandate-section mandate-light">
        <div className="mandate-container">
          <div className="mandate-heading">
            <span className="mandate-label">TIMING</span>

            <h2>
              When Should You Appoint Avodah &amp; Khen LLP As Your Sole
              Selling Partner?
            </h2>
          </div>

          <div className="mandate-grid">
            {whenToAppoint.map((item) => (
              <div
                className="mandate-card mandate-card-light"
                key={item}
              >
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mandate-section">
        <div className="mandate-container">
          <div className="mandate-heading">
            <span className="mandate-label">SALES STRUCTURE</span>

            <h2>
              Sole Selling Partner vs Multiple Channel Partners
            </h2>
          </div>

          <div className="mandate-comparison">

            <div className="comparison-column">
              <h3>
                Why should you Appoint a Single Sole Selling Partners
              </h3>

              <ul>
                <li>Strong Pricing control</li>
                <li>Unified brand messaging</li>
                <li>Clear accountability</li>
                <li>Structured inventory allocation</li>
                <li>Centralized reporting</li>
              </ul>
            </div>

            <div className="comparison-column">
              <h3>
                Why should you Avoid Appointing Multiple Channel Partners
              </h3>

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

      {/* AVODAH & KHEN SUPPORT */}
      <section className="mandate-section mandate-dark">
        <div className="mandate-container">

          <div className="mandate-heading">
            <span className="mandate-label">
              AVODAH &amp; KHEN LLP
            </span>

            <h2>
              How Avodah &amp; Khen LLP Supports Developers
            </h2>

            <p>
              With 20+ years experience in sales &amp; brand mandates,
              we offer:
            </p>
          </div>

          <div className="mandate-grid">
            {support.map((item, index) => (
              <div className="mandate-card" key={item}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL TAKEAWAY */}
      <section className="mandate-final">
        <div className="mandate-container">

          <span className="mandate-label">
            FINAL TAKEAWAY
          </span>

          <p>
            Appointing a Sole Selling Partner is not outsourcing sales.
            It is building a structured, accountable and revenue-driven sales
            system backed by professional Sales mandates and brand mandates.
          </p>

          <h3>If you want to:</h3>

          <ul>
            <li>Launch stronger.</li>
            <li>Sell faster.</li>
            <li>Maintain pricing discipline</li>
            <li>Avoid broker conflicts</li>
          </ul>

        </div>
      </section>

      {/* CONTACT CTA */}
<section className="mandate-final">
  <div className="mandate-container">

   <span className="mandate-label">
      So Are You Ready to Appoint Us As Your Sole Selling Partner?
    </span>

    <h3>Contact Us Now:</h3>

    <ul>
      <li>Planning a New Project Launch?</li>
      <li>Looking for structured sales execution in Mumbai?</li>
    </ul><br />

    <p>
      Connect with AVODAH &amp; KHEN LLP today and let's structure your
      project under a powerful exclusive{" "}
      <strong>sales mandates and brand mandates</strong> model.
      <br />
      Ready to appoint the right partner? Read our guide on how to appoint
      a sole selling partner and learn what separates a top mandate firm
      in India from the rest. Contact AVODAH &amp; KHEN LLP to start the
      Conversion.
    </p>

  </div>
</section>

    </main>
  );
}

export default Mandate;

