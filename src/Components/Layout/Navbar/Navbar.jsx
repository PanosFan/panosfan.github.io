import "./Navbar.scss";
import { FaUser } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { MdOutlineWork, MdComputer } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import Link from "react-scroll/modules/components/Link";

const Navbar = () => {
  return (
    <nav>
      <div className="content">
        <Link activeClass="active" smooth spy to="home">
          <ImHome />
          <span>Home</span>
        </Link>
        <Link activeClass="active" smooth spy to="about">
          <FaUser />
          <span>About</span>
        </Link>
        <Link activeClass="active" smooth spy to="skills">
          <MdComputer />
          <span>Skills</span>
        </Link>
        <Link activeClass="active" smooth spy to="projects">
          <MdOutlineWork />
          <span>Projects</span>
        </Link>
        <Link activeClass="active" smooth spy to="contact">
          <BiMessageDetail />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
