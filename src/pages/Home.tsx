import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { resume } from "../data/resume";

const highlights = [
  "RAG systems",
  "Computer vision",
  "Desktop agents",
  "ML infrastructure",
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
        I build machine learning systems, AI agents, and production-minded tools that move from research ideas to real user workflows.
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
      <img src="https://github.com/YonatanBest.png" alt="Yonatan Yishak Yifat" className="profile-image" />
      <div>
        <p className="panel-label">Current focus</p>
        <h2>{projects[0].name}</h2>
        <p>{projects[0].description}</p>
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
