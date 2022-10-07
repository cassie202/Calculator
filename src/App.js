import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const click = (e) => {
    console.log("amaka", e);
    console.log("amaka", result);
    setResult(result.concat(e.target.name));
  };
  const del = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keys">
          <button className="focus" onClick={del} id="del">
            Clear
          </button>
          <button className="focus" onClick={backspace} id="backspace">
            C
          </button>
          <button className="focus" name="/" onClick={click}>
            &divide;
          </button>
          <button name="7" onClick={click}>
            7
          </button>
          <button name="8" onClick={click}>
            8
          </button>
          <button name="9" onClick={click}>
            9
          </button>
          <button className="focus" name="*" onClick={click}>
            &times;
          </button>
          <button name="4" onClick={click}>
            4
          </button>
          <button name="5" onClick={click}>
            {" "}
            5
          </button>
          <button name="6" onClick={click}>
            6
          </button>
          <button className="focus" name="-" onClick={click}>
            &ndash;
          </button>
          <button name="1" onClick={click}>
            1
          </button>
          <button name="2" onClick={click}>
            2
          </button>
          <button name="3" onClick={click}>
            3
          </button>
          <button className="focus" name="+" onClick={click}>
            +
          </button>
          <button name="0" onClick={click}>
            0
          </button>
          <button name="." onClick={click}>
            .
          </button>
          <button className="focus" onClick={calculate} id="result">
            {" "}
            ={" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
