import exterior from "../assets/hero.jpg";
import capability from "../assets/cover6.jpg";
import interior from '../assets/cover5.jpg'
const Gallery = () => {
  return (
    <div className=" w-[100%]  flex flex-col items-center justify-center md:min-h-[80vh]  md:px-[10vh]  px-[5vh] py-[5vh]  gap-[7vh]">
      <div className="text-4xl ">Gallery</div>
      <ul className="flex md:gap-10 flex-col gap-2 md:flex-row items-center font-light">
        <li>Compass</li>

        <li>Grand Cherokee</li>

        <li>Compass Thailhawk</li>

        <li>Wrangler unlimited</li>

        <li>Grand Cherokee SRT</li>
      </ul>

      <div className="grid md:grid-cols-3 md:h-[50vh] grid-cols-1 ">
        <img className="md:h-[50vh] h-[35vh] w-[100%]" src={exterior}>
        </img>
        <img className="md:h-[50vh] h-[35vh] w-[100%]" src={interior}></img>
        <img className="md:h-[50vh] h-[35vh] w-[100%]" src={capability}></img>
        
      </div>
    </div>
  );
};

export default Gallery;
