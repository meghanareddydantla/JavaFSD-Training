function Skills() {
  const skills = [
    "Python",
    "C Programming",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Cybersecurity",
    "Computer Networking",
    "Git and GitHub",
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">My Skills</h2>

      <p className="section-description">
        Technologies and areas I am learning.
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;