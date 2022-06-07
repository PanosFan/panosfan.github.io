import "./Footer.scss";
import BackToTopButton from "../../Buttons/BackToTop/BackToTopButton";
import Links from "../../Links/Links";

const Footer = () => {
  return (
    <footer className="text-center">
      {/* <BackToTopButton /> */}
      <Links />
      <div>
        <a id="mailTo" href="mailto:panfanartzis@gmail.com">
          panfanartzis@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
