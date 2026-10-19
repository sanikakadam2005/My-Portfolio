import React from "react";
import resumePDF from "../assets/resume.pdf";

function Resume() {
  const styles = `
    .resume-sanika,
    .resume-sanika * {
      box-sizing: border-box;
    }

    .resume-sanika {
      position: relative;
      overflow: hidden;
      padding: 80px 8%;
      background: #121416;
      color: #ededee;
      font-family: Arial, Helvetica, sans-serif;
      scroll-margin-top: 85px;
    }

    .resume-sanika::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: 38px 38px;
      mask-image: linear-gradient(
        to bottom,
        transparent,
        black 15%,
        black 85%,
        transparent
      );
    }

    .resume-container {
      position: relative;
      z-index: 1;
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
    }

    /* Only "My Resume" label is orange */
    .resume-label {
      display: inline-block;
      padding: 8px 16px;
      border: 1px solid rgba(251, 146, 60, 0.5);
      border-radius: 30px;
      background: rgba(251, 146, 60, 0.08);
      color: #fb923c;
      font-size: 13px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* Entire heading stays white */
    .resume-title {
      margin: 22px 0 15px;
      color: #f3f4f6;
      font-size: clamp(30px, 4vw, 44px);
      font-weight: 700;
    }

    .resume-title span {
      color: inherit;
      text-shadow: none;
    }

    .resume-description {
      max-width: 650px;
      margin: 0 auto;
      color: #a6a8ad;
      font-size: 16px;
      line-height: 1.8;
    }

    .resume-card {
      position: relative;
      isolation: isolate;
      max-width: 620px;
      margin: 42px auto 0;
      padding: 42px 30px;
      overflow: hidden;
      border: 1px solid #393d40;
      border-radius: 18px;
      background: #141618;
      transition: border-color 0.35s ease, box-shadow 0.35s ease;
    }

    /* Animated orange grid border */
    .resume-card::before {
      content: "";
      position: absolute;
      z-index: -2;
      inset: -50%;
      background:
        repeating-linear-gradient(
          0deg,
          transparent 0px,
          transparent 17px,
          rgba(251, 146, 60, 0.75) 18px,
          transparent 19px
        ),
        repeating-linear-gradient(
          90deg,
          transparent 0px,
          transparent 17px,
          rgba(251, 146, 60, 0.75) 18px,
          transparent 19px
        );
      opacity: 0;
      animation: resumeGridMove 12s linear infinite;
      transition: opacity 0.4s ease;
    }

    .resume-card::after {
      content: "";
      position: absolute;
      z-index: -1;
      inset: 1px;
      border-radius: 17px;
      background: #141618;
    }

    .resume-card:hover {
      border-color: #fb923c;
      box-shadow:
        0 0 12px rgba(251, 146, 60, 0.2),
        0 0 35px rgba(251, 146, 60, 0.09);
    }

    .resume-card:hover::before {
      opacity: 1;
    }

    @keyframes resumeGridMove {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .resume-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 65px;
      height: 65px;
      margin: 0 auto 22px;
      border: 1px solid #44484d;
      border-radius: 15px;
      background: #202327;
      color: #e5e7eb;
      font-size: 30px;
    }

    .resume-card h3 {
      margin: 0 0 14px;
      color: #f3f4f6;
      font-size: 23px;
    }

    .resume-card p {
      max-width: 470px;
      margin: 0 auto;
      color: #a6a8ad;
      font-size: 15px;
      line-height: 1.8;
    }

    .resume-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }

    .resume-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 145px;
      padding: 12px 20px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      background: #d1d5db;
      color: #17191c;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      transition:
        background 0.25s ease,
        border-color 0.25s ease,
        transform 0.25s ease;
    }

    .resume-btn:hover {
      transform: translateY(-2px);
      border-color: #ffffff;
      background: #ffffff;
    }

    .resume-btn.secondary {
      border-color: #4b5056;
      background: transparent;
      color: #e5e7eb;
    }

    .resume-btn.secondary:hover {
      border-color: #a6a8ad;
      background: #24272b;
    }

    .resume-note {
      margin-top: 22px;
      color: #777d84;
      font-size: 13px;
    }

    @media (max-width: 600px) {
      .resume-sanika {
        padding: 65px 6%;
      }

      .resume-card {
        padding: 32px 20px;
      }

      .resume-buttons {
        flex-direction: column;
      }

      .resume-btn {
        width: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .resume-card::before {
        animation: none;
      }

      .resume-card,
      .resume-btn {
        transition: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <section id="resume" className="resume-sanika">
        <div className="resume-container">
          <span className="resume-label">My Resume</span>

          <h2 className="resume-title">
            Explore My <span>Resume</span>
          </h2>

          <p className="resume-description">
            Learn more about my education, technical skills, projects, and
            experience through my professional resume.
          </p>

          <div className="resume-card">
            <div className="resume-icon" aria-hidden="true">
              &#128196;
            </div>

            <h3>My Professional Resume</h3>

            <p>
              My resume highlights my skills in Python, React.js, web
              development, databases, and software projects.
            </p>

            <div className="resume-buttons">
              <a
                className="resume-btn"
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>

              <a
                className="resume-btn secondary"
                href={resumePDF}
                download="Sanika_Kadam_Resume.pdf"
              >
                Download Resume
              </a>
            </div>
          </div>

          <p className="resume-note">
            PDF format · Available to view or download
          </p>
        </div>
      </section>
    </>
  );
}

export default Resume;