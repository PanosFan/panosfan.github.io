import "./Navbar.scss";
import { FaUser } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { MdOutlineWork, MdComputer } from "react-icons/md";
import Link from "react-scroll/modules/components/Link";

const Navbar = () => {
  return (
    <nav>
      <Link activeClass="active" smooth spy to="home">
        <ImHome />
      </Link>
      <Link activeClass="active" smooth spy to="about">
        <FaUser />
      </Link>

      <Link activeClass="active" smooth spy to="projects">
        <MdOutlineWork />
      </Link>
      <Link activeClass="active" smooth spy to="skills">
        <MdComputer />
      </Link>
      <Link activeClass="active" smooth spy to="contact">
        <BsFillChatSquareTextFill />
      </Link>
    </nav>
  );
};

export default Navbar;
