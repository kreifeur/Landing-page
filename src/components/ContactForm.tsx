const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row text-white border border-white min-h-[55vh] md:w-[80%] w-[100%]">
      <div className="flex-1 md:border-r md:border-r-white flex flex-col px-10 py-6 gap-6 border-b border-b-white">
        <div>Select the vehucle</div>
        <ul>
          <li>Compass</li>
          <li>Compass</li>
          <li>Compass</li>
          <li>Compass</li>
          <li>Compass</li>
        </ul>
      </div>

      <div className="flex-[2] border-r border-r-white flex flex-col px-10 py-6 gap-6">
        <div>Contact informations</div>
        <form className="flex flex-col gap-3 text-sm">
          <input
            className="px-5 py-[6px] rounded-xl outline-none placeholder:text-sm bg-[#616168] placeholder:text-gray-200 md:w-[80%] w-[100%]"
            type="text"
            placeholder="Name"
          />
          <input
            className="px-5 py-[6px] rounded-xl outline-none placeholder:text-sm bg-[#616168] placeholder:text-gray-200 md:w-[80%] w-[100%]"
            type="text"
            placeholder="Email"
          />
          <input
            className="px-5 py-[6px] rounded-xl outline-none placeholder:text-sm bg-[#616168] placeholder:text-gray-200 md:w-[80%] w-[100%]"
            type="text"
            placeholder="Number"
          />
          <p>
            I agree with the <span className="font-bold">Privacy Policy</span>{" "}
          </p>
        </form>
        <button className="w-[200px] border border-[#ffba00] h-[40px] text-[#ffba00] rounded-xl">
          Know More
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
