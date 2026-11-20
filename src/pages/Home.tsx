import { Link } from "react-router-dom";
import { resume } from "../data/resume";

const highlights = [
  "Associative memory",
  "Code retrieval",
  "Computer vision",
  "Distributed systems",
];

const Home = () => (
  <section className="hero-page">
    <div className="hero-copy">
      <p className="kicker">{resume.title}</p>
      <h1>
        <span>Yonatan</span>
        <span className="outline-text">Yishak</span>
      </h1>
      <p className="hero-lede">
        I research associative memory at iCog Labs. At Bloomberg, I rebuilt a valuation pipeline so a calculation that once took ten hours could run in minutes.
      </p>
      <div className="hero-actions" aria-label="Primary actions">
        <Link to="/projects" className="button button-primary">
          View projects
        </Link>
        <a href="/assets/resume.pdf" className="button button-secondary" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </div>

    <aside className="hero-panel" aria-label="Portfolio snapshot">
      <div>
        <p className="panel-label">Current research</p>
        <h2>{resume.focus.name}</h2>
        <p>{resume.focus.description}</p>
      </div>
      <div className="highlight-grid">
        {highlights.map((highlight) => (
          <span key={highlight}>{highlight}</span>
        ))}
      </div>
    </aside>
  </section>
);

export default Home;
