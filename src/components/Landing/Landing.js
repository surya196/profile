import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa";

function Landing() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "10px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "10px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.backgroundColor1 }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.medium && (
              <a href={socialsData.medium} target="_blank" rel="noreferrer">
                <FaMedium
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="medium"
                />
              </a>
            )}
            {socialsData.stackOverflow && (
              <a
                href={socialsData.stackOverflow}
                target="_blank"
                rel="noreferrer"
              >
                <FaStackOverflow
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="stackOverflow"
                />
              </a>
            )}
          </div>
        </div>
        <img src={headerData.image} alt="" className="landing--img" />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.backgroundColor1 }}
        >
          <div className="lcr--content" style={{ color: theme.secondary }}>
            <h6>{headerData.title1}</h6>
            <h1 style={{ color: theme.primary }}>{headerData.name}</h1>
            <h6>{headerData.title}</h6>
            <p>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes.resumeBtn}>Download CV</Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
