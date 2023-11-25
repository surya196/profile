import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import "./Skills.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

function Skills() {
  const { theme } = useContext(ThemeContext);

  const skillBoxStyle = {
    boxShadow: `0px 0px 20px ${theme.secondary10}`,
  };

  return (
    <div className="skills" style={{ backgroundColor: theme.background2 }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            gradient={false}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <div className="skill--box--img--wrapper">
                  <img src={skillsImage(skill)} alt={skill} />
                </div>
                <div className="skill--box--text--wrapper">
                  <h3 style={{ color: theme.secondary10 }}>{skill}</h3>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
