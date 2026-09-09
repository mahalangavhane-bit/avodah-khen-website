import { useState } from "react";
import useReveal from "../hooks/useReveal.js";

const DEPARTMENTS = ["Sales", "Marketing", "IT"];

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  department: "",
  jobTitle: "",
  message: "",
};

const PHONE_RE = /^(\+91[-\s]?)?[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};

  if (!form.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!form.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Contact number is required.";
  } else if (!PHONE_RE.test(form.phone.trim())) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.department) {
    errors.department = "Please select a department.";
  }

  if (!form.jobTitle.trim()) {
    errors.jobTitle = "Please tell us the role you're applying for.";
  }

  if (!form.message.trim()) {
    errors.message = "Please tell us a little about yourself.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

export default function Careers() {
  useReveal();

  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    const { value } = e.target;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => {
      if (!prev[field]) return prev;

      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = validate(form);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <main className="inner cr-page">
      {/* HERO */}
      <section className="hero cr-hero">
        <div className="cr-hero-bg" aria-hidden="true" />

        <div className="hero-copy cr-hero-copy">
          <p className="kicker anim-1">Careers</p>

          <h1 className="anim-2">
            Build Your Future With Us
          </h1>

          <p className="lede cr-hero-lede anim-3">
            Join AVODAH &amp; KHEN LLP and be part of a team
            shaping the future of real estate, technology and finance.
          </p>
        </div>
      </section>

      {/* APPLICATION SECTION */}
      <section className="cr-form-section">
        <div className="cr-form-intro reveal">
          <p className="kicker">Join Our Team</p>

          <h2>
            We would love to hear from you.
          </h2>

          <p className="cr-form-desc">
            Tell us a little about yourself and the opportunity
            you are interested in.
          </p>
        </div>

        {submitted ? (
          <div className="cr-success reveal" role="status">
            <div className="cr-success-icon">✓</div>

            <p className="cr-success-title">
              Application Submitted
            </p>

            <p>
              Thank you for your interest in AVODAH &amp; KHEN LLP.
            </p>

            <p>
              Our team will review your application and get back to you.
            </p>
          </div>
        ) : (
          <form
            className="cr-form reveal"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="cr-form-grid">

              {/* FIRST NAME */}
              <div className="cr-field">
                <label htmlFor="cr-firstName">
                  First Name
                </label>

                <input
                  id="cr-firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  required
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={
                    errors.firstName
                      ? "cr-firstName-error"
                      : undefined
                  }
                />

                {errors.firstName && (
                  <span
                    className="cr-error"
                    id="cr-firstName-error"
                  >
                    {errors.firstName}
                  </span>
                )}
              </div>

              {/* LAST NAME */}
              <div className="cr-field">
                <label htmlFor="cr-lastName">
                  Last Name
                </label>

                <input
                  id="cr-lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  required
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={
                    errors.lastName
                      ? "cr-lastName-error"
                      : undefined
                  }
                />

                {errors.lastName && (
                  <span
                    className="cr-error"
                    id="cr-lastName-error"
                  >
                    {errors.lastName}
                  </span>
                )}
              </div>

              {/* PHONE */}
              <div className="cr-field">
                <label htmlFor="cr-phone">
                  Contact Number
                </label>

                <input
                  id="cr-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={form.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone
                      ? "cr-phone-error"
                      : undefined
                  }
                />

                {errors.phone && (
                  <span
                    className="cr-error"
                    id="cr-phone-error"
                  >
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* EMAIL */}
              <div className="cr-field">
                <label htmlFor="cr-email">
                  Email Address
                </label>

                <input
                  id="cr-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email
                      ? "cr-email-error"
                      : undefined
                  }
                />

                {errors.email && (
                  <span
                    className="cr-error"
                    id="cr-email-error"
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              {/* DEPARTMENT */}
              <div className="cr-field">
                <label htmlFor="cr-department">
                  Department
                </label>

                <select
                  id="cr-department"
                  name="department"
                  required
                  value={form.department}
                  onChange={handleChange("department")}
                  aria-invalid={Boolean(errors.department)}
                  aria-describedby={
                    errors.department
                      ? "cr-department-error"
                      : undefined
                  }
                >
                  <option value="">
                    Select Department
                  </option>

                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>

                {errors.department && (
                  <span
                    className="cr-error"
                    id="cr-department-error"
                  >
                    {errors.department}
                  </span>
                )}
              </div>

              {/* JOB TITLE */}
              <div className="cr-field">
                <label htmlFor="cr-jobTitle">
                  Job Applied For
                </label>

                <input
                  id="cr-jobTitle"
                  name="jobTitle"
                  type="text"
                  placeholder="e.g. Sales Executive"
                  required
                  value={form.jobTitle}
                  onChange={handleChange("jobTitle")}
                  aria-invalid={Boolean(errors.jobTitle)}
                  aria-describedby={
                    errors.jobTitle
                      ? "cr-jobTitle-error"
                      : undefined
                  }
                />

                {errors.jobTitle && (
                  <span
                    className="cr-error"
                    id="cr-jobTitle-error"
                  >
                    {errors.jobTitle}
                  </span>
                )}
              </div>

              {/* MESSAGE */}
              <div className="cr-field cr-field-full">
                <label htmlFor="cr-message">
                  Message
                </label>

                <textarea
                  id="cr-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about yourself, your experience and why you would like to join us..."
                  required
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message
                      ? "cr-message-error"
                      : undefined
                  }
                />

                {errors.message && (
                  <span
                    className="cr-error"
                    id="cr-message-error"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

            </div>

            <div className="cr-submit-row">
              <p className="cr-submit-note">
                We respect your privacy and will only use
                your information for recruitment purposes.
              </p>

              <button
                className="btn primary cr-submit"
                type="submit"
              >
                <span>Submit Application</span>
                <span
                  className="cr-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}