import "./company-card.styles.scss";

const CompanyCard = ({company}) => {
  const {name, from, role, description, stacks, work, responsibilities} =
    company;
  return (
    <div className="experience-right-details">
      <div className="company-description">
        <h2 className="company-heading">{name}</h2>
        <p className="company-from">{from}</p>
        <p className="company-intro">{description}</p>
        <div className="company-roles">
          <p>
            <strong>Roles:- &nbsp;</strong>
            {role}
          </p>
        </div>
        {stacks ? (
          <div className="company-stack">
            <span className="company-stack-heading">Stack:-&nbsp;</span>
            {stacks.map((stack, index) => (
              <div key={index} className="company-stack-item">
                {stack}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="company-work-res">
        {responsibilities ? (
          <div className="company-responsiblity">
            <h3 className="work-heading">Responsiblities</h3>
            <div className="company-responsibility-item">
              {responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className={`company-work ${(stacks) ? "" : "work-hundred"}`}>
          <h3 className="work-heading">Work Highlights</h3>
          <div className="company-work-item">
            {work.map((wo, index) => (
              <li key={index}>{wo}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
