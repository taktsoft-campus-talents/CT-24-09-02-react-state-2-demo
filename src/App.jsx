import { useState } from "react";
import "./App.css";
import { ColorBox2 } from "./components/ColorBox2";
import { ColorBox1 } from "./components/ColorBox1";

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

  /**
   * This function is called when a `ColorBox2` component is clicked.
   * @param {*} index the index of the box that was clicked
   */
  function handleColorBox2Click(index) {
    // index is still unused :)
    // maybe we can use it to remove the box
    // or to change the color of the box
    console.debug(`box at index ${index} clicked`);
    setCounter((prev) => prev + 1);
  }

  /**
   * This function is called when the input field value changes.
   * @param {*} event the event object that is passed to the function
   */
  function handleInputOnChange(event) {
    // console.debug(event.target.value);
    // console.debug("handleInputOnChange");
    setNewColor(event.target.value);
  }

  /**
   * This function is called when the button is clicked.
   * It adds the new color to the `colors` array.
   */
  function handleButtonClick() {
    setColors([...colors, newColor]);
  }

  /**
   * The following code creates an array of objects that contain unique colors and their counts.
   * For example, if the `colors` array is `["blue", "red", "orange", "red"]`,
   * the `uniqueColorsObjArray` will be `[{ color: "blue", count: 1 }, { color: "red", count: 2 },
   * { color: "orange", count: 1 }]`.
   * This code is not optimized and is only for demonstration purposes.
   * It is not a good practice to put this code here.
   * Later in our course, you will learn how to use `useEffect` hook to run such code only when needed.
   */

  const uniqueColorsObjArray = [];

  colors.forEach((color) => {
    // Check if the color is already in the uniqueColorsObjArray
    const existingColorObject = uniqueColorsObjArray.find(
      (uniqueColorObj) => uniqueColorObj.color === color
    );

    // If the color is not in the uniqueColorsObjArray, add it
    if (!existingColorObject) {
      uniqueColorsObjArray.push({ color: color, count: 0 });
    }

    // Debugging
    console.debug("colors.forEach", {
      color,
      colorIsExisting: existingColorObject,
      uniqueColorsObjArray,
    });
  });

  /**
   * This function counts the number of times a color appears in an array.
   * @param {Array} colors - An array of colors.
   * @param {string} color - The color to count.
   * @returns {number} The number of times the color appears in the array.
   *
   * The function uses the `reduce()` method to count the number of times a color appears in the `colors` array.
   *
   * 1. `colors.reduce()`
   *    The `reduce()` method iterates over each element in the `colors` array,
   *    accumulating a result based on the logic inside the callback function.
   *    It takes two arguments:
   *    - A callback function that is applied on each element in the array.
   *    - An initial value for the accumulator (in this case, `0`).
   *
   * 2. Callback Function: `(previousValue, currentValue)`
   *    - `previousValue` (also called the accumulator) keeps track of the
   *      cumulative result after processing each element. It starts with the
   *      initial value, which is `0` in this case.
   *    - `currentValue` represents the current item in the `colors` array as the
   *      `reduce()` method iterates through it.
   *
   * 3. Ternary Operator: `currentValue === color ? previousValue + 1 : previousValue`
   *    This line checks if the `currentValue` (the current item in the `colors` array)
   *    matches a specific value (`color`).
   *    - If `currentValue === color`, then `previousValue + 1` is returned,
   *      which increments the count.
   *    - If `currentValue !== color`, then `previousValue` is returned,
   *      which does not increment the count,
   *
   * 4. Initial Value: `0`
   *    The second argument to `reduce()` is the initial value of the accumulator (`previousValue`),
   *    which is set to `0` here because we are starting the count at zero.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   */
  function countColor(colors, color) {
    const numberOfMatchingItems = colors.reduce(
      (previousValue, currentValue) =>
        currentValue === color
          ? previousValue + 1
          : previousValue,
      0
    );
    return numberOfMatchingItems;
  }

  /**
   * This loop iterates over the `uniqueColorsObjArray` and counts the number of
   * times each color appears in the `colors` array.
   * It updates the `count` property of each object in the `uniqueColorsObjArray`.
   */
  for (let i = 0; i < uniqueColorsObjArray.length; i++) {
    const uniqueColorAtCurrentIndex =
      uniqueColorsObjArray[i].color;
    const numberOfColors = countColor(
      colors,
      uniqueColorAtCurrentIndex
    );
    console.debug({
      i,
      uniqueColorAtCurrentIndex,
      colors,
      numberOfColors,
    });
    uniqueColorsObjArray[i].count = numberOfColors;
  }

  /**
   * This code maps the `colors` array to `ColorBox2` components.
   */
  const displayBoxes = colors.map((color, index) => {
    return (
      <ColorBox2
        key={index}
        index={index}
        color={color}
        onBoxClick={handleColorBox2Click}
      />
    );
  });

  /**
   * This code maps the `uniqueColorsObjArray` to an array of `li` elements.
   * Each `li` element displays the color and its count.
   */
  const displayCountOfColors = uniqueColorsObjArray.map(
    (colorObj, index) => {
      return (
        <li key={index}>
          {`we have ${colorObj.count} ${
            colorObj.color
          } box${colorObj.count > 1 ? "es" : ""}`}
        </li>
      );
    }
  );

  return (
    <div>
      <h1>Color Boxes</h1>
      <hr />
      <h2>Color Box 1 Sample</h2>
      <div className="box-container">
        <ColorBox1 color="blue" />
        <ColorBox1 color="red" />
      </div>
      <hr />
      <h2>Color Box 2 Sample</h2>
      <div className="box-container">{displayBoxes}</div>
      <p>Sum of all box clicks: {counter}</p>
      {displayCountOfColors}
      <input type="text" onChange={handleInputOnChange} />
      <button onClick={handleButtonClick}>add box</button>
    </div>
  );
}

export default App;
