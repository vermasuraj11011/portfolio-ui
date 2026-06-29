import "./contact-info.styles.scss";

const ContactInfoComponent = ({icon_code, heading, contactParagraph}) => {
  return (
    <div className="contact-method-container">
      <div className="icon-container">
        <i className={`icon-${icon_code}`}></i>
      </div>
      <h4 className="contact-method-heading">{heading}</h4>
      <p className="contact-method-para">{contactParagraph}</p>
    </div>
  );
};

export default ContactInfoComponent;
