import ContactForm from "../../components/contact-form/contact-form.component";
import "./contact.styles.scss";
import ContactInfoComponent from "./contact-info.component";

const contact_info_list = [
  {
    icon_code: "e995",
    heading: "WHERE TO FIND ME",
    contactParagraph: "Indore, (MP) India",
  },
  {
    icon_code: "e96f",
    heading: "EMAIL AT ME",
    contactParagraph: "vermasuraj008@gmail.com",
  },
  {
    icon_code: "e993",
    heading: "CALL ME AT",
    contactParagraph: "+91 8602036694",
  },
];

const social_links = [
  {
    href: "https://linkedin.com/in/surajverma008",
    media: "linkedin",
  },
  {
    href: "https://github.com/vermasuraj11011",
    media: "github",
  },
  {
    href: "https://www.instagram.com/",
    media: "instagram",
  },
  {
    href: "https://www.youtube.com/",
    media: "youtube",
  },
  {
    href: "https://www.facebook.com/",
    media: "facebook",
  },
];

const contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-heading-container">
          <h3 className="contact-heading">CONTACT</h3>
          <p className="below-heading">I'd Love To Hear From You.</p>
          <p className="lead-paragraph">Feel free to Contact Me:</p>
        </div>
        <div className="contact-form">
          <ContactForm/>
        </div>
        <div className="contact-method">
          {contact_info_list.map((contact_info) => (
            <ContactInfoComponent
              key={contact_info.heading}
              {...contact_info}
            />
          ))}
        </div>
        <div className="contact-social">
          <div className="contact-social-container">
            {social_links.map((social_link) => (
              <a
                key={social_link.media}
                href={social_link.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className={`fa fa-${social_link.media}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
