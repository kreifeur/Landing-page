import {  BsEnvelope, BsPhone, BsSearch } from "react-icons/bs";
import logo from "../assets/Jeep-logo-white.webp";
const Navbar = () => {
  return (
    <div className="h-[10vh] w-[100%] flex items-center justify-between text-white text-sm">
      <div>
        <img className="h-[30px] text-white" src={logo} alt="" />
      </div>
      <ul className="md:flex items-center gap-8 hidden">
        <li>Home</li>
        <li>About Us</li>
        <li>vehicles</li>
        <li>Service</li>
        <li>Test Drive</li>
        <li>Contact</li>
      </ul>
      <ul className="md:flex items-center gap-10 hidden">
        <li>
          <BsEnvelope />
        </li>
        <li>
          <BsPhone />
        </li>
        <li>
          <BsSearch />
        </li>
      </ul>
      <div className="md:hidden text-2xl">
      <div className="border-b w-[40px] border-b-white border-b-[3px] mb-2"></div>
      <div className="border-b w-[40px] border-b-white border-b-[3px] mb-2"></div>
      <div className="border-b w-[40px] border-b-white border-b-[3px] mb-2"></div>
      </div>
    </div>
  );
};

export default Navbar;
