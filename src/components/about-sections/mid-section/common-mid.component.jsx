const CommonMid = ({classes, heading, values}) => {
  return (
    <div className={`about-left-div ${classes}`}>
      <div className={"heading"}>{heading}</div>
      <div className={"values"}>{values}</div>
    </div>
  );
};

export default CommonMid;
