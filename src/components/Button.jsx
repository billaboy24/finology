import React, { useState } from "react";

function Button({ button, filter }) {
  const [active, setActive] = useState(0);

  return (
    <div className="button">
      {button.map((item, index) => (
        <button
          onClick={() => {
            filter(item);
            setActive(index);
          }}
          className={`button-click${active === index ? " active" : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Button;
