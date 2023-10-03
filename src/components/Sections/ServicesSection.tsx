"use client";

import React from "react";
import Link from "next/link";

import { styles } from "@utils/styles";
import { Container, Row, Col } from "react-bootstrap";

const ServicesSection = () => {
  const services = [
    {
      to: "/service/logo",
      title: "Community Engagement",
      description:
        "Engage your audience with a diverse set of marketing campaigns to target growth and engagement. With the goal of keeping your members more active and immersed in the content of your project, community engagement increases conversion rate and leverages your community as a marketing asset.",
      icon: "ml-des-62-Precision-compasses-graphics-design-tool-interface",
      style: styles("cd"),
    },
    {
      to: "/service/website/design",
      title: "Social Media Management",
      description:
        "Get all your different social media platforms managed for you, we will make sure that all posts are posted at the most active times as well as advise you what content is working best according to the metrics.",
      icon: "ml-des-57-upload-download-sync-application-device-mobile-computer",
      style: styles("ab"),
    },
    {
      to: "/service/mobile",
      title: "Web Traffic & SEO",
      description:
        "Drive traffic to your website from social media platforms using traffic campaigns to get your project more visibility. Implementing state of the art search engine optimization for keywords or your choice and climbing the rankings all the way to the top.",
      icon: "ml-tec-45-responsive-mobile-phone-tablet-computer-desktop-monitor-laptop",
      style: styles("ef"),
    },
    {
      to: "/service/seo",
      title: "Organic Promotion",
      description:
        "Lucrative marketing strategy where you are able to create and ecosystem of different targeted accounts to allow your content to go further and get more reach. Using these accounts we can drive the traffic back to your page exponentially scaling your content and reach.",
      icon: "ml-tec-8-search-magnifier-computer-desktop-monitor-laptop",
      style: styles("cd"),
    },
    {
      to: "/service/ppc",
      title: "Content",
      description:
        "Create content for social media such as short form, long form clips, pictures, and more. Used for keeping social media engaged as well as advertisements for any other campaigns.",
      icon: "ml-symtwo-34-cursor-click-browser-website-arrow-computer",
      style: styles("ab"),
    },
  ];

  return (
    <section className="services z-3">
      <Container>
        <Row className="justify-content-center">
          {services.map(({ to, title, description, icon, style }, index) => {
            return (
              <Col md={6} lg={4} key={index} className="mb-5" data-aos="fade-up">
                <Link href={to} className="service-box text-center content-block">
                  <div className={`box-bg ${style.box}`}></div>
                  <span
                    className={`icon-container ${style.light}`}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className={`${icon} ${style.icon}`}></i>
                  </span>
                  <h5 className="text-center">{title}</h5>
                  <p className="color-p-desc">{description}</p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export { ServicesSection };
