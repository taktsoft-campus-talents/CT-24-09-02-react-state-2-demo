import { useState } from "react";
import "./ColorBox1.css";
export function ColorBox1({ color }) {
  const [counter, setCounter] = useState(0);

  function handleBoxClick() {
    setCounter((prev) => prev + 1);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      <h2>({counter})</h2>
    </div>
  );
}
