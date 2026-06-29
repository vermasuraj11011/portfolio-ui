import "./top-about.styles.scss";
import myImage from "../../../assets/images/suraj_verma.jpg";

const TopAboutSection = () => {
  return (
    <div className="top-about-container">
      <div className="my-image">
        <img src={myImage} alt="Surav Verma"/>
      </div>
      <div className="image-left">
        <p>
          A full stack web developer having excellent knowledge on
          <span> Backend</span> and System Design
        </p>
      </div>
    </div>
  );
};

export default TopAboutSection;
