
import React from "react";

function Contact() {
  const styles = `
    .contact-sanika,
    .contact-sanika * {
      box-sizing: border-box;
    }

    .contact-sanika {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      padding: 90px 8%;
      background: #121416;
      color: #eceef0;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      border-bottom: 1px solid #303438;
      scroll-margin-top: 85px;
    }

    .contact-sanika::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(230, 160, 75, 0.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(230, 160, 75, 0.045) 1px, transparent 1px);
      background-size: 38px 38px;
      mask-image: linear-gradient(
        to bottom,
        transparent,
        black 15%,
        black 85%,
        transparent
      );
    }

    .contact-sanika .contact-container {
      position: relative;
      isolation: isolate;
      width: 100%;
      max-width: 760px;
      margin: 0 auto;
      padding: 42px 35px;
      background: #121416;
      border: 1px solid #34383c;
      border-radius: 6px;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
    }

    .contact-sanika .contact-container::after {
      content: "";
      position: absolute;
      inset: -1px;
      z-index: -1;
      border-radius: inherit;
      padding: 1px;
      background: conic-gradient(
        from var(--glow-angle, 0deg),
        transparent 0deg,
        transparent 245deg,
        #e6a04b 295deg,
        #f5d3a1 315deg,
        transparent 345deg,
        transparent 360deg
      );
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
      animation: contact-glow-rotate 6s linear infinite;
    }

    @property --glow-angle {
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes contact-glow-rotate {
      to {
        --glow-angle: 360deg;
      }
    }

    .contact-sanika .contact-container::before {
      content: "";
      position: absolute;
      top: -1px;
      left: 15%;
      width: 70%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        #e6a04b,
        transparent
      );
      box-shadow: 0 0 12px rgba(230, 160, 75, 0.35);
      pointer-events: none;
    }

    .contact-sanika .contact-label {
      margin: 0 0 18px;
      color: #e6a04b;
      font-family: monospace;
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 2px;
    }

    .contact-sanika .contact-heading {
      margin: 0 0 18px;
      color: #eceef0;
      font-size: clamp(34px, 5vw, 48px);
      line-height: 1.15;
      letter-spacing: -1.8px;
    }

    .contact-sanika .contact-description {
      max-width: 540px;
      margin: 0 auto;
      color: #a1a5aa;
      font-size: 15px;
      line-height: 1.9;
    }

    .contact-sanika .email-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 30px auto 0;
    }

    .contact-sanika .email-button {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      min-height: 50px;
      padding: 14px 25px;
      background: #1b1e21;
      color: #eceef0;
      border: 1px solid #3a3e42;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      overflow: hidden;
      cursor: pointer;
      transition:
        background 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        transform 0.3s ease;
    }

    .contact-sanika .email-button:hover {
      background: #222528;
      color: #e6a04b;
      border-color: #e6a04b;
      box-shadow:
        0 0 8px rgba(230, 160, 75, 0.18),
        0 0 22px rgba(230, 160, 75, 0.10);
      transform: translateY(-2px);
    }

    .contact-sanika .email-button .arrow {
      color: #e6a04b;
      font-size: 18px;
      line-height: 1;
      transition: transform 0.3s ease;
    }

    .contact-sanika .email-button:hover .arrow {
      transform: translateX(4px);
    }

    .contact-sanika .socials {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 26px;
      margin-top: 30px;
      padding-top: 24px;
      border-top: 1px solid #303438;
    }

    .contact-sanika .socials a {
      color: #a1a5aa;
      font-size: 14px;
      text-decoration: none;
      transition: color 0.3s ease, text-shadow 0.3s ease;
    }

    .contact-sanika .socials a:hover {
      color: #e6a04b;
      text-shadow: 0 0 10px rgba(230, 160, 75, 0.3);
    }

    .contact-sanika .contact-note {
      margin: 25px 0 0;
      color: #777d83;
      font-size: 12px;
      line-height: 1.8;
    }

    @media (max-width: 550px) {
      .contact-sanika {
        padding: 60px 18px;
      }

      .contact-sanika .contact-container {
        padding: 35px 20px;
      }

      .contact-sanika .contact-heading {
        font-size: clamp(32px, 8vw, 40px);
        letter-spacing: -1px;
      }

      .contact-sanika .contact-description {
        font-size: 14px;
      }

      .contact-sanika .socials {
        gap: 18px;
      }

      .contact-sanika .email-button {
        padding: 13px 18px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .contact-sanika .contact-container::after {
        animation: none;
      }

      .contact-sanika .email-button,
      .contact-sanika .email-button .arrow,
      .contact-sanika .socials a {
        transition: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <section id="contact" className="contact-sanika">
        <div className="contact-container">
          <p className="contact-label">CONTACT</p>

          <h2 className="contact-heading">
            Let's build something useful.
          </h2>

          <p className="contact-description">
            Interested in software development opportunities,
            internships, or collaboration? Feel free to reach out.
            I'd love to connect and learn something new.
          </p>

          <div className="email-wrapper">
            <a
              className="email-button"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Sanikavijaykadam2005%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>✉ Send Me an Email</span>
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/sanikakadam2005"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sanika-vijay-kadam"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ LinkedIn
            </a>
          </div>

          <p className="contact-note">
            Sangli, Maharashtra, India · Open to internship opportunities
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
