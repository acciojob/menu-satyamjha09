import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories';
import menu from "./data";
import "../styles/App.css"

 const allCategories = ["All" , ...new Set(menu.map((item) => item.category))];


const App = () => {

  const [menuItems, setMenuItems] = useState(menu);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <div className="title">
          <h2> Our Menu </h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
        
      </section>
    </main>
  )
}

export default App