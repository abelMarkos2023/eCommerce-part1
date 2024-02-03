import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDisplay = ({product}) => {
    const {name,id,price,seller,ratingsCount,quantity,img} = product;


    const [coupon,setCoupon] = useState("")
    const [prequantity,setPrequantity] = useState(1)
    const [color,setColor] = useState("select Color");
    const [size,setSize] = useState('select Size');

    const addToCart =  (e) => {
            e.preventDefault();
            const prod = {
                id,
                name,
                price,
                img,
                quantity:prequantity,
                color,
                size,
                coupon


            }

            const cart =  JSON.parse(localStorage.getItem('cart')) || []

            const prodIndex = cart.findIndex(p => p.id == id)

            if(prodIndex !== -1){
                cart[prodIndex] = prod
            }
            else{
                cart.push(prod)
            }
            const cartItem = JSON.stringify(cart)
            localStorage.setItem('cart',cartItem)

            setColor('Select Color')
            setSize("Select Size")
            setCoupon(" ")
            setPrequantity(1)
    }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className="rating">
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <span>{`(${ratingsCount}) review`}</span>
            </p>
            <h4>${price}</h4>
            <h4>{seller}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores illo quod non quisquam dignissimos ea error a distinctio magnam alias.</p>
        </div>
        <div>
            <form onSubmit={addToCart}>
                <div className="select-product size">
                    <select value={size} onChange={e => setSize(e.target.value)}>
                        <option>Select Size</option>
                        <option value="SM">SM</option>
                        <option value="MD">MD</option>
                        <option value="LG">LG</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>

                    </select>
                    <i className="icofont-rounded-down"></i>
                </div>
                <div className="select-product color">
                    <select value={color} onChange={e => setColor(e.target.value)}>
                        <option>Select Color</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>

                    </select>
                    <i className="icofont-rounded-down"></i>
                </div>
                <div className="cart-plus-minus">
                    <div onClick = {() => {
                        if(prequantity > 1){
                            setPrequantity(prequantity - 1)
                            
                        }
                    }} className="dec qtybutton">-</div>
                    <input className='cart-plus-minus-box' type="text" name='qtyButton' value={prequantity === NaN ? 0:prequantity} onChange={e => setPrequantity(e.target.value)} />
                    <div onClick = {() => setPrequantity(+prequantity + 1)} className="inc qtybutton">+</div>
                </div>
                <div className="discount-code mb-2">
                    <input value={coupon} type="text" placeholder='Enter Coupon Code' onChange={(e) => setCoupon(e.target.value)}/>
                </div>
                <button type='submit' className="lab-btn">
                    <span>Add To Cart</span>
                </button>
                <Link to='/shop/cart' className='lab-btn bg-primary'>
                    <span>Check Out</span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay