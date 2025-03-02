import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className="menu-list">
        {items.map((menuItem) => {
            const {id , title , category , price , img , desc} = menuItem;

            return (
                <div key={id} className="menu-item">
                <img src={img} alt={title} />
                <div className="info">
                <h4>{title}</h4>
                <h5>${price}</h5>
                <p>{desc}</p>
                </div>
                </div>
            );
        })}

    </div>
  )
}

export default Menu