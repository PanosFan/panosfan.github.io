import "./Footer.scss";
import BackToTopButton from "../../Buttons/BackToTop/BackToTopButton";
import Links from "../../Links/Links";

const Footer = () => {
  return (
    <footer className="text-center">
      <Links />
      <div>
        <a id="mailTo" href="mailto:panfanartzis@gmail.com">
          panfanartzis@gmail.com
        </a>
      </div>
      <p>Designed and built by Panagiotis Fanartzis</p>
      <BackToTopButton />
    </footer>
  );
};

export default Footer;
