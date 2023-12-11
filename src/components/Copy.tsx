import logo from '../assets/Jeep-logo-white.webp'
const Copy = () => {
    return ( <div  className="bg-[#1e1e26] w-[100%] text-sm border-t  flex items-center  md:flex-row text-white justify-between  md:px-[10vh]  px-[5vh] py-[5vh] gap-[4vh]">
        <div>
            All Rights Reserved | Copyright 2023
        </div>
        <div className='w-[80px]'>
            <img src={logo} alt="" />
        </div>
    </div> );
}
 
export default Copy;