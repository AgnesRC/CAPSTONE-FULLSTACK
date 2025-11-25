import { useEffect, useState } from "react";


export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
     const res = await fetch(`http://localhost:3000/projects`);  
      const data = await res.json();
      setProjects(data);
    }
    getProjects();
  }, []);

  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="project-grid">
        {projects?.map((project) => (
          <div className="project-card" key={project._id}>
            {project.image && <img className="project-image" src={project.image} alt={project.title} />}
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-used">
              {project.techUsed.map((tech, index) => (
                <span key={index} className="tech">
                  {tech}
                </span>
              ))}
            </div>
            <div className="link">
              {project.github && <a href={project.github}>GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
