import "./LearnMoreButton.scss";

const LearnMoreButton = () => {
  return (
    <button class="learnMoreButton learn-more">
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">Learn More</span>
    </button>
  );
};

export default LearnMoreButton;
