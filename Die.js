import React from "react";

const dotPositionMatrix = {
  1: [[50, 50]],
  2: [[20, 20], [80, 80]],
  3: [[20, 20], [50, 50], [80, 80]],
  4: [[20, 20], [20, 80], [80, 20], [80, 80]],
  5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
  6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]],
};

function createDice(number) {
  const dots = dotPositionMatrix[number].map((dotPosition, index) => (
    <div
      key={index}
      className="dice-dot"
      style={{
        top: `${dotPosition[0]}%`,
        left: `${dotPosition[1]}%`,
      }}
    ></div>
  ));

  return (
    <div className={`dice`}>
      {dots}
    </div>
  );
}

export default function Die(props) {
  const { value, isHeld, holdDice } = props;

  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <div
      className={`die-face ${isHeld ? "held" : ""}`}
      style={styles}
      onClick={holdDice}
    >
      {createDice(value)}
    </div>
  );
}