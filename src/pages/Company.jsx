import useReveal from "../hooks/useReveal.js";
import { NavLink } from "../components/router.jsx";

const leaders = [
  { name: "Meera Iyer", role: "Founder & Chair, Climate Practice" },
  { name: "Arjun Desai", role: "Managing Partner, Cities" },
  { name: "Laila Fernandes", role: "Head of Circular Buildings" },
  { name: "Kabir Rahman", role: "Director, Mid-India Intelligence" },
];

export default function Company() {
  useReveal();
  return (
    <main className="inner">
      <header className="page-hero">
        <p className="kicker anim-1">Company</p>
        <h1 className="anim-2">Independent, field-first, climate-literate</h1>
        <p className="lede anim-3">
          Velora was set up in 2021 by practitioners who were tired of selling glass boxes into hotter streets. We advise, then stay through launch.
        </p>
      </header>
      <section className="offer reveal">
        <h2>Who we are</h2>
        <p>
          A multidisciplinary desk of urbanists, deal teams and climate analysts. We work with developers, housing boards, occupiers and patient capital — never as a white-label sales army.
        </p>
      </section>
      <section id="leadership" className="block tight">
        <h2 className="reveal">Leadership</h2>
        <div className="idea-grid">
          {leaders.map((p, i) => (
            <article key={p.name} className="reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="avatar" />
              <h3>{p.name}</h3>
              <p>{p.role}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="impact" className="block tight reveal">
        <h2>Community impact</h2>
        <p>
          Shade scholarships for municipal interns, open heat maps for three city corporations, and a materials reuse yard in Palghar that keeps demolition waste in circulation.
        </p>
      </section>
      <section id="careers" className="block tight reveal">
        <h2>Careers</h2>
        <p>We hire people who can walk a plot in May and still write a clear note by evening.</p>
        <NavLink className="btn primary" to="/contact">Send a note</NavLink>
      </section>
    </main>
  );
}
