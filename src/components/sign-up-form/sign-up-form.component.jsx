import {useContext, useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button1/button.component";
import {UserContext} from "../../context/user.context";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const {displayName, email, password, confirmPassword} = formFields;
  const resetFormfield = () => setFormFields(defaultFormField);
  const {setCurrentUser} = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, {displayName});
      resetFormfield();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("Error creating user", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          required
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
