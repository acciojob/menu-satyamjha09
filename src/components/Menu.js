import React from 'react'

function Menu({ items }) {
  return (
    <div className="menu">
        {items.map(item => (
            <div key={item.id} className="menu-item">
                <img src={item.image} alt={item.name} />
                <h3> {item.name} </h3>
                <h3> {item.category} </h3>
                <h3> {item.price} </h3>
            </div>
        ))}

    </div>
  )
}

export default Menu