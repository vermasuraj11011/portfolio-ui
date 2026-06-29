import "./mid-about.styles.scss";
import CommonMid from "./common-mid.component";
import SkillAndFramework from "./skill-framework.component";

const profleContentList = {
  profile: [
    "PROFILE",
    "Driven by passion and precision, I'm a software developer dedicated to excellence. Specializing in backend development, I excel in crafting robust solutions with technologies like Play, SpringBoot, spark and AWS. I eagerly embrace new trends to stay ahead. Recently, I've ventured into machine learning, expanding my skill set and driving innovation. With each project, I aim not just to meet expectations but to exceed them, pushing the boundaries of what's possible in software development.",
  ],
  email: ["EMAIL:", "vermasuraj008@gmail.com"],
  skill: ["LANGUAGES", "English, Hindi & Brij"],
  hobbies: ["HOBBIES", "Chess, Reading & Coding"],
};

const MidAboutSection = () => {
  const keyValueProfile = Object.entries(profleContentList);

  return (
    <div className="mid-about-container">
      <div className="mid-about-left">
        {keyValueProfile.map(([key, value]) => {
          return (
            <CommonMid
              key={key}
              classes={key}
              heading={value[0]}
              values={value[1]}
            />
          );
        })}
      </div>
      <div className="mid-about-right">
        <div className="skill-heading">
          <h4 className="heading">Skills & Framework</h4>
        </div>
        <div className="skill-content">
          <SkillAndFramework/>
        </div>
      </div>
    </div>
  );
};

export default MidAboutSection;
