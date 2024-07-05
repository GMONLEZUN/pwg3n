import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({ long: 10, rem: false, num: false, cap: false, alpha: true, special: false, quotes: false });
  const [password, setPassword] = useState("");

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
    <form onSubmit={handleSubmit} className="flex flex-col w-full justify-center items-center gap-5">
      <label htmlFor="num">123</label>
      <input type="checkbox" name="num" onChange={handleChange} value={values.num} checked={values.num} />
      <label htmlFor="alpha">abc</label>
      <input type="checkbox" name="alpha" onChange={handleChange} value={values.alpha} checked={values.alpha} />
      <label htmlFor="cap">ABC</label>
      <input type="checkbox" name="cap" onChange={handleChange} value={values.cap} checked={values.cap} />
      <label htmlFor="special">$@&!</label>
      <input type="checkbox" name="special" onChange={handleChange} value={values.special} checked={values.special} />
      <label htmlFor="quotes">Sin ‘´”`</label>
      <input type="checkbox" name="quotes" onChange={handleChange} value={values.quotes} disabled={!values.special} checked={values.quotes} />
      <label htmlFor="">Largo: {values.long}</label>
      <input type="range" min={1} max={30} name="long" onChange={handleChange} value={values.long} />
      <p>Contraseña: {password}</p>
      <button type="submit">Generar</button>
    </form>
  );
};

export default Form;
