import {  BsBank } from "react-icons/bs";

const OneFeature = () => {
  return (
    <div className="flex flex-col gap-3 p-3">
      {/* icon */}
      <div className="border rounded-[50%] w-[60px] h-[60px] flex items-center justify-center text-xl shadow-lg ">
        <BsBank />
      </div>
      {/* title */}
      <div className="font-bold">Engine upgrades</div>
      {/* text */}
      <div className="font-light text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, iusto!
      </div>
    </div>
  );
};

export default OneFeature;
