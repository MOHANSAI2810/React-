import React, { useState } from 'react';

const Button = () => {
  const [num, setNum] = useState(0);
  const [hovered, setHovered] = useState(null); // null, 'inc', or 'dec'

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{num}</h1>
      <button
        onClick={increment}
        onMouseOver={() => setHovered("inc")}
        onMouseOut={() => setHovered(null)}
        style={{
          backgroundColor: hovered === "inc" ? "#4CAF50" : "#e0e0e0",
          color: hovered === "inc" ? "white" : "black",
          margin: "10px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "move",
        }}
      >
        Increment
      </button>

      <button
        onClick={decrement}
        onMouseOver={() => setHovered("dec")}
        onMouseOut={() => setHovered(null)}
        style={{
          backgroundColor: hovered === "dec" ? "#f44336" : "#e0e0e0",
          color: hovered === "dec" ? "white" : "black",
          margin: "10px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Button;
