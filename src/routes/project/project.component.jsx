import "./project.styles.scss";
import easemytrip from "../../assets/project-image/EaseMyTrip.png";
import contact_manager from "../../assets/project-image/contact_manager.png";
import blogging_app from "../../assets/project-image/blogging_app.png";
import course_app from "../../assets/project-image/course_app.png";
import shineAppClone from "../../assets/project-image/shineAppClone.png";
import Medikal from "../../assets/project-image/Medikal.png";

import React, {useEffect} from "react";
import AOS from "aos";
import ProjectCard from "../../components/project-card/project-card.component";

const projectData = [
  {
    title: "Contact Manager App",
    description: "A web application where user can manage contacts.",
    stack: [
      "Java",
      "SpringBoot",
      "AWS SQS",
      "Lambda",
      "SES",
      "Razorpay",
      "MySql",
      "Spring Security",
      "Thymeleaf",
      "Python",
    ],
    image: contact_manager,
    github: "https://github.com/vermasuraj11011/ContactManager",
    live: "https://github.com/vermasuraj11011/ContactManager",
  },
  {
    title: "Bloggin Application",
    description:
      "It is a secure server side application where user can create blog, also look for others blogs.User can do cattegory base searching. We have implemented JWT token for authentication. We have also implemented Swagger Api for documentation. ",
    stack: ["Java", "SpringBoot", "MySql", "Spring Security", "Swagger Api"],
    image: blogging_app,
    github: "https://github.com/vermasuraj11011/bloging",
    live: "https://live.com",
  },
  {
    title: "Course Application",
    description:
      "A client side application where client can manage courses data and other user can view and subscribe to the course.",
    stack: ["React", "HTML", "CSS", "Javascript"],
    image: course_app,
    github: "https://github.com/vermasuraj11011/React_Basic",
    live: "https://live.com",
  },
  {
    title: "Shine.com Clone",
    description:
      "A web application use for getting jobs, we have implemented job search feature and basic authentication for the user.",
    stack: ["HTML", "CSS", "Javascript"],
    image: shineAppClone,
    github: "https://github.com/vermasuraj11011/Shine-Clone",
    live: "https://shine-clone.netlify.app/",
  },
  {
    title: "Medikal Mobile App",
    description:
      "An online platform where user can search the required medicine and get it dilevered to Home. We have implemented otp verification and our main focus was on tracking the parcel delivered to the user.",
    stack: ["HTML", "CSS", "JavaScript", "Spring Boot", "MySql"],
    image: Medikal,
    github: "https://github.com/rahul428428/ePharmacy-Clone",
    live: "https://medikal.netlify.app/",
  },
  {
    title: "EaseMyTrip.com Clone",
    description:
      "An online platform which is used for booking trips, we implemented flight booking feature using self made APIs. feature.",
    stack: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
    image: easemytrip,
    github: "https://github.com/vermasuraj11011/EaseMyTrip-clone",
    live: "https://easemytrip.netlify.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div id="project" className="project">
      <div className="project-container">
        <div className="project-heading-container">
          <h3 className="project-heading">PROJECTS</h3>
          <p className="project-heading-p1">Check Out Some of My Projects</p>
          <p className="project-heading-p2">
            These Projects have helped me develop my Skills and understand the
            Industry better.
          </p>
        </div>
        <div className="project-list-container">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
