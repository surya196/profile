import React from "react";
import { Helmet } from "react-helmet";
import {
  Landing,
  About,
  Skills,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contacts />
    </div>
  );
}

export default Main;
