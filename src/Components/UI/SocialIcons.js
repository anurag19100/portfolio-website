import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import {
  SiCodechef,
  SiCodeforces,
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  const Details = [
    {
      iconName: AiFillGithub,
      iconUrl: "https://github.com/soumyajit4419",
    },
    {
      iconName: AiOutlineTwitter,
      iconUrl: "https://github.com/soumyajit4419",
    },
    {
      iconName: FaLinkedinIn,
      iconUrl: "https://github.com/soumyajit4419",
    },
    {
      iconName: AiFillMail,
      iconUrl: "https://github.com/soumyajit4419",
    },
    {
      iconName: SiCodechef,
      iconUrl: "https://github.com/soumyajit4419",
    },
    {
      iconName: SiCodeforces,
      iconUrl: "https://github.com/soumyajit4419",
    },
    {
      iconName: SiLeetcode,
      iconUrl: "https://github.com/soumyajit4419",
    },
    {
      iconName: SiHackerrank,
      iconUrl: "https://github.com/soumyajit4419",
    },
  ];

  return (
    <Container>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>

          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/soumyajit4419/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiCodechef />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiCodeforces />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiHackerrank />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialIcons;
