import React from "react";

function Menu({ items }) {
  return (
    <div className="menu">
      {items.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          <p className="category">{item.category}</p>
          <p className="price">${item.price}</p>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;
