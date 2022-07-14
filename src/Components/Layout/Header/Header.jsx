import "./Header.scss";
import LearnMoreButton from "../../Buttons/LearnMore/LearnMoreButton";
import Link from "react-scroll/modules/components/Link";

const Header = () => {
  return (
    <section id="home">
      <p>Header</p>
      <Link activeClass="active" smooth spy to="about">
        <LearnMoreButton />
      </Link>
    </section>
  );
};

export default Header;
