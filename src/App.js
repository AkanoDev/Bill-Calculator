import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <h2> Bill Calculator</h2>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = Math.round(bill * ((percentage1 + percentage2) / 2 / 100));

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="tip-cal">
      <Bill bill={bill} onBill={setBill} />
      <Percentage percentage={percentage1} onPercentage={setPercentage1} />
      <Percentage percentage={percentage2} onPercentage={setPercentage2} />

      {bill > 0 && (
        <>
          <Summary bill={bill} tip={tip}>
            💲
          </Summary>
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <div className="bill">
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Percentage({ percentage, onPercentage }) {
  return (
    <div>
      <label>How do you like the service?</label>

      <select
        value={percentage}
        onChange={(e) => onPercentage(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}
function Summary({ bill, tip, children }) {
  return (
    <h1>
      You Pay {children}
      {bill + tip} ({children}
      {bill} + {children}
      {tip} tip)
    </h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
