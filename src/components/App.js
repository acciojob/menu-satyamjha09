import React, { useState } from "react";
import "../styles/App.css";
import Menu from "./Menu";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const menuItems = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "/images/item-1.jpeg",
      desc: "Delicious pancakes served with butter and syrup.",
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: 13.99,
      img: "/images/item-2.jpeg",
      desc: "Juicy double burger with fries and a soft drink.",
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: 6.99,
      img: "/images/item-3.jpeg",
      desc: "Thick and creamy shake with chocolate and whipped cream.",
    },
    {
      id: 4,
      title: "Country Delight",
      category: "breakfast",
      price: 20.99,
      img: "/images/item-4.jpeg",
      desc: "Healthy and tasty country-style breakfast.",
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "lunch",
      price: 22.99,
      img: "/images/item-5.jpeg",
      desc: "Scrambled eggs with toast and fresh juice.",
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: 18.99,
      img: "/images/item-6.jpeg",
      desc: "Oreo-based milkshake topped with crushed cookies.",
    },
    {
      id: 7,
      title: "Bacon Overflow",
      category: "breakfast",
      price: 8.99,
      img: "/images/item-7.jpeg",
      desc: "Crispy bacon with eggs and toast.",
    },
    {
      id: 8,
      title: "American Classic",
      category: "lunch",
      price: 12.99,
      img: "/images/item-8.jpeg",
      desc: "Classic American cheeseburger with fries.",
    },
    {
      id: 9,
      title: "Quarantine Buddy",
      category: "shakes",
      price: 16.99,
      img: "/images/item-9.jpeg",
      desc: "Refreshing strawberry banana smoothie.",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="app">
      <h1>Menu Application</h1>
      <div className="categories">
        {["All", "breakfast", "lunch", "shakes"].map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <Menu items={filteredItems} />
    </div>
  );
};

export default App;
