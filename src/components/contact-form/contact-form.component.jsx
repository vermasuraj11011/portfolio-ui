import "./contact-form.styles.scss";
import {useState} from "react";
import Button from "../button/button.component";

const formField = [
  {
    name: "name",
    type: "text",
    id: "contactName",
    placeholder: "Name",
    value: "",
    minlength: "2",
    required: "",
  },
  {
    name: "_replyto",
    type: "email",
    id: "contactEmail",
    placeholder: "Email",
    value: "",
    required: "",
  },
  {
    name: "_subject",
    type: "text",
    id: "contactSubject",
    placeholder: "Subject",
    value: "",
  },
  {
    tag: "textarea",
    name: "message",
    id: "contactMessage",
    placeholder: "message",
    rows: "10",
    cols: "50",
    required: "",
  },
];

const ContactForm = () => {
  const [formFields, setFormFields] = useState({}); // Initialize state with an empty object

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);

    try {
      const response = await fetch("https://formspree.io/f/xwkagjbn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFields),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        alert(`Message sent successfully \n Hello ${formFields.name}`);
        // Optionally, reset formFields state after successful submission
        setFormFields({});
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
    }
  };

  return (
    <form
      name="form"
      id="contactForm"
      method="POST"
      action="https://formspree.io/f/xwkagjbn"
    >
      <fieldset>
        {formField.map((field) => (
          <div className="form-field" key={field.id}>
            {field.tag ? (
              <textarea
                onChange={handleChange}
                {...field}
                value={formFields[field.name]}
              />
            ) : (
              <input
                onChange={handleChange}
                {...field}
                value={formFields[field.name]}
              />
            )}
          </div>
        ))}
      </fieldset>

      <div className="form-button">
        <Button onClick={handleSubmit} className="form-submit-button" type="submit">
          SUBMIT
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;


  /* <form name="form" id="contactForm" method="POST" action="https://formspree.io/f/xwkagjbn">
        <fieldset>
            <div class="form-field">
                <input name="name" type="text" id="contactName" placeholder="Name" value="" minlength="2" required="">
            </div>
            <div class="form-field">
                <input name="_replyto" type="email" id="contactEmail" placeholder="Email" value="" required="">
            </div>
            <div class="form-field">
                <input name="_subject" type="text" id="contactSubject" placeholder="Subject" value="">
            </div>
            <div class="form-field">
                <textarea name="message" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
            </div>
            <div class="form-field">
                <button class="submitform" name="submit">Submit</button>
                <div id="submit-loader">
                    <div class="text-loader">Sending...</div>
                    <div class="s-loader">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
                </div>
            </div>
        </fieldset>
    </form> */

