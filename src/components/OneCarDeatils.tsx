
type Vehicule ={
    name:string ;
    image: string;
}
const OneCarDetails = (props:Vehicule) => {
  return (
    <div className="flex flex-col items-center gap-4 text-white h-[60vh] ">
      {/* image  */}
      <div className="w-[100%] h-[50%]">
        <img className='w-[100%] h-[100%]' src={props.image} alt="" />
      </div>
      {/* title  */}
      <div className="text-xl font-bold">{props.name}</div>
      {/*  price */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-sm text-[#616168]">Now Starting at</div>
        <div className="text-2xl font-bold text-[#ffba00]">120000 $</div>
      </div>
      {/* know more */}
      <button className="w-[200px] border border-[#ffba00] h-[40px] text-[#ffba00] rounded-xl">
        Know More
      </button>
    </div>
  );
};

export default OneCarDetails;
