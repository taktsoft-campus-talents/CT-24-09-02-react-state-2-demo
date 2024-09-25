import "./ColorBox2.css";
export function ColorBox2({ color, index, onBoxClick }) {
  return (
    <div
      className="color-box"
      style={{
        backgroundColor: color,
      }}
      onClick={() => onBoxClick(index)}
    ></div>
  );
}
