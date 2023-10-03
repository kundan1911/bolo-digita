"use client";

import React from "react";
import Link from "next/link";

// import { Newsletter } from "@components/Footer/Newsletter";
import { SocialIcons } from "@components/SocialIcons";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const services = [
    { to: "/service/website/design", label: "Community Engagement" },
    { to: "/service/website/development", label: "Social Media Management" },
    { to: "/service/logo", label: "Web Traffic & SEO" },
    { to: "/service/mobile", label: "Organic Promotion" },
    { to: "/service/ppc", label: "Content" },
    { to: "/service/seo", label: "Data Prospecting" },
    { to: "/service/smm", label: "CRM" },
  ];

  const supports = [
    { to: "/privacy/policy", label: "Privacy Policy" },
    { to: "/terms/and/conditions", label: "Terms & Conditions" },
    { to: "/legal/notice", label: "Legal Notice" },
  ];

  const resources = [
    { to: "/portfolio", label: "Portfolio" },
    { to: "/studies", label: "Case Studies" },
    { to: "/about", label: "About" },
  ];

  return (
    <React.Fragment>
      {/* <Newsletter /> */}
      <footer className="small-agency-footer grey-bg">
        <div className="footer-nav-wrapper">
          <Container>
            <Row>
              <Col md={1}>
                <SocialIcons />
              </Col>
              <Col md={3}>
                <nav className="footer-nav">
                  <h5>Services</h5>
                  <ul className="footer-menu">
                    {services.map(({ to, label }, index) => {
                      return (
                        <li key={index}>
                          <Link href={to}>{label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </Col>
              <Col md={3}>
                <nav className="footer-nav">
                  <h5>Supports</h5>
                  <ul className="footer-menu">
                    {supports.map(({ to, label }, index) => {
                      return (
                        <li key={index}>
                          <Link href={to}>{label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </Col>
              <Col md={3}>
                <nav className="footer-nav">
                  <h5>Resources</h5>
                  <ul className="footer-menu">
                    {resources.map(({ to, label }, index) => {
                      return (
                        <li key={index}>
                          <Link href={to}>{label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <p className="text-center">
              &copy; 2023-2024. All rights reserved by
              <a href="/"> BOLO DIGITAL</a>
            </p>
          </Container>
        </div>
      </footer>
    </React.Fragment>
  );
};

export { Footer };
