import exterior from "../assets/hero.jpg";
import capability from "../assets/cover6.jpg";
import interior from '../assets/cover5.jpg'
const Gallery = () => {
  return (
    <div className=" w-[100%]  flex flex-col items-center    md:px-[10vh]  px-[5vh] py-[5vh]  gap-3">
      <div className="text-4xl ">Gallery</div>
      <div className="text-sm font-light text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id fugiat magni!</div>

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
