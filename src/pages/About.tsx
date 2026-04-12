import { resume } from "../data/resume";

const ResumeBlock = ({
  eyebrow,
  title,
  meta,
  details,
  bullets,
}: {
  eyebrow: string;
  title: string;
  meta: string;
  details?: string;
  bullets?: string[];
}) => (
  <article className="resume-block">
    <div className="card-topline">
      <span>{eyebrow}</span>
      <span>{meta}</span>
    </div>
    <h3>{title}</h3>
    {details ? <p>{details}</p> : null}
    {bullets ? (
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

const About = () => (
  <section className="page-section about-layout">
    <div className="section-header">
      <p className="kicker">Resume</p>
      <h1>{resume.name}</h1>
      <p>
        {resume.title}. Based in {resume.location}, focused on AI systems, applied ML, and software engineering.
      </p>
      <div className="hero-actions">
        <a href="/assets/resume.pdf" className="button button-primary" target="_blank" rel="noreferrer">
          Open resume
        </a>
        <a href={`mailto:${resume.email}`} className="button button-secondary">
          Email me
        </a>
      </div>
    </div>

    <div className="skills-panel">
      <h2>Stack</h2>
      {Object.entries(resume.skills).map(([group, skills]) => (
        <div key={group} className="skill-group">
          <h3>{group}</h3>
          <div className="chip-row">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="resume-list">
      <h2>Experience</h2>
      {resume.experience.map((experience) => (
        <ResumeBlock
          key={`${experience.company}-${experience.title}-${experience.period}`}
          eyebrow={`${experience.company} / ${experience.location}`}
          title={experience.title}
          meta={experience.period}
          bullets={experience.bullets}
        />
      ))}

      <h2>Education</h2>
      {resume.education.map((education) => (
        <ResumeBlock
          key={`${education.school}-${education.degree}`}
          eyebrow={`${education.school} / ${education.location}`}
          title={education.degree}
          meta={education.graduation}
          details={education.details}
        />
      ))}

      <h2>Activities</h2>
      <article className="resume-block">
        <ul>
          {resume.activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);

export default About;
