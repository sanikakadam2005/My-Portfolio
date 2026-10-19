
import React from "react";

function About() {
  return (
    <>
      <style>{`
        .about-sanika {
          padding: 80px 8%;
          background: #111315;
          color: #f8fafc;
          font-family: Arial, sans-serif;
        }

        .about-sanika .label {
          color: #fb923c;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: bold;
        }

        .about-sanika h2 {
          font-size: 38px;
          margin: 12px 0 30px;
          color: #f8fafc;
        }

        .about-sanika .content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 35px;
          align-items: start;
        }

        .about-sanika p {
          color: #a1a1aa;
          line-height: 1.9;
        }

        .about-sanika .details {
          padding: 25px;
          background: #181a1d;
          border: 1px solid #303238;
          border-radius: 12px;
        }

        .about-sanika .details strong {
          color: #f8fafc;
        }

        .about-sanika h3 {
          color: #f8fafc;
        }

        @media (max-width: 700px) {
          .about-sanika {
            padding: 60px 6%;
          }

          .about-sanika .content {
            grid-template-columns: 1fr;
          }

          .about-sanika h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <section id="about" className="about-sanika">
        <div className="label">GET TO KNOW ME</div>

        <h2>About Me</h2>

        <div className="content">
          <div>
            <h3>My Journey in Technology</h3>

            <p>
              I am a final-year B.Tech Computer Science Engineering
              student at Adarsh Institute of Technology and Research
              Centre, Vita, Maharashtra. I expect to graduate in 2027.
            </p>

            <p>
              I have worked with frontend technologies and am
              developing my knowledge of Python, SQL, Django,
              and full-stack application development.
            </p>

            <p>
              My career goal is to contribute to real-world software
              projects, gain industry experience, and become a
              skilled Python Full Stack Developer.
            </p>
          </div>

          <div className="details">
            <p>
              <strong>Name:</strong> Sanika Kadam
            </p>

            <p>
              <strong>Degree:</strong> B.Tech CSE
            </p>

            <p>
              <strong>Graduation:</strong> 2027 (expected)
            </p>

            <p>
              <strong>Location:</strong> Sangli, Maharashtra
            </p>

            <p>
              <strong>Career Interest:</strong> Full Stack Development
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
