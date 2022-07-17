import "./Navbar.scss";
import { FaUser } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { MdOutlineWork, MdComputer } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import Link from "react-scroll/modules/components/Link";
import { useEffect } from "react";
import Aos from "aos";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ offset: 0 });
  }, []);
  return (
    <nav>
      <div className="content">
        <Link activeClass="active" smooth spy to="home">
          <ImHome />
          <span data-aos="zoom-in">Home</span>
        </Link>
        <Link activeClass="active" smooth spy to="about">
          <FaUser />
          <span data-aos="zoom-in">About</span>
        </Link>
        <Link activeClass="active" smooth spy to="skills">
          <MdComputer />
          <span data-aos="zoom-in">Skills</span>
        </Link>
        <Link activeClass="active" smooth spy to="projects">
          <MdOutlineWork />
          <span data-aos="zoom-in">Projects</span>
        </Link>
        <Link activeClass="active" smooth spy to="contact">
          <BiMessageDetail />
          <span data-aos="zoom-in">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
