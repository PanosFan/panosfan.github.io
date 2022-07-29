import "./Hero.scss";
import LearnMoreButton from "../../Buttons/LearnMore/LearnMoreButton";
import Link from "react-scroll/modules/components/Link";

const Hero = () => {
  return (
    <section id="home">
      <h1>
        Hello, I'm <span>Panagiotis Fanartzis</span>. <br />
        I'm a full stack web developer.
      </h1>
      <Link activeClass="active" smooth spy to="about">
        <LearnMoreButton />
      </Link>
    </section>
  );
};

export default Hero;
