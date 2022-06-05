import "./Footer.scss";
import LearnMoreButton from "../../Buttons/LearnMore/LearnMoreButton";
import Links from "../../Links/Links";
import BackToTopButton from "../../Buttons/BackToTop/BackToTopButton";

const Footer = () => {
  return (
    <footer>
      Footer
      <div>
        <LearnMoreButton />
        <Links />
      </div>
      <div className="container text-center">
        {" "}
        <BackToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
