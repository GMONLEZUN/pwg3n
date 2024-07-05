import { useEffect } from "react";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Form = () => {
  const [values, setValues] = useState({ long: 10, rem: false, num: false, cap: false, alpha: true, special: false, quotes: false });
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const rand = (option) => {
    let random;
    if (option === "az") {
      random = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
      return String.fromCharCode(random);
    }
    if (option === "AZ") {
      random = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
      return String.fromCharCode(random);
    }
    if (option === "special") {
      let arr = `[]{}()/@#$%&.,;:_¿?¡!"'´+-*∼^`.split("");
      random = Math.floor(Math.random() * arr.length);
      return arr[random];
    }
    if (option === "specialWOquotes") {
      let arr = `[]{}()/@#$%&.,;:_¿?¡!+-*∼^`.split("");
      random = Math.floor(Math.random() * arr.length);
      return arr[random];
    }
    if (option === "num") {
      return Math.floor(Math.random() * 10);
    }
  };

  const makePassword = () => {
    let result = Array(Number(values.long)).fill(0);
    let op = [];
    for (let prop in values) {
      if (values[prop] === true) {
        if (prop === "num") op.push("num");
        if (prop === "cap") op.push("AZ");
        if (prop === "alpha") op.push("az");
        if (prop === "special") {
          if (values.quotes === true) {
            op.push("specialWOquotes");
          } else {
            op.push("special");
          }
        }
      }
    }
    console.log({ op });
    console.log({ result });
    result = result
      // eslint-disable-next-line no-unused-vars
      .map((_) => {
        let char = rand(op[Math.floor(Math.random() * op.length)]);
        console.log(char);
        return char;
      });
    setPassword(result.join(""));
  };
  const handleChange = (e) => {
    if (e.target.name !== "long") {
      setValues({ ...values, [e.target.name]: !values[e.target.name] });
    } else {
      setValues({ ...values, long: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    makePassword();
  };
  useEffect(() => {
    makePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
  return (
    <form
      onSubmit={handleSubmit}
      className="px-8 lg:px-28 flex flex-col w-full justify-center items-center gap-5 text-lg font-medium text-stone-700 lg:flex-row lg:justify-start lg:py-11 lg:items-start"
    >
      <div className="flex flex-col w-full justify-center items-center gap-5 lg:w-[100%] lg:border lg:border-gray-200  lg:rounded-md lg:px-4 lg:py-4">
        <div className={`flex flex-row justify-between items-center w-full border border-dashed ${values.num ? "border-green-700 bg-green-50" : "border-gray-400"}  px-4 py-2 rounded-md border-2`}>
          <label htmlFor="num">123</label>
          <input type="checkbox" name="num" onChange={handleChange} value={values.num} checked={values.num} className=" checked:accent-green-700 border-gray-500 h-4 w-4 rounded-sm border-2" />
        </div>
        <div className={`flex flex-row justify-between items-center w-full border border-dashed ${values.alpha ? "border-green-700 bg-green-50" : "border-gray-400"}  px-4 py-2  rounded-md border-2`}>
          <label htmlFor="alpha">abc</label>
          <input type="checkbox" name="alpha" onChange={handleChange} value={values.alpha} checked={values.alpha} className=" checked:accent-green-700 border-gray-500 h-4 w-4 rounded-sm border-2 " />
        </div>
        <div className={`flex flex-row justify-between items-center w-full border border-dashed ${values.cap ? "border-green-700 bg-green-50" : "border-gray-400"}  px-4 py-2 rounded-md border-2`}>
          <label htmlFor="cap">ABC</label>
          <input type="checkbox" name="cap" onChange={handleChange} value={values.cap} checked={values.cap} className=" checked:accent-green-700 border-gray-500 h-4 w-4 rounded-sm border-2" />
        </div>
        <div className={`flex flex-row justify-between items-center w-full border border-dashed ${values.special ? "border-green-700 bg-green-50" : "border-gray-400"}  px-4 py-2 rounded-md border-2`}>
          <label htmlFor="special">$@&!</label>
          <input
            type="checkbox"
            name="special"
            onChange={handleChange}
            value={values.special}
            checked={values.special}
            className=" checked:accent-green-700 border-gray-500 h-4 w-4 rounded-sm border-2"
          />
        </div>
        <div
          className={`flex flex-row justify-between items-center w-full border border-dashed ${
            values.quotes ? "border-green-700 bg-green-50" : "border-gray-400"
          }  px-4 py-2 pl-20 rounded-md border-2`}
        >
          <label htmlFor="quotes">Sin comillas</label>
          <input
            type="checkbox"
            name="quotes"
            onChange={handleChange}
            value={values.quotes}
            disabled={!values.special}
            checked={values.quotes}
            className=" checked:accent-green-700 border-gray-500 h-4 w-4 rounded-sm border-2"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <label htmlFor="long" className="text-xl font-semibold">
            {values.long}
          </label>
          <input type="range" min={1} max={30} name="long" onChange={handleChange} value={values.long} className="accent-green-600 outline-none border-none h-5" />
        </div>
      </div>
      <div className="lg:w-[100%] lg:self-center flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center w-full">
          <p className=" text-md font-semibold text-stone-600 w-full px-3 py-3 border border-stone-300 border-r-0 rounded-l-md text-center"> {password}</p>
          <div
            className={` text-md flex flex-row justify-center items-center px-3 py-3 gap-2 border border-stone-300 rounded-r-md cursor-pointer font-semibold text-green-700 bg-green-100 transition-all duration-1000 ${
              copied ? "bg-green-700 text-white" : "bg-green-100 text-green-700"
            }`}
            onClick={() => {
              navigator.clipboard.writeText(password);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          >
            {copied ? <FaCheck className="text-3xl" /> : <span>Copiar</span>}
            <FaCopy className="hidden" />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full py-2 text-center font-bold text-xl tracking-wider bg-gradient-to-br from-stone-800 to-green-700 opacity-85 text-white rounded-md hover:opacity-100"
        >
          Generar
        </button>
      </div>
    </form>
  );
};

export default Form;
