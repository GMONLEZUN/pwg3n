import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="flex flex-row px-6 py-2 justify-between items-center bg-stone-900 text-white font-normal text-md w-full mt-10 bottom-0 lg:py-6">
      <div className="flex flex-row gap-6 justify-center items-center text-xl">
        <a className="flex flex-row gap-2 justify-center items-center hover:text-green-200" target="_blank" href="https://github.com/gmonlezun">
          <IoMailSharp />
        </a>
        <a className="flex flex-row gap-2 justify-center items-center hover:text-blue-200" target="_blank" href="https://github.com/gmonlezun">
          <FaGithub />
        </a>
      </div>
      <span className=" tracking-widest">gmonlezun | 2024</span>
    </footer>
  );
};

export default Footer;
