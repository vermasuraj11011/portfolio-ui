import {Fragment} from "react";

import Home from "../home/home.component";
import About from "../about/about.component";
import Project from "../project/project.component";
import Experience from "../experience/experience.component";
import Contact from "../contact/contact.component";

const RootPage = () => {
  return (
    <Fragment>
      <Home/>
      <About/>
      <Project/>
      <Experience/>
      <Contact/>
    </Fragment>
  );
};

export default RootPage;
