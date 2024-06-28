import React, { useState } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
  const checkprime = (value) => {
    let factor = 0;
    for (let i = 1; i <= value; i++) {
      if (value % i == 0) {
        factor++;
      }
    }
    if (factor == 2) {
      return "true";
    } else {
      return "false";
    }
  };
  const even_odd = (value) => {
    for (let i = 1; i <= value; i++) {
      if (value % 2 == 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
  };
  return (
    <div style={{ textAlign: "center" }} className="card">
      <h1 style={{ fontSize: "50px" }}>welcome to counter 2.0</h1>
      <h1>counter: {value}</h1>
      <button
        style={{ margin: "10px", padding: "5px" }}
        onClick={() => setValue(value + 1)}
      >
        +1
      </button>
      <button
        style={{ margin: "10px", padding: "5px" }}
        disabled={value === 0}
        onClick={() => setValue(value - 1)}
      >
        -1
      </button>{" "}
      <br /> <br />
      <button
        style={{ margin: "10px", padding: "10px 15px" }}
        onClick={() => setValue(0)}
      >
        Reset
      </button>
      <p style={{ fontSize: "20px" }}>Prime number : {checkprime(value)}</p>
      <p style={{ fontSize: "20px" }}>This number is : {even_odd(value)} </p>
    </div>
  );
};
export default Counter;


