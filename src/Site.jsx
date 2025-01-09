import React, { useState } from "react";
// import "./Site.css";

function Site() {
  const [bgColor, setBgColor] = useState(""); 
  const [inputColor, setInputColor] = useState("");

  function handleSubmit() {
    setBgColor(inputColor); 
  }

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div>
        <h1>Change Background Color</h1>
        <input
          type="text"
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default Site;
