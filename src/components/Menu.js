import React from "react";

const Menu = ({ items, activeCategory }) => {
  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="menu-items">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category}`} // Add data-test-id
        >
          <img src={item.img} alt={item.name} className="photo" />
          <div className="item-info">
            <header>
              <h4>{item.name}</h4>
              <h4 className="price">${item.price}</h4>
            </header>
            <p className="item-text">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;