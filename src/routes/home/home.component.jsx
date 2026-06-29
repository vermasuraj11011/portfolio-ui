import React from "react";
import {Link} from "react-scroll";
import "./home.styles.scss";
import MoreAboutMe from "../../components/more-about-me/more-about-me.component";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-overlay"></div>
      <div className="home-container">
        <div className="home-content">
          <div className="content-container">
            <h5 className="hello-world">Hello, World.</h5>
            <h1 className="my-name">
              I'm <span>Suraj Verma</span>.
            </h1>
            <p className="full-stack-developer">
              <span>Full Stack Developer</span>
            </p>
            <Link
              className="more-about-me-a"
              to="about"
              smooth={true}
              duration={500}
            >
              <MoreAboutMe/>
            </Link>
          </div>
        </div>
        <div className="home-social">
          <a className="social linkedin" href="https://www.linkedin.com/in/surajverma008" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa fa-linkedin"></i>
          </a>
          <a className="social github" href="https://github.com/vermasuraj11011" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
