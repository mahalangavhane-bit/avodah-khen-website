import useReveal from "../hooks/useReveal.js";

const awards = [
  "Liveable Cities Studio of the Year — 2026",
  "Climate Product Innovation — CREDAI Circle",
  "Best Independent Research Desk — Mid-India",
];

const films = [
  { title: "Street Talk, Ep. 12", text: "Why shade is now a line item on every term sheet." },
  { title: "Walk the Plot", text: "A 14-minute film from a Kochi retrofit that kept 80% of the frame." },
  { title: "Boardroom Brief", text: "How funds are pricing flood history into suburban land." },
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
      <section id="podcasts" className="block tight">
        <h2 className="reveal">Podcasts & films</h2>
        <div className="idea-grid">
          {films.map((f, i) => (
            <article key={f.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span>Watch / listen</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
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
