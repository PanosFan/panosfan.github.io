import "./Links.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Links = () => {
  const openLink = (url) => window.open(url, "_blank");

  return (
    <ul className="links">
      <li
        className="icon facebook"
        onClick={() => openLink("https://www.facebook.com/panosfan11629414/")}
      >
        <span className="tooltip">Facebook</span>
        <span>
          <FaFacebookF />
        </span>
      </li>
      <li
        className="icon github"
        onClick={() => openLink("https://github.com/PanosFan")}
      >
        <span className="tooltip">Github</span>
        <span>
          <FaGithub />
        </span>
      </li>
      <li
        className="icon linkedin"
        onClick={() =>
          openLink(
            "https://www.linkedin.com/in/panagiotis-fanartzis-76241b236/"
          )
        }
      >
        <span className="tooltip">Linkedin</span>
        <span>
          <FaLinkedinIn />
        </span>
      </li>
    </ul>
  );
};

export default Links;
