import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyNDSRIiRGf9tMN1d0CtUWatZb0-1vnSEXcs4TSnQA2Z4Vk_wfcqTqy71iynhSrpeObVw/exec";

export default function Contact() {
  useReveal();

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      type: "contact",
      name: formData.get("name"),
      email: formData.get("email"),
      note: formData.get("note"),
    };

    // Show Thank You message immediately
    setSent(true);

    // Save data to Google Sheet in background
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
    }).catch((error) => {
      console.error("Form submission failed:", error);
    });
  };

  return (
    <main className="inner">
      {/* PAGE HERO */}
      <header className="page-hero">
        <p className="kicker anim-1">Contact</p>

        <h1 className="anim-2">
          Tell us the city, the plot, or the problem
        </h1>

        <p className="lede anim-3">
          Studios in Mumbai.
        </p>
      </header>

      {/* CONTACT SECTION */}
      <section className="contact page-form contact-social-wrapper">

        {/* LEFT SIDE */}
        <div className="reveal">
          <h2>Request a briefing</h2>

          <p>
            A 20-minute call. No pitch deck until we have walked the street.
          </p>

          <div className="company-address">
            <h3>Our Office</h3>

            <p>
              AVODAH &amp; KHEN LLP
              <br />
              Mamta house 304, 3rd Floor, Swami Vivekanand Road,
              <br />
              Bandra West-Mumbai 400050, Maharashtra, India
              <br />
              <strong>Contact:</strong> +91 7507607744
              <br />
              <strong>Email:</strong> sales@avodahgroup.co.in
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {sent ? (
          <div>
            <h2>Thank You!</h2>

            <p>
              Your request has been submitted successfully.
            </p>

            <p>
              Our team will get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            className="reveal"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
            />

            <textarea
              name="note"
              rows="4"
              placeholder="City and what you need"
              required
            />

            <button
              className="btn primary"
              type="submit"
            >
              Request a briefing
            </button>
          </form>
        )}

        {/* SOCIAL ICONS */}
        <div className="contact-socials">

          {/* WhatsApp */}
          <a
            href="https://wa.me/919657456931"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="contact-social whatsapp"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mahalangavhane?stkn=MW40bDNvOWl6MWNhaQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="contact-social instagram"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mahalangavhane/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="contact-social linkedin"
          >
            <FaLinkedinIn />
          </a>

        </div>
      </section>
    </main>
  );
}