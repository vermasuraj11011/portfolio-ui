import "./about.styles.scss";
import TopAboutSection from "../../components/about-sections/top-section/top-about.component";
import MidAboutSection from "../../components/about-sections/mid-section/mid-about.component";
import BottomAboutSection from "../../components/about-sections/bottom-section/bottom-about.component";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="heading-about about-div">
        <h3>About</h3>
        <p>Let me introduce myself.</p>
      </div>
      <div className="top-about about-div">
        <TopAboutSection/>
      </div>
      <div className="mid-about about-div">
        <MidAboutSection/>
      </div>
      <div className="bottom-about about-div">
        <BottomAboutSection/>
      </div>
    </div>
  );
};

export default About;
