import { resume } from "../data/resume";

const Contact = () => (
  <section className="page-section contact-page">
    <div className="section-header">
      <p className="kicker">Contact</p>
      <h1>Let&apos;s build something sharp.</h1>
      <p>For internships, research collaborations, AI agent work, or ML systems, email is the fastest path.</p>
    </div>

    <div className="contact-grid">
      <a href={`mailto:${resume.email}`} className="contact-card">
        <span>Email</span>
        <strong>{resume.email}</strong>
      </a>
      <a href={resume.links.github} target="_blank" rel="noopener noreferrer" className="contact-card">
        <span>GitHub</span>
        <strong>YonatanBest</strong>
      </a>
      <a href={resume.links.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
        <span>LinkedIn</span>
        <strong>yonatanyishakyifat</strong>
      </a>
      <a href={resume.links.leetcode} target="_blank" rel="noopener noreferrer" className="contact-card">
        <span>LeetCode</span>
        <strong>YonatanBest</strong>
      </a>
    </div>
  </section>
);

export default Contact;
