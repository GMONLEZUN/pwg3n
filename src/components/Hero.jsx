import logoW from "../assets/Logo3.svg";
const Hero = () => {
  return (
    <div className="py-10 px-6 flex flex-col justify-center items-center gap-5">
      <div className=" flex flex-row justify-center items-center ">
        <span className=" text-6xl font-bold text-stone-900 tracking-[.33em]">PWg</span>
        <picture className="mr-3 w-28 h-48">
          <img src={logoW} className="w-full h-auto  " />
        </picture>
        <span className=" text-6xl font-bold text-stone-900">n</span>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <h1 className=" text-xl tracking-wider font-light text-stone-900">Generador de contraseñas</h1>
        <h2 className=" text-lg font-light text-stone-900">Creá contraseñas seguras tus cuentas en internet</h2>
      </div>
    </div>
  );
};

export default Hero;
