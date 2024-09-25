import { useState } from "react";
import "./App.css";
import { ColorBox2 } from "./components/ColorBox2";

function App() {
  console.log("render App");
  const [counter, setCounter] = useState(0);
  const [colors, setColors] = useState([
    "blue",
    "red",
    "orange",
    "red",
  ]);
  const [newColor, setNewColor] = useState("");

  function handleColorBox2Click(index) {
    console.debug(index);
    console.debug("handleColorBox2Click");
    console.debug(colors[index]);
    setCounter((prev) => prev + 1);
  }

  function handleInputOnChange(event) {
    console.debug(event.target.value);
    console.debug("handleInputOnChange");
    setNewColor(event.target.value);
  }

  function handleButtonClick() {
    setColors([...colors, newColor]);
  }

  const uniqueColorsObjArray = [];

  colors.forEach((color) => {
    console.debug({ color });
    const hasValue = uniqueColorsObjArray.find(
      (colorObj) => colorObj.color === color
    );
    console.debug({ hasValue });
    if (!hasValue) {
      uniqueColorsObjArray.push({ color: color, count: 0 });
    }
    console.debug({
      uniqueColorsObjArray,
    });
  });

  // for (let i = 0; i < uniqueColorsObjArray.length; i++) {
  //   const numberOfColors = colors.reduce(
  //     (previousValue, currentValue) =>
  //       previousValue + currentValue
  //   );
  //   console.debug({ numberOfColors });
  //   uniqueColorsObjArray[i].count = i;
  // }

  return (
    <div>
      {colors}
      <hr />
      {newColor}
      <hr />
      <div className="box-container">
        {colors.map((color, index) => {
          return (
            <ColorBox2
              key={index}
              index={index}
              color={color}
              onBoxClick={handleColorBox2Click}
            />
          );
        })}
      </div>

      <p>Sum of all box clicks: {counter}</p>

      <input type="text" onChange={handleInputOnChange} />
      <button onClick={handleButtonClick}>add box</button>

      {uniqueColorsObjArray.map((colorObj, index) => {
        return (
          <li key={index}>
            {colorObj.color + ": " + colorObj.count}
          </li>
        );
      })}
    </div>
  );
}

export default App;
