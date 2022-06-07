import "./LearnMoreButton.scss";

const LearnMoreButton = () => {
  return (
    <button className="learnMoreButton learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Learn More</span>
    </button>
  );
};

export default LearnMoreButton;
