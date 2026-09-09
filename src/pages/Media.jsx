import useReveal from "../hooks/useReveal.js";

const awards = [
  "Liveable Cities Studio of the Year — 2026",
  "Climate Product Innovation — CREDAI Circle",
  "Best Independent Research Desk — Mid-India",
];

const news = [
  "Velora maps 40 heat-risk pockets across six cities",
  "Partnership with municipal boards on open-data shade canopies",
  "Lisbon desk opens for diaspora capital into circular housing",
];

export default function Media() {
  useReveal();
  return (
    <main className="inner">
      <header className="page-hero">
        <p className="kicker anim-1">Media</p>
        <h1 className="anim-2">Awards, films and the stories we will stand behind</h1>
      </header>
      <section className="card-stack">
        {awards.map((item, i) => (
          <article key={item} className="offer reveal" style={{ transitionDelay: `${i * 80}ms` }}>
            <p className="meta">Award</p>
            <h2>{item}</h2>
          </article>
        ))}
      </section>
      <section id="news" className="block tight">
        <h2 className="reveal">In the news</h2>
        <ul className="news-list">
          {news.map((n) => (
            <li key={n} className="reveal">
              {n}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
