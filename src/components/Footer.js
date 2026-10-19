
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const styles = `
    .portfolio-footer,
    .portfolio-footer * {
      box-sizing: border-box;
    }

    .portfolio-footer {
      position: relative;
      overflow: hidden;
      background: #111315;
      color: #ededee;
      padding: 55px 8% 22px;
      font-family: Arial, Helvetica, sans-serif;
      border-top: 1px solid #292b2e;
    }

    .footer-container {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 40px;
    }

    .footer-brand h2 {
      color: #ededee;
      font-size: 25px;
      margin: 0 0 14px;
      letter-spacing: 0.5px;
    }

    .footer-brand p {
      color: #b7b7bd;
      line-height: 1.8;
      font-size: 14px;
      max-width: 350px;
      margin: 0;
    }

    .footer-column h3 {
      position: relative;
      display: inline-block;
      color: #ededee;
      font-size: 16px;
      margin: 0 0 22px;
    }

    /* Small orange underline */
    .footer-column h3::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 28px;
      height: 2px;
      background: #fb923c;
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    .footer-column:hover h3::after {
      width: 48px;
    }

    .footer-column a {
      display: block;
      width: fit-content;
      color: #b7b7bd;
      text-decoration: none;
      margin-bottom: 13px;
      font-size: 14px;
      transition:
        color 0.25s ease,
        transform 0.25s ease;
    }

    .footer-column a:hover {
      color: #fb923c;
      transform: translateX(4px);
    }

    .footer-column p {
      color: #b7b7bd;
      line-height: 1.8;
      font-size: 14px;
      margin: 5px 0 0;
    }

    .footer-socials {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 20px;
    }

    .footer-socials a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #d4d4d8;
      background: #151719;
      text-decoration: none;
      border: 1px solid #393b3f;
      padding: 9px 15px;
      border-radius: 7px;
      font-size: 13px;
      font-weight: 600;
      transition:
        color 0.3s ease,
        background 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        transform 0.3s ease;
    }

    .footer-socials a:hover {
      color: #ededee;
      background: #191b1e;
      border-color: #fb923c;
      box-shadow:
        0 0 7px rgba(251, 146, 60, 0.22),
        0 0 15px rgba(251, 146, 60, 0.10);
      transform: translateY(-3px);
    }

    .footer-bottom {
      max-width: 1100px;
      margin: 40px auto 0;
      padding-top: 20px;
      border-top: 1px solid #292b2e;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      flex-wrap: wrap;
      font-size: 13px;
      color: #9b9ba3;
    }

    .footer-bottom p {
      margin: 0;
      line-height: 1.7;
    }

    .back-to-top {
      display: inline-block;
      color: #d4d4d8;
      text-decoration: none;
      font-weight: 600;
      transition:
        color 0.25s ease,
        transform 0.25s ease;
    }

    .back-to-top:hover {
      color: #fb923c;
      transform: translateY(-2px);
    }

    .footer-column a:focus-visible,
    .footer-socials a:focus-visible,
    .back-to-top:focus-visible {
      outline: 2px solid #fb923c;
      outline-offset: 4px;
      border-radius: 3px;
    }

    @media (max-width: 800px) {
      .footer-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 35px;
      }

      .footer-brand {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 550px) {
      .portfolio-footer {
        padding: 45px 6% 20px;
      }

      .footer-container {
        grid-template-columns: 1fr;
        gap: 28px;
      }

      .footer-brand {
        grid-column: auto;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
        margin-top: 30px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .portfolio-footer *,
      .portfolio-footer *::before,
      .portfolio-footer *::after {
        transition: none !important;
        transform: none !important;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <footer className="portfolio-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>Sanika Kadam</h2>

            <p>
              Final-year Computer Science Engineering student passionate
              about Python Full Stack Development and building useful
              web applications.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com/sanikakadam2005"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>

            <a href="mailto:your-email@example.com">
              Email Me ↗
            </a>

            <p>
              Open to learning, collaboration, and internship
              opportunities.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Sanika Kadam. All rights reserved.
          </p>

          <a className="back-to-top" href="#home">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
