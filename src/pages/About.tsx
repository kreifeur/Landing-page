import Features from "../components/Features";
import image1 from "../assets/cover6.jpg";
const About = () => {
  return (
    <div className="md:h-[100vh] w-[100%] md:px-[10vh]  px-[5vh] py-[5vh] flex flex-col gap-[5vh]">
      <div className="md:h-[60vh] w-[100%] flex flex-col md:flex-row  items-center gap-8">
        <div className=" flex-[2] flex flex-col gap-4 ">
          <div className="text-3xl font-bold">About us</div>
          <div className="text-lg">
            <span className="text-[#ffba00]">Accussamous</span> is iusto
          </div>
          <p className="text-sm w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            explicabo accusamus? Perferendis dolor sequi assumenda modi quaerat
            sint nemo quod, sed cupiditate quis officiis suscipit asperiores ad
            laborum a veniam.
          </p>
          <button className="w-[200px] border border-black h-[40px] text-black rounded-xl">
            Know More
          </button>
        </div>

        {/* image  */}
        <div className=" flex[-1]"></div>
        <img className="h-[80%]" src={image1} alt="" />
      </div>

      <Features />
    </div>
  );
};

export default About;
