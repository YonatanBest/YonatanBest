import { projects } from "../data/projects";

const Projects = () => (
  <section className="max-w-5xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-8">Projects</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.name}
          className="bg-gray-900 rounded-xl shadow p-6 flex flex-col"
        >
          <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
          <p className="mb-4 text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-blue-800 text-blue-200 px-2 py-1 rounded text-xs"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded"
            >
              GitHub
            </a>
            {/* {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Live Demo</a>} */}
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
