
import React from "react";
import sanikaImage from "../assets/sanika.jpeg";
import resumePDF from "../assets/resume.pdf";

function Home() {
  const styles = `
    .sanika-home,
    .sanika-home * {
      box-sizing: border-box;
    }

    .sanika-home {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      min-height: calc(100vh - 70px);
      background: #111315;
      color: #ededee;
      font-family: Arial, Helvetica, sans-serif;
    }

    .sanika-home::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background-image:
        linear-gradient(to right, #ffffff08 1px, transparent 1px),
        linear-gradient(to bottom, #ffffff08 1px, transparent 1px);
      background-size: 103px 103px;
    }

    .sanika-home-inner {
      width: 100%;
      max-width: 1110px;
      min-height: calc(100vh - 70px);
      margin: 0 auto;
      padding: 90px 0 70px;
      display: grid;
      grid-template-columns: 1.4fr 0.8fr;
      align-items: center;
      gap: 55px;
    }

    .sanika-home-content {
      min-width: 0;
    }

    .sanika-home-role {
      color: #fb923c;
      font-family: monospace;
      font-size: 15px;
      margin: 0 0 22px;
    }

    .sanika-home-name {
      margin: 0 0 28px;
      color: #ededee;
      font-size: clamp(48px, 5.6vw, 76px);
      font-weight: 750;
      letter-spacing: -3px;
      line-height: 1.1;
    }

    .sanika-home-tagline {
      max-width: 590px;
      margin: 0 0 22px;
      color: #ededee;
      font-size: clamp(25px, 2.5vw, 32px);
      font-weight: 700;
      line-height: 1.45;
      letter-spacing: -1px;
    }

    .sanika-home-description {
      max-width: 650px;
      margin: 0 0 32px;
      color: #a1a1a6;
      font-size: 17px;
      line-height: 1.9;
    }

    .sanika-home-buttons {
      display: flex;
      align-items: center;
      gap: 17px;
      flex-wrap: wrap;
      margin-bottom: 28px;
    }

    .sanika-home-button {
      min-height: 50px;
      padding: 0 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      border: 1px solid #414348;
      border-radius: 4px;
      text-decoration: none;
      font-family: monospace;
      font-size: 14px;
      transition:
        background 0.2s,
        color 0.2s,
        border-color 0.2s;
    }

    .sanika-home-button-primary {
      color: #171717;
      background: #ededee;
      border-color: #ededee;
    }

    .sanika-home-button-primary:hover {
      background: #fb923c;
      border-color: #fb923c;
    }

    .sanika-home-button-secondary {
      color: #ededee;
      background: transparent;
    }

    .sanika-home-button-secondary:hover {
      border-color: #fb923c;
      color: #fb923c;
    }

    .sanika-home-links {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
    }

    .sanika-home-links a {
      color: #a1a1a6;
      font-family: monospace;
      font-size: 14px;
      text-decoration: none;
      transition: color 0.2s;
      cursor: pointer;
    }

    .sanika-home-links a:hover {
      color: #fb923c;
    }

    .sanika-home-image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 0;
    }

    .sanika-home-image-frame {
      width: 320px;
      height: 320px;
      padding: 5px;
      border: 2px solid #fb923c;
      border-radius: 50%;
      background: #181a1d;
      box-shadow: 0 0 35px #fb923c18;
      overflow: hidden;
      flex-shrink: 0;
    }

    .sanika-home-image {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center top;
      border-radius: 50%;
    }

    @media (max-width: 1150px) {
      .sanika-home-inner {
        padding-left: 28px;
        padding-right: 28px;
        gap: 35px;
      }

      .sanika-home-image-frame {
        width: 290px;
        height: 290px;
      }
    }

    @media (max-width: 768px) {
      .sanika-home-inner {
        min-height: auto;
        grid-template-columns: 1fr;
        gap: 40px;
        padding-top: 65px;
        padding-bottom: 60px;
      }

      .sanika-home-image-wrapper {
        grid-row: 1;
      }

      .sanika-home-image-frame {
        width: 250px;
        height: 250px;
      }

      .sanika-home-content {
        grid-row: 2;
      }

      .sanika-home-name {
        font-size: clamp(45px, 8vw, 65px);
        letter-spacing: -2.5px;
      }

      .sanika-home-description {
        font-size: 17px;
      }
    }

    @media (max-width: 480px) {
      .sanika-home-inner {
        padding: 45px 20px;
      }

      .sanika-home-role {
        font-size: 12px;
      }

      .sanika-home-name {
        font-size: 43px;
        letter-spacing: -1.8px;
        overflow-wrap: anywhere;
      }

      .sanika-home-tagline {
        font-size: 25px;
      }

      .sanika-home-description {
        font-size: 16px;
      }

      .sanika-home-buttons {
        align-items: stretch;
        flex-direction: column;
      }

      .sanika-home-button {
        width: 100%;
      }

      .sanika-home-image-frame {
        width: 220px;
        height: 220px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <section id="home" className="sanika-home">
        <div className="sanika-home-inner">
          <div className="sanika-home-content">
            <p className="sanika-home-role">
              ▪ Software Developer Aspirant · India
            </p>

            <h1 className="sanika-home-name">
              Sanika Kadam
            </h1>

            <h2 className="sanika-home-tagline">
              I build web applications and bring ideas to life.
            </h2>

            <p className="sanika-home-description">
              Computer Science Engineering student graduating in 2027,
              passionate about problem-solving and web development.
              I enjoy building efficient, responsive, and user-friendly
              applications using modern technologies while continuously
              learning and growing as a developer.
            </p>

            <div className="sanika-home-buttons">
              <a
                className="sanika-home-button sanika-home-button-primary"
                href="#projects"
              >
                See the work <span>→</span>
              </a>

              <a
                className="sanika-home-button sanika-home-button-secondary"
                href="#contact"
              >
                Get in touch
              </a>
            </div>

            <div className="sanika-home-links">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume ↗
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=Sanikavijaykadam2005%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email ↗
              </a>
            </div>
          </div>

          <div className="sanika-home-image-wrapper">
            <div className="sanika-home-image-frame">
              <img
                src={sanikaImage}
                alt="Sanika Kadam"
                className="sanika-home-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
