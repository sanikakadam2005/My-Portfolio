
import React from "react";

import generativeAICertificate from "../assets/Generative AI.jpg";
import sqlCertificate from "../assets/SQL.jpg";
import htmlCssCertificate from "../assets/HtTML&CSS.jpeg";
import internshipCertificate from "../assets/Internship.jpg";

function Certifications() {
  const items = [
    {
      title: "Generative AI",
      provider: "Certificate Provider",
      description:
        "Certificate covering Generative AI concepts and applications.",
      status: "Certificate",
      image: generativeAICertificate,
      fileName: "Generative-AI-Certificate.jpg",
    },
    {
      title: "SQL",
      provider: "Certificate Provider",
      description:
        "Certificate covering SQL queries and database fundamentals.",
      status: "Certificate",
      image: sqlCertificate,
      fileName: "SQL-Certificate.jpg",
    },
    {
      title: "HTML & CSS",
      provider: "Certificate Provider",
      description:
        "Certificate covering HTML webpage structure, CSS styling, and responsive design.",
      status: "Certificate",
      image: htmlCssCertificate,
      fileName: "HTML-CSS-Certificate.jpeg",
    },
    {
      title: "Web Development Internship",
      provider: "Infoyashonand Technology Pvt. Ltd.",
      description:
        "Practical experience working with web development technologies.",
      status: "Internship Experience",
      image: internshipCertificate,
      fileName: "Web-Development-Internship-Certificate.jpg",
    },
  ];

  const styles = `
    .certifications-sanika,
    .certifications-sanika * {
      box-sizing: border-box;
    }

    .certifications-sanika {
      width: 100%;
      min-height: 100vh;
      padding: 80px 8%;
      background: #111315;
      color: #ededee;
      font-family: Arial, Helvetica, sans-serif;
    }

    /* Orange accent only for the section label */
    .certifications-sanika .label {
      color: #fb923c;
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: bold;
    }

    .certifications-sanika h2 {
      color: #ededee;
      font-size: 38px;
      margin: 12px 0 35px;
    }

    .certifications-sanika .grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }

    .certifications-sanika .card {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 0;
      padding: 28px;
      background: #151719;
      border: 1px solid #292b2e;
      border-radius: 12px;

      transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        background 0.3s ease;
    }

    /* Orange border and glow on card hover */
    .certifications-sanika .card:hover {
      background: #191b1e;
      border-color: #fb923c;
      box-shadow:
        0 0 8px rgba(251, 146, 60, 0.25),
        0 0 20px rgba(251, 146, 60, 0.12);
    }

    .certifications-sanika .certificate-type {
      display: inline-block;
      margin-bottom: 18px;
      padding: 6px 11px;
      color: #d4d4d8;
      background: #202225;
      border: 1px solid #393b3f;
      border-radius: 20px;
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    .certifications-sanika .card h3 {
      color: #ededee;
      font-size: 21px;
      line-height: 1.5;
      margin: 0 0 10px;
    }

    .certifications-sanika .provider {
      color: #d4d4d8;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.7;
      margin: 0 0 10px;
    }

    .certifications-sanika .description {
      color: #b7b7bd;
      font-size: 15px;
      line-height: 1.8;
      margin: 0 0 14px;
    }

    .certifications-sanika .status {
      color: #b7b7bd;
      font-size: 13px;
      margin: 0 0 22px;
    }

    .certifications-sanika .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: auto;
    }

    .certifications-sanika .certificate-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 11px 16px;
      background: transparent;
      color: #ededee;
      border: 1px solid #55565a;
      border-radius: 7px;
      font-size: 14px;
      font-weight: 600;
      font-family: inherit;
      text-decoration: none;
      cursor: pointer;

      transition:
        background 0.2s ease,
        border-color 0.2s ease;
    }

    .certifications-sanika .certificate-button:hover {
      background: #26282b;
      border-color: #929297;
    }

    .certifications-sanika .certificate-button:focus-visible {
      outline: 2px solid #ededee;
      outline-offset: 3px;
    }

    @media (max-width: 850px) {
      .certifications-sanika {
        padding: 65px 6%;
      }
    }

    @media (max-width: 600px) {
      .certifications-sanika {
        padding: 55px 6%;
      }

      .certifications-sanika h2 {
        font-size: 30px;
      }

      .certifications-sanika .grid {
        grid-template-columns: 1fr;
      }

      .certifications-sanika .card {
        padding: 22px;
      }
    }

    /* Respect reduced-motion preferences */
    @media (prefers-reduced-motion: reduce) {
      .certifications-sanika .card,
      .certifications-sanika .certificate-button {
        transition: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <section
        id="certifications"
        className="certifications-sanika"
      >
        <div className="label">
          LEARNING AND DEVELOPMENT
        </div>

        <h2>Certifications</h2>

        <div className="grid">
          {items.map((item) => (
            <article className="card" key={item.title}>
              <span className="certificate-type">
                {item.status}
              </span>

              <h3>{item.title}</h3>

              <p className="provider">
                {item.provider}
              </p>

              <p className="description">
                {item.description}
              </p>

              <p className="status">
                View the original certificate or download a copy.
              </p>

              <div className="actions">
                <a
                  className="certificate-button"
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>

                <a
                  className="certificate-button"
                  href={item.image}
                  download={item.fileName}
                >
                  Download Certificate
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Certifications;
