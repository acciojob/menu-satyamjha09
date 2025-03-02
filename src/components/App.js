import React, { useState } from 'react'
import menuItems from './data'
import Menu from './Menu';
import "../styles/App.css"

const App = () => {

  const [items, setItems] = useState(menuItems);

  const filterItems = (category) => {
    if(category === 'all') {
      setItems(menuItems);
    } else {
      setItems(menuItems.filter((item) => item.category === category))
    }
  }

  return (
    <div className="container">
       <h1>Our Menu</h1>
       <div className="buttons">
       <button onClick={() => filterItems('all')}>All</button>
        <button onClick={() => filterItems('breakfast')}>Breakfast</button>
        <button onClick={() => filterItems('lunch')}>Lunch</button>
        <button onClick={() => filterItems('shakes')}>Shakes</button>
       </div>
       <Menu items={items} />
    </div>
  )
}

export default App