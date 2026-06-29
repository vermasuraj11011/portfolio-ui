import "./experience.styles.scss";
import {useEffect, useState} from "react";
import CompanyCard from "../../components/company/company-card.component";
import AOS from "aos";

const Experience = () => {
    const [selectedCompany, setSelectedCompany] = useState("unify_tech");
    const [addClass, setAddClass] = useState("");

    const onClickHandler = (company) => {
        setSelectedCompany(company);
        setAddClass("");
        setTimeout(() => setAddClass("experience-right-bottom-up-animation"), 0);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const companies = {
        unify_tech: {
            name: "Unify Technologies",
            from: "Sep 2024 - Present",
            role: "Software Developer",
            description: "Working on the Apple Maps project, focused on building large-scale address automation and geospatial data processing solutions. The project involves ingesting raw location data from multiple vendors, processing and enriching it through big data pipelines, and delivering high-quality geospatial information for Apple Maps.",
            stacks: [
                "Scala",
                "Java",
                "Play",
                "Spark",
                "Cassandra",
                "Python",
                "Fast Api",
                "Jenkins",
                "Apache Airflow",
                "AWS EMR",
                "Splunk"
            ],
            work: [
                "Developed scalable Spark-based data pipelines to ingest, validate, transform, and enrich raw geospatial data from multiple vendors.",
                "Built data processing workflows that generate refined address and place information for Apple Maps.",
                "Designed and developed multiple microservices to automate and streamline the address processing workflow.",
                "Built Python-based dashboards for monitoring data quality, pipeline performance, and operational metrics.",
                "Developed AI/ML models to improve intelligent address placement and enhance geospatial accuracy.",
                "Collaborated closely with US and European engineering teams to deliver features across global releases.",
                "Optimized Spark jobs for improved processing performance and efficient handling of large-scale datasets.",
                "Implemented REST APIs using FastAPI to support internal automation and data services.",
                "Managed code quality through PR reviews, repository maintenance, and deployment support.",
                "Worked extensively with Cassandra, Airflow, AWS EMR, and Splunk for data storage, workflow orchestration, distributed processing, and production monitoring.",
            ],
            responsibilities: [
                "Big Data Pipeline Development.",
                "Feature Development.",
                "Microservices Development & Maintenance.",
                "Pull Request Reviews & Merges.",
                "Repository Management.",
                "Cross-functional Collaboration with US & European teams.",
                "Dashboard Development using Python.",
                "AI/ML Model Development for intelligent address placement.",
                "Spark Job Development.",
                "Production Monitoring & Debugging using Splunk.",
            ]
        },
        rawcubes: {
            name: "Rawcubes",
            from: "Sep 2023 - August 2024",
            role: "Software Developer",
            description:
                "Rawcubes specializes in providing scalable and self-service analytics solutions, enabling organizations to eliminate data silos and transform raw data into actionable insights.",
            stacks: [
                "Scala",
                "Java",
                "Spring Boot",
                "Cassandra",
                "MySql",
                "Spark",
                "Big Query"
            ],
            work: [
                "Breaking down the monolithic application into microservices.",
                "Upgrading the spring and java version along with the dependencies.",
                "Added the Spring security 6 for the authentication and authorization.",
                "Fixed the performance issue related to the Cassandra query.",
                "Implemented the new feature of the spark data pipeline.",
                "Added functanility read and write data from various sources",
                "Developed multiple new APIs based on frontend requirements.",
            ],
            responsibilities: [
                "Scrum Master.",
                "Feature Development.",
                "Code Documentation.",
                "MR reviews.",
                "Repository Management.",
                "Spark Job Development.",
                "Microservices Management.",
            ],
        },
        zomentum: {
            name: "Zomentum",
            from: "Jan 2022 - Aug 2023",
            role: "Software Developer",
            description: "AI-enabled platform designed to swiftly create compelling proposals, impress your prospects, win more deals.",
            stacks: ["Scala", "Play", "AWS", "MongoDB", "DataDog", "Git Lab", "Jira"],
            work: [
                "Integrated conference platforms (Zoom, Teams, and Google Meet) into the system.",
                "Implemented MongoDB timeOut queries, including index management.",
                "Utilized AWS services such as Lambda, SES, SQS, PS store, and S3 bucket.",
                "Resolved client DKIM, SPF, and DMARCH-related issues.",
                "Analyzed DataDog logs to troubleshoot customer bugs effectively.",
                "Managed and created monitoring queries to detect failures early on.",
                "Enhanced existing features by adding customizable fields to call logs.",
                "Developed multiple new APIs based on frontend requirements.",
            ],
            responsibilities: [
                "Feature Development.",
                "Code Documentation.",
                "MR reviews.",
                "Resolving Customer bugs.",
                "Provide analytic data to Product Team.",
                "Technical Assistance to Support Teams.",
            ],
        },
        masai_school: {
            name: "Masai School",
            from: "July 2021 - Jan 2022",
            role: "Student",
            description:
                "An online coding bootcamp that offers a full-time, 30-week full-stack web development course. This is the place where I learned the basics of web development and got my hands dirty with the latest technologies. I have worked on multiple projects and learned the importance of teamwork and collaboration.",
            stacks: [
                "Java",
                "Spring Boot",
                "DSA",
                "MySql",
                "Git",
                "Express",
                "JavaScript",
                "System Design",
            ],
            work: [
                "As a student our main task was to attend daily lecture on DSA and Backend.",
                "Worked on multiple projects at the month end in the team and individual.",
                "Worked on designing a system for the RedBus, Watsapp and LMS.",
                "There we have worked on some web clone like Shine and EaseMyTrip.",
                "We have design a complete backend for delevey tracking system.",
                "There i have assisted my juniors in their projects and assignments.",
            ],
            responsibilities: [
                "12 hours of coding daily.",
                "Daily DSA and Backend classes.",
                "Daily Assignments completion.",
                "Weekly DSA tests.",
                "Monthly Projects.",
                "Mentoring Juniors.",
            ],
        },
        early_life: {
            name: "Early Life",
            role: "Mechanical Engineer",
            from: "Before July 2021",
            description:
                "In my early days of career, I embarked on a journey in the mechanical field, where i worked in corrugation and wire drawing industries. My days were spent navigating the intricacies of production and quality departments, honing my skills and gaining invaluable hands-on experience. However, the onset of the COVID-19 pandemic brought about unprecedented changes. With layoffs looming, I found myself at a crossroads. It was during this challenging period that I made the pivotal decision to pivot towards the thriving IT sector. Eager to explore new horizons, I enrolled in coding courses at Masai School, embarking on a journey of self-discovery and transformation. Since then, I have embraced the dynamic world of technology with fervor and determination, never looking back on my decision to transition into the IT industry",
            work: [
                "Worked in the production department of a corrugation industry which apply the Aluminium and Zinc coating on the CR coil.",
                "Managed the Galvanizing and Annealing process line from the central control.",
                "Worked in the quality department of a wire drawing industry which produces the machine which manufacture the wire drawing machines.",
                "In wire drawing we inspect the dimension of machine parts which later got assembled to produces the wire.",
            ],
        },
    };

    return (
        <div id="experience" className="experience">
            <div className="experience-container">
                <div className="experience-heading-container">
                    <h3>EXPERIENCE</h3>
                </div>
                <div className="experience-content-container">
                    <div className="experience-left">
                        <div className="experience-left-arrow"></div>
                        {Object.keys(companies).map((company) => {
                            return (
                                <div
                                    key={companies[company].name}
                                    className={`experience-timeline ${
                                        selectedCompany === company ? "exp-timeline-active" : ""
                                    }`}
                                    onClick={() => onClickHandler(company)}
                                >
                                    {companies[company].name}
                                </div>
                            );
                        })}
                    </div>
                    <div className={`experience-right ${addClass}`} data-aos="fade-up">
                        <CompanyCard company={companies[selectedCompany]}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
