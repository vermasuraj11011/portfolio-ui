import "./project-card.styles.scss";
import "../../assets/project-image/contact_manager.png";
import "../../assets/project-image/blogging_app.png";
import "aos/dist/aos.css";
import Button from "../button/button.component";


const ProjectCard = ({project, index}) => {
    const {title, description, stack, image, github, live} = project;

    return (
        <div className={`project-card ${index % 2 === 0 ? "" : "reverse"}`}>
            <div
                className="project-card-image"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
                <img className="project-image" src={image} alt="project"/>
            </div>
            <div
                className="project-card-content"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
                <h3
                    className={`project-card-heading ${
                        index % 2 === 1 ? "right-align" : ""
                    }`}
                >
                    {title}
                </h3>
                <p
                    className={`project-card-description ${
                        index % 2 === 1 ? "right-align" : ""
                    }`}
                >
                    {description}
                </p>

                <div className="project-card-stack">
                    {stack.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
                <div className="project-card-links">
                    <Button href={github} target="_blank">
                        Github
                    </Button>
                    <Button href={live} target="_blank">
                        Live
                    </Button>
                </div>
            </div>
        </div>
    );
};


/* <h3 className="project-card-heading">{title}</h3>
      <p className="project-card-description">{description}</p> */


// const ProjectCard = ({ project, index }) => {
//   const { title, description, stack, image, github, live } = project;
//   console.log(image);
//   return (
//     <div className={`project-card ${index % 2 === 0 ? "" : "reverse"}`}>
//       <div className="project-card-image">
//         <img className="project-image" src={image} alt="project" />
//       </div>
//       <div className="project-card-content">
//         <h3 className="project-card-heading">{title}</h3>
//         <p className="project-card-description">{description}</p>
//         <div className="project-card-stack">
//           {stack.map((item, index) => (
//             <span key={index}>{item}</span>
//           ))}
//         </div>
//         <div className="project-card-links">
//           <a href={github} target="_blank">
//             Github
//           </a>
//           <a href={live} target="_blank">
//             Live
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ProjectCard;
