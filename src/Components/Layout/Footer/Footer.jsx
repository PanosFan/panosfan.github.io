import "./Footer.scss";
import BackToTopButton from "../../Buttons/BackToTop/BackToTopButton";
import Links from "../../Links/Links";

const Footer = () => {
  return (
    <footer data-aos="fade-up">
      <Links />
      <div>
        <a className="mailTo link" href="mailto:panfanartzis@gmail.com">
          panfanartzis@gmail.com
        </a>
      </div>
      <p>
        <a
          href="https://github.com/PanosFan/panosfan.github.io/tree/main"
          className="link"
        >
          Designed and built by Panagiotis Fanartzis
        </a>
      </p>
      <BackToTopButton />
    </footer>
  );
};

export default Footer;
