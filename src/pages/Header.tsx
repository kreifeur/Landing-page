import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import cover from "../assets/cover.jpg";
import Navbar from "../components/Navbar";
const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className="h-[100%] w-[100%] bg-cover bg-center md:px-[20vh] px-[5vh]"
    >
      <Navbar />

      <div className="h-[70vh] w-[100%] text-white flex  ">
        <div className="flex flex-col justify-center gap-6">
          <div className="md:text-8xl text-7xl">COMPASS</div>
          <div>
            Expound the actual teachings of the great explorer of the truth
          </div>
          <button className="w-[200px] border border-[#ffba00] h-[40px] text-[#ffba00] rounded-xl">
            Know More
          </button>
        </div>
      </div>

      <div className="flex text-white h-[20vh] w-[100%]">
        <ul className="flex md:flex-col flex-row md:justify-between gap-10 justify-center pb-6 text-2xl w-[100%]">
            <li><BsFacebook/></li>
            <li><BsInstagram/></li>
            <li><BsTwitter/></li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
