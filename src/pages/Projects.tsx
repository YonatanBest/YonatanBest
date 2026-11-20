import { projects } from "../data/projects";

const Projects = () => (
  <section className="page-section">
    <div className="section-header">
      <p className="kicker">Selected work</p>
      <h1>Projects</h1>
      <p>Two projects exploring how software can interpret what happens on a screen or at a keyboard.</p>
    </div>

    <div className="project-grid">
      {projects.map((project) => (
        <article key={project.name} className="project-card">
          <div className="card-topline">
            <span>{project.eyebrow}</span>
            <span>{project.period}</span>
          </div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p className="project-impact">{project.impact}</p>
          <div className="chip-row">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="card-actions">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live site
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
