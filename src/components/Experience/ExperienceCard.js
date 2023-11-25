import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/ThemeContext";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import "./Experience.css";

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary10,
      "&:hover": {
        backgroundColor: theme.primary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`experience-card ${classes.experienceCard}`}>
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img src={expImgBlack} alt="" />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.secondary10 }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.secondary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.secondary }}>{company}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
