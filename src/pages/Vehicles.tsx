import logo from "../assets/Jeep-logo-white.webp";
import ie from "../assets/jeep1.webp";
import OneCarDetails from "../components/OneCarDeatils";
import ie2 from '../assets/jeep5.png'
import ie3 from '../assets/jeep4.png'
const Vehicles = () => {
    return ( <div className="bg-[#1e1e26] w-[100%]  flex flex-col items-center justify-center md:min-h-[100vh]  md:px-[10vh]  px-[5vh] py-[5vh]  md:gap-[7vh] gap-[4vh]">
        <div className="flex gap-5 items-center ">
            <div className="w-[100px]">
                <img src={logo} />
            </div>
            <div className="text-4xl text-white ">Vehicles</div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[20vh] w-[100%] gap-[10vh]">
            <OneCarDetails name='Grand Cherokee SRT' image={ie}/>
            <OneCarDetails name='Grand Cherokee SRT' image={ie2}/>
            <OneCarDetails name='Grand Cherokee SRT' image={ie3}/>
        </div>
    </div> );
}
 
export default Vehicles;