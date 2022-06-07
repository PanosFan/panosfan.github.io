import "./Links.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Links = () => {
  return (
    <ul className="links">
      <li className="icon facebook">
        <span className="tooltip">Facebook</span>
        <span>
          <FaFacebookF />
        </span>
      </li>
      <li className="icon github">
        <span className="tooltip">Github</span>
        <span>
          <FaGithub />
        </span>
      </li>
      <li className="icon linkedin">
        <span className="tooltip">Linkedin</span>
        <span>
          <FaLinkedinIn />
        </span>
      </li>
    </ul>
  );
};

export default Links;
