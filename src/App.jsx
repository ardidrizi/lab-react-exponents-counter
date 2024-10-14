import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter
        increment={increment}
        decrement={decrement}
        count={count}
        setCount={setCount}
      />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        {/* <ExponentTwo count={count} result={Exponent(count, 2)} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} /> */}
        <Exponent count={count} exp={2} />
        <Exponent count={count} exp={3} />
        <Exponent count={count} exp={4} />
        <Exponent count={count} exp={5} />
      </div>
    </div>
  );
}

export default App;
