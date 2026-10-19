import React from "react";

function Skills() {
const groups = [
{
title: "Programming Languages",
skills: ["Python", "JavaScript"],
},
{
title: "Frontend Development",
skills: ["HTML5", "CSS3", "React.js", "Responsive Design"],
},
{
title: "Backend & Database",
skills: ["Django (Learning)", "MySQL", "Firebase", "REST APIs"],
},
{
title: "Computer Science",
skills: ["OOP", "DBMS", "Operating Systems", "DSA"],
},
{
title: "Development Tools",
skills: ["Git", "GitHub", "VS Code"],
},
];

return (
<>
<style>{`
.skills-sanika {
padding: 80px 8%;
background: #111315;
color: #ededee;
font-family: Arial, sans-serif;
}

    .skills-sanika .label {
      color: #fb923c;
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: bold;
    }

    .skills-sanika h2 {
      color: #ededee;
      font-size: 38px;
      margin: 12px 0 35px;
    }

    .skills-sanika .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 22px;
    }

    .skills-sanika .skill-card {
      padding: 25px;
      background: #151719;
      border: 1px solid #292b2e;
      border-radius: 13px;
      transition: border-color 0.25s ease,
                  background 0.25s ease;
    }

    .skills-sanika .skill-card:hover {
      background: #191b1e;
      border-color: #fb923c;
    }

    .skills-sanika .skill-card h3 {
      margin-top: 0;
      color: #e5e5e5;
      font-size: 19px;
    }

    .skills-sanika .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
    }

    .skills-sanika .tag {
      padding: 7px 11px;
      color: #d4d4d8;
      background: #202225;
      border: 1px solid #303236;
      border-radius: 20px;
      font-size: 13px;
      transition: color 0.25s ease,
                  background 0.25s ease,
                  border-color 0.25s ease;
    }

    .skills-sanika .tag:hover {
      color: #fb923c;
      background: #26201a;
      border-color: #fb923c;
    }

    @media (max-width: 850px) {
      .skills-sanika .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 550px) {
      .skills-sanika {
        padding: 55px 6%;
      }

      .skills-sanika h2 {
        font-size: 30px;
      }

      .skills-sanika .grid {
        grid-template-columns: 1fr;
      }
    }
  `}</style>

  <section id="skills" className="skills-sanika">
    <div className="label">WHAT I KNOW</div>
    <h2>My Skills</h2>

    <div className="grid">
      {groups.map((group) => (
        <article className="skill-card" key={group.title}>
          <h3>{group.title}</h3>

          <div className="tags">
            {group.skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
</>

);
}

export default Skills;