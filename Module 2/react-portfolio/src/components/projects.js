function Projects() {
  const projects = [
    {
      title: "WebGuard",
      description:
        "A website security scanner for identifying common web vulnerabilities.",
      technologies: "Python, JavaScript, HTML, CSS",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive website showcasing my skills and achievements.",
      technologies: "React, JavaScript, CSS",
    },
    {
      title: "AI-Based Cybersecurity",
      description:
        "An academic project exploring AI applications in cybersecurity.",
      technologies: "Python, AI, Cybersecurity",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">My Projects</h2>

      <p className="section-description">
        Here are some of my academic and personal projects.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="tech-stack">
              {project.technologies}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;