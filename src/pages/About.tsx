import React from "react";
import { resume } from "../data/resume";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-lg font-bold text-blue-900 tracking-wide mt-8 mb-2 border-b border-gray-300 pb-1 uppercase">{children}</h2>
);

const About = () => (
    <section className="max-w-2xl mx-auto bg-white text-black p-8 shadow-lg rounded-lg font-sans relative">
        {/* Download Button */}
        <a
            href="/assets/resume.pdf"
            download
            className="absolute right-8 top-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-all text-sm"
        >
            Download PDF
        </a>
        {/* Name and Contact */}
        <div className="text-center mb-2">
            <h1 className="text-4xl font-extrabold tracking-tight mb-1">{resume.name}</h1>
            <div className="text-sm text-gray-700">
                {resume.location} &nbsp;|&nbsp; {resume.email} &nbsp;|&nbsp;
                <a href={resume.links.linkedin} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> &nbsp;|&nbsp;
                <a href={resume.links.github} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp;|&nbsp;
                <a href={resume.links.leetcode} className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </div>
        </div>

        {/* Education */}
        {/* <SectionTitle>Education</SectionTitle>
        {resume.education.map((edu) => (
            <div key={edu.school} className="flex justify-between text-sm font-medium mb-1">
                <div>
                    <span className="font-bold">{edu.school}</span>, {edu.location}
                    <div className="font-normal">{edu.degree}</div>
                </div>
                <div className="italic text-gray-600">{edu.graduation}</div>
            </div>
        ))} */}

        {/* Skills */}
        <SectionTitle>Skills</SectionTitle>
        <div className="text-sm mb-2">
            <div>
                <span className="font-bold">Languages</span> &nbsp;
                {resume.skills.languages.map((s, i) => (
                    <span key={i} className="italic">{s}{i < resume.skills.languages.length - 1 ? " | " : ""}</span>
                ))}
            </div>
            <div>
                <span className="font-bold">Software</span> &nbsp;
                {resume.skills.software.join(" | ")}
            </div>
            <div>
                <span className="font-bold">Frameworks and Libraries</span> &nbsp;
                {resume.skills.frameworks.join(" | ")}
            </div>
        </div>

        {/* Experience */}
        <SectionTitle>Experience</SectionTitle>
        {resume.experience.map((exp) => (
            <div key={exp.title + exp.company} className="mb-3">
                <div className="flex justify-between text-sm font-bold">
                    <span>{exp.title}</span>
                    <span className="italic text-gray-600">{exp.period}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-blue-900 font-semibold">{exp.company}</span>
                    <span className="text-gray-700">{exp.location}</span>
                </div>
                <ul className="list-disc ml-6 mt-1 text-sm">
                    {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            </div>
        ))}

        {/* Projects */}
        <SectionTitle>Projects</SectionTitle>
        {resume.projects.map((proj) => (
            <div key={proj.name} className="mb-3">
                <div className="flex justify-between text-sm font-bold">
                    <span>{proj.name}</span>
                    <span className="italic text-gray-600">{proj.period}</span>
                </div>
                <div className="text-xs text-blue-900 mb-1">{proj.stack.join(" | ")}</div>
                <ul className="list-disc ml-6 text-sm">
                    {proj.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            </div>
        ))}

        {/* Activities */}
        <SectionTitle>Activities</SectionTitle>
        <ul className="list-disc ml-6 text-sm">
            {resume.activities.map((act, i) => <li key={i}>{act}</li>)}
        </ul>
    </section>
);

export default About; 