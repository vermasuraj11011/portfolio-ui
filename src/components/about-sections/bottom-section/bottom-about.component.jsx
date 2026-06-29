import Button from "../../button/button.component";
// import resume_link from "../../../assets/Suraj_Verma.pdf";
import "./bottom-about.styles.scss";


const resume_link = "https://drive.google.com/file/d/1PO2lIJ6dNLEWVRy8eC6TkQED11eFh5Sh/view?usp=sharing"


const resumeButton = [
    {
        title: "View CV",
        target: "_blank",
        classes: "button",
        values: "View Resume",
    },
    {
        title: "Download CV",
        target: "_blank",
        download: "Suraj_Verma_resume",
        classes: "button",
        values: "Download Resume",
    },
];

const BottomAboutSection = () => {
    return (
        <div className="bottom-about-container">
            {resumeButton.map((resume_button) => {
                return (
                    <Button
                        key={resume_button.values}
                        param={resume_button}
                        resume_path={resume_link}
                    />
                );
            })}
        </div>
    );
};

export default BottomAboutSection;
