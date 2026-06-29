import "./skill-framework.styles.scss";

const skillList = [
  "REACT | HTML | CSS | THYMELEAF",
  "SCALA | JAVA | PYTHON | JAVASCRIPT",
  "SPRING | PLAY | EXPRESS | FLASK",
  "MYSQL | CASSANDRA | MONGODB | GOOGLE-BQ",
  "AWS | GCP | AZURE",
  "DOCKER | JENKISN | GIT | BITBUCKET | GITLAB",
  "SPARK | KAFKA | HADOOP | HIVE",
  "TENSORFLOW | LLAMA-2",
];

const SkillAndFramework = () => {
  return (
    <div>
      {skillList.map((skill) => (
        <div key={skill} className="skill-container">
          <strong className="skill">{skill}</strong>
        </div>
      ))}
    </div>
  );
};

export default SkillAndFramework;
