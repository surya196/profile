import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Experience.css";
import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="experience"
      id="experience"
      style={{ backgroundColor: theme.background1 }}
    >
      <div className="line-styling">
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line1"
          style={{ backgroundColor: theme.secondary }}
        ></div>
      </div>
      <div className="experience-body">
        <div className="experience-image">
          <img src={theme.expimg} alt="" />
        </div>
        <div className="experience-description">
          <h1 style={{ color: theme.primary }}>Experience</h1>

          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
