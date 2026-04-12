import { resume } from "../data/resume";

const Footer = () => (
  <footer className="big-footer">
    <div className="container footer-inner">
      <div className="footer-callout">
        <h2>Build<br />better.</h2>
        <a href={`mailto:${resume.email}`} className="button button-secondary">
          Start a conversation
        </a>
      </div>
      <div className="footer-bottom">
        <span>Yonatan Yishak Yifat</span>
        <div className="footer-links">
          <a href={resume.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={resume.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/assets/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
