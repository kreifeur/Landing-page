import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#1e1e26] w-[100%]  flex flex-col  md:flex-row text-white justify-between  md:px-[10vh] pb-[20vh] px-[5vh] pt-[15vh] gap-[4vh]">
      {/* social media */}
      <ul className="flex md:flex-col flex-row md:justify-between gap-10 md:gap-4 justify-center text-xl md:text-xl ">
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <BsTwitter />
        </li>
      </ul>
      {/* vehicles  */}
      <div className="w-[15%]">
        <div>VEHICLES</div>
        <ul className="text-xs font-light">
          <li>Campass</li>
          <li>Wrabgler unlimitted</li>
          <li>Grand Cherokee SRT</li>
          <li>Grand Cherokee</li>
        </ul>
      </div>
      {/* research */}
      <div className="w-[15%]">
        <div>RESEARCH</div>
        <ul className="text-xs font-light">
          <li>Specification</li>
          <li>Get a Brochure</li>
          <li>Sign up for Updates</li>
          <li>Corporate Enquires</li>
        </ul>
      </div>
      {/* locate  */}
      <div className="w-[20%]">
        <div>LOCATE</div>
        <div className="text-xs font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          inventore perferendis iure similique.
        </div>
      </div>
      {/* customer support */}
      <div className="w-[30%]">
        <div className="text-xs ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum
          provident aliquid similique reprehenderit? Fugit cupiditate
          consequatur pariatur fuga est nisi culpa fugiat magni at. Saepe nisi
          consequatur fugit quidem tempora maxime.
        </div>
        <div className="text-xs">
          <span className="text-[#ffba00]">customer support : </span>{" "}
          +213556347931
        </div>
      </div>
    </div>
  );
};

export default Footer;
