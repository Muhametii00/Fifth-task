import React, { useState } from "react";
import "./App.css";

function Collapsible(props) {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="Toggle">
      <div className="Collapsible">
        <div className="button" onClick={() => setIsOpen(!IsOpen)}>
          {props.label}
        </div>
        {IsOpen && <div className="paragraph">{props.children}</div>}
      </div>
    </div>
  );
}

export default Collapsible;
