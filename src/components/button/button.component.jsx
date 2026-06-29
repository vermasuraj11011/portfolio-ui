import "./button.styles.scss";

const Button = ({param, resume_path, children, className, ...otherProps}) => {
  // Legacy API: a `param` object carrying classes/values (used by the resume buttons)
  if (param) {
    return (
      <a className={`ancor ${param.classes}`} href={resume_path} {...param}>
        {param.values}
      </a>
    );
  }

  // Standard API: render children with whatever props are passed
  return (
    <a className={`ancor ${className ?? ""}`} {...otherProps}>
      {children}
    </a>
  );
};

export default Button;
