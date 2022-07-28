import "./Hero.scss";
import LearnMoreButton from "../../Buttons/LearnMore/LearnMoreButton";
import Link from "react-scroll/modules/components/Link";

const Hero = () => {
  return (
    <section id="home">
      <h4>Hero</h4>
      <Link activeClass="active" smooth spy to="about">
        <LearnMoreButton />
      </Link>
    </section>
  );
};

export default Hero;
