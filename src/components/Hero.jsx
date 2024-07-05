import { useEffect, useState } from "react";
import logoW from "../assets/Logo3.svg";
import logoWXL from "../assets/Logo3XL.svg";
const Hero = () => {
  const [screenW, setScreenW] = useState(null);
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setScreenW("sm");
    } else if (window.innerWidth < 768) {
      setScreenW("md");
    } else if (window.innerWidth < 1024) {
      setScreenW("lg");
    } else if (window.innerWidth < 1280) {
      setScreenW("xl");
    } else {
      setScreenW("2xl");
    }
  };
  console.log(screenW);
  useEffect(() => {
    setScreenW(handleResize);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="px-8 lg:px-28 py-10 flex flex-col justify-center items-center gap-5 lg:flex-row  lg:items-center lg:gap-20 lg:py-14">
      <div className=" flex flex-row justify-center items-center ">
        <span className=" text-6xl font-bold text-stone-900 tracking-[.3em] lg:text-7xl xl:text-8xl">PWg</span>
        <picture className="mr-3 w-28 h-48 lg:w-36 lg:h-52 xl:w-44 xl:h-64 flex justify-center items-center">
          {screenW === "lg" || screenW === "xl" || screenW === "2xl" ? <img src={logoWXL} className="w-full h-auto " /> : <img src={logoW} className="w-full h-auto " />}
        </picture>
        <span className=" text-6xl font-bold text-stone-900 lg:text-7xl xl:text-8xl">n</span>
      </div>
      <div className="w-[2px] rounded-md bg-gray-300 h-[100px] hidden lg:block"></div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className=" text-3xl tracking-wider font-light text-stone-900">Generador de contraseñas</h1>
        <h2 className=" text-xl font-light text-stone-900">Creá contraseñas seguras tus cuentas en internet</h2>
      </div>
    </div>
  );
};

export default Hero;
