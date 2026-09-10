
import { useState } from "react";
import useReveal from "../hooks/useReveal.js";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  useReveal();
  const [sent, setSent] = useState(false);

  return (
    <main className="inner">
      <header className="page-hero">
        <p className="kicker anim-1">Contact</p>

        <h1 className="anim-2">
          Tell us the city, the plot, or the problem
        </h1>

        <p className="lede anim-3">
          Studios in Mumbai.
        </p>
      </header>

      <section className="contact page-form contact-social-wrapper">
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

        {sent ? (
          <p className="reveal">
            Thanks — a Velora advisor will write back.
          </p>
        ) : (
          <form
            className="reveal"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
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

            <button className="btn primary" type="submit">
              Request a briefing
            </button>
          </form>
        )}
         <div className="contact-socials">
          <a
            href="https://wa.me/919657456931"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          className="contact-social whatsapp"
        >
        <FaWhatsapp />
      </a>

        <a
          href="https://www.instagram.com/mahalangavhane?stkn=MW40bDNvOWl6MWNhaQ=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="contact-social instagram"
      >
        <FaInstagram />
    </a>

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

