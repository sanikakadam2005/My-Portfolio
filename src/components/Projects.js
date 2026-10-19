
import React from "react";

function Projects() {
  const projects = [
    {
      title: "To-Do List Application",
      number: "01",
      description:
        "A full-stack task management application that allows users to organize daily tasks, manage their to-do lists, and track task progress.",
      technologies: ["Python", "Django", "React", "CSS"],
      github: "https://github.com/sanikakadam2005/to-do-list",
    },
    {
      title: "E-Blood Bank Management System",
      number: "02",
      description:
        "A web application designed to connect blood donors with recipients, manage blood donation requests, and support blood bank activities.",
      technologies: ["React", "Firebase", "JavaScript", "CSS"],
      github: "https://github.com/sanikakadam2005/e-blood-bank",
    },
    {
      title: "IT Courses Sangli",
      number: "03",
      description:
        "A website developed to showcase IT courses, provide course information, and help learners explore educational opportunities.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
      github: "https://github.com/sanikakadam2005/it-courses-sangli",
    },
  ];

  const styles = `
    .projects-sanika,
    .projects-sanika * {
      box-sizing: border-box;
    }

    .projects-sanika {
      width: 100%;
      min-height: 100vh;
      padding: 80px 8%;
      background: #111315;
      color: #ededee;
      font-family: Arial, Helvetica, sans-serif;
    }

    .projects-sanika .label {
  color: #fb923c;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: bold;
}

    .projects-sanika h2 {
      font-size: 38px;
      margin: 12px 0 35px;
      color: #ededee;
    }

    .projects-sanika .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
      align-items: stretch;
    }

    .projects-sanika .project-card {
      display: flex;
      flex-direction: column;
      min-width: 0;
      padding: 26px;
      background: #151719;
      border: 1px solid #303238;
      border-radius: 13px;

      transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;
    }

    /* Orange glow only on the project card border */
    .projects-sanika .project-card:hover {
      transform: translateY(-5px);
      background: #191b1e;
      border-color: #fb923c;
      box-shadow:
        0 0 8px rgba(251, 146, 60, 0.30),
        0 0 22px rgba(251, 146, 60, 0.14);
    }

    .projects-sanika .number {
      color: #d4d4d8;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 14px;
    }

    .projects-sanika .project-card h3 {
      color: #ededee;
      font-size: 20px;
      line-height: 1.5;
      margin: 0 0 12px;
    }

    .projects-sanika .project-card p {
      color: #b7b7bd;
      font-size: 14px;
      line-height: 1.8;
      margin: 0 0 18px;
    }

    .projects-sanika .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: auto;
      padding-top: 8px;
    }

    .projects-sanika .tag {
      color: #d4d4d8;
      background: #202225;
      border: 1px solid #393b3f;
      border-radius: 20px;
      padding: 6px 10px;
      font-size: 12px;
      transition:
        background 0.25s ease,
        border-color 0.25s ease;
    }

    .projects-sanika .tag:hover {
      color: #d4d4d8;
      background: #26282b;
      border-color: #55565a;
    }

    .projects-sanika .github-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: fit-content;
      margin-top: 24px;
      padding: 10px 15px;
      color: #ededee;
      background: transparent;
      border: 1px solid #55565a;
      border-radius: 7px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition:
        background 0.25s ease,
        border-color 0.25s ease;
    }

    .projects-sanika .github-link:hover {
      color: #ededee;
      background: #26282b;
      border-color: #929297;
    }

    .projects-sanika .github-link:focus-visible {
      outline: 2px solid #ededee;
      outline-offset: 4px;
      border-radius: 2px;
    }

    @media (max-width: 1000px) {
      .projects-sanika .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 650px) {
      .projects-sanika {
        padding: 60px 6%;
      }

      .projects-sanika .grid {
        grid-template-columns: 1fr;
      }

      .projects-sanika h2 {
        font-size: 32px;
      }

      .projects-sanika .project-card {
        padding: 23px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .projects-sanika .project-card,
      .projects-sanika .tag,
      .projects-sanika .github-link {
        transition: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <section id="projects" className="projects-sanika">
        <div className="label">WHAT I'VE BUILT</div>

        <h2>My Projects</h2>

        <div className="grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="number">{project.number}</div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tags">
                {project.technologies.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                className="github-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
