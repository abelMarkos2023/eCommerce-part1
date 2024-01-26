import React from 'react'

const SelectedCategory = ({select}) => {
  return (
    <select onChange={select}>
                
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="computer">Computer</option>
        <option value="Bottle">Bottle</option>
        <option value="Cap">Cap</option>
        <option value="Earphones">Earphones</option>
        <option value="health">health</option>
        <option value="Men's Pants">Men's Pants</option>
        <option value="Men's Sneaker">Men's Sneaker</option>
        <option value="Men's Boot">Men's Boot</option>
   
       
    </select>
  )
}

export default SelectedCategory