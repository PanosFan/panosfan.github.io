import "./Links.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Links = () => {
  return (
    <ul class="links">
      <li class="icon facebook">
        <span class="tooltip">Facebook</span>
        <span>
          <FaFacebookF />
        </span>
      </li>
      <li class="icon github">
        <span class="tooltip">Github</span>
        <span>
          <FaGithub />
        </span>
      </li>
      <li class="icon linkedin">
        <span class="tooltip">Linkedin</span>
        <span>
          <FaLinkedinIn />
        </span>
      </li>
    </ul>
  );
};

export default Links;
