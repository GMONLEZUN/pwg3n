import { useEffect } from "react";
import { useState } from "react";

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

const Form = () => {
  const [values, setValues] = useState({ long: 10, rem: false, num: false, cap: false, alpha: true, special: false, quotes: false });
  const [password, setPassword] = useState("");

  const makePassword = () => {
    console.log("here");
    let result = Array(values.long).fill(0);
    let op = [];

    for (let prop in values) {
      if (values[prop] === true) {
        if (prop === "num") op.push("num");
        if (prop === "cap") op.push("AZ");
        if (prop === "alpha") op.push("az");
        if (prop === "special") op.push("special");
        if (prop === "quotes") op.push("specialWOquotes");
      }
    }
    result = result.map((_) => {
      return rand(op[Math.floor(Math.random() * op.length)]);
    });
    console.log({ result });
    setPassword(result);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    makePassword();
  };
  useEffect(() => {
    makePassword();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input />
        <input />
        <input />
        <input />
        <input />
        <input />
      </form>
      <div>
        <span>{password}</span>
        <span>Copiar</span>
      </div>
      <button type="submit">Generar</button>
    </div>
  );
};

export default Form;
