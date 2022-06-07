import "./Navbar.scss";
import { FaUser } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { MdOutlineWork } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <a href="">
        <ImHome />
      </a>
      <a href="">
        <FaUser />
      </a>

      <a href="">
        <MdOutlineWork />
      </a>
      <a href="">
        <BsFillChatSquareTextFill />
      </a>
    </nav>
  );
};

export default Navbar;
