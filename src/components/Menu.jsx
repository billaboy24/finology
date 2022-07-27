import React from "react";
function Menu({ menuItem }) {
  return (
    <div className="car-cards">
      {menuItem.map((item) => {
        return (
          <div className="cards" key={item.id}>
            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
            <h2>{item.category}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
