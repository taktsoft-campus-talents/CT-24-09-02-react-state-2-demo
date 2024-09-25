import { useState } from "react";
import "./ColorBox1.css";
export function ColorBox1({ color }) {
  const [counter, setCounter] = useState(0);

  function handleBoxClick() {
    // console.debug("handleBoxClick", counter);
    setCounter((prev) => prev + 1);
  }
  // "state uplifting"
  //   console.debug("counter", counter);
  //   console.log("render ColorBox");

  return (
    <div
      className="color-box"
      style={{
        // width: 200,
        // height: 200,
        backgroundColor: color,
      }}
      onClick={handleBoxClick}
    >
      <h2>TEST ({counter})</h2>
    </div>
  );
}
