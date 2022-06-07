import "./Footer.scss";
import BackToTopButton from "../../Buttons/BackToTop/BackToTopButton";
import Links from "../../Links/Links";

const Footer = () => {
  return (
    <footer className="text-center">
      <p>Footer</p>
      {/* <BackToTopButton /> */}
      <Links />
    </footer>
  );
};

export default Footer;
