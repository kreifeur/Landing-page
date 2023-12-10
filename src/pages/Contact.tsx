import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="bg-[#1e1e26] w-[100%]  flex flex-col items-center justify-center md:min-h-[100vh]  md:px-[10vh]  px-[5vh] py-[5vh] gap-[4vh]">
        <div className="text-4xl text-white ">Schedula a Test driver</div>
        <div className="text-sm font-light text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id fugiat magni!</div>
        <ContactForm/>
    </div>
  );
};

export default Contact;
