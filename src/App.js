import "./App.css";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import items from "./utils/data";
import Button from "./components/Button";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setbuttons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };
  return (
    <div className="container">
      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  );
}

export default App;
