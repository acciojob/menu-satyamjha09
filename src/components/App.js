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
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Shakes</button>
       </div>
       <Menu items={items} />
    </div>
  )
}

export default App