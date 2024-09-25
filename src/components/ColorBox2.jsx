import "./ColorBox2.css";

/**
 * This is a functional component that represents a colored box.
 * It's called a pure component because it doesn't have any state.
 */
export function ColorBox2({ color, index, onBoxClick }) {
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
      }}
      /**
       * This is the event handler for the `onClick` event.
       * It calls the `onBoxClick` function that was passed as a prop.
       * This is called "state uplifting".
       */
      onClick={() => onBoxClick(index)}
    ></div>
  );
}
