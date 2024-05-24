import React, { useState } from "react";
import "./App.css";

const coloursList = [
  { name: "Grey", colour: "#aaa", numberOf: "(32)" },
  { name: "Beige", colour: "#e1ceb1", numberOf: "(28)" },
  { name: "Natural", colour: "#c1bcb7", numberOf: "(24)" },
  { name: "Black", colour: "#44453e", numberOf: "(20)" },
  { name: "White", colour: "#fff", numberOf: "(16)" },
  { name: "Brown", colour: "#92887d", numberOf: "(12)" },
  { name: "Buff", colour: "#cbc1ad", numberOf: "(8)" },
  { name: "Blue", colour: "#7d8db5", numberOf: "(8)" },
  { name: "Green", colour: "#8d9782", numberOf: "(4)" },
  { name: "Charcoal", colour: "#6a6a6a", numberOf: "(4)" },
  { name: "Yellow", colour: "#f3e9b4", numberOf: "(4)" },
  { name: "Cream", colour: "#f7f2e9", numberOf: "(4)" },
  { name: "Silver", colour: "#c6c6c6", numberOf: "(4)" },
  { name: "Red", colour: "#8a4f3d", numberOf: "(4)" },
  { name: "Orange", colour: "#ba6a51", numberOf: "(4)" },
];

const App = () => {
  const [selectedColour, setSelectedColour] = useState(""); // with more time i would change this to an array to allow muliple selections

  const LondonStoneSwatches = () => {
    return coloursList.map((colour) => (
      <div
        className="swatch"
        key={colour.name}
        onClick={() => {
          setSelectedColour(colour.name);
        }}
      >
        <div style={{ display: "flex", justifyContent: "left" }}>
          <div
            className="selected-colour-ring"
            style={{
              borderColor:
                selectedColour === colour.name ? "pink" : "transparent",
            }} // when a swatch is clicked, it will update the selectedColour state, which will change the border from transparent to orange
          >
            <div
              className="colour-circle"
              style={{ backgroundColor: colour.colour }}
            />
          </div>
          <p className="name-and-number">{colour.name}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <p className="name-and-number">{colour.numberOf}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="colour-swatches-container">
      <h1 className="title">Colour</h1>
      <div className="swatches-container">
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <LondonStoneSwatches />
        </div>
      </div>
    </div>
  );
};

export default App;
