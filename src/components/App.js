import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const App = () => {
  // State for the active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Menu items data
  const menuItems = [
    {
      id: 1,
      name: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://via.placeholder.com/150",
      desc: "Fluffy pancakes with buttermilk and syrup.",
    },
    {
      id: 2,
      name: "Diner Double",
      category: "lunch",
      price: 13.99,
      img: "https://via.placeholder.com/150",
      desc: "Double cheeseburger with fries.",
    },
    {
      id: 3,
      name: "Godzilla Milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://via.placeholder.com/150",
      desc: "A giant milkshake with whipped cream and sprinkles.",
    },
    {
      id: 4,
      name: "Country Delight",
      category: "breakfast",
      price: 20.99,
      img: "https://via.placeholder.com/150",
      desc: "Eggs, bacon, and toast with a side of hash browns.",
    },
    {
      id: 5,
      name: "Egg Attack",
      category: "lunch",
      price: 22.99,
      img: "https://via.placeholder.com/150",
      desc: "Fried eggs with avocado and toast.",
    },
    {
      id: 6,
      name: "Oreo Dream",
      category: "shakes",
      price: 18.99,
      img: "https://via.placeholder.com/150",
      desc: "Oreo milkshake with chocolate syrup.",
    },
  ];

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <div className="filter-buttons">
        <button onClick={() => setActiveCategory("all")}>All</button>
        <button onClick={() => setActiveCategory("breakfast")}>Breakfast</button>
        <button onClick={() => setActiveCategory("lunch")}>Lunch</button>
        <button onClick={() => setActiveCategory("shakes")}>Shakes</button>
      </div>
      <Menu items={menuItems} activeCategory={activeCategory} />
    </div>
  );
};

export default App;