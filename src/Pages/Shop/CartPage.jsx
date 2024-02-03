import React, { useEffect, useState } from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'
import { Link } from 'react-router-dom'
import CheckoutPage from './CheckoutPage'
const CartPage = () => {

const [cartItems,setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || []
})
const [totalPrice,setTotalPrice] = useState(0)

useEffect(() => {
const items = JSON.parse(localStorage.getItem('cart')) || [];
setCartItems(items)
subTotal()
},[])

const calculateTotalPrice = item => item.price * item.quantity   

const quantityInc = id => {
const products = cartItems.filter(p => {
    return p.id === id ? p.quantity+=1 : p
})
// const products = cartItems.filter(p => p.id !== id)

setCartItems(products)

localStorage.setItem('cart',JSON.stringify(products))
subTotal()
}
const quantityDec = id => {
const products = cartItems.filter(p => {
    return p.id === id && p.quantity > 1 ? p.quantity-=1 : p;
})

setCartItems(products)

localStorage.setItem('cart',JSON.stringify(products))
subTotal()


}
const subTotal = ()=> {
const prices = cartItems.map(p => p.price * p.quantity);
const totalPrice = prices.reduce((first,second) =>{
return first + second
},0)
setTotalPrice(totalPrice)

}

const removeItem = id => {
const products = cartItems.filter(p => p.id !== id)
setCartItems(products)
localStorage.setItem('cart',JSON.stringify(products))
subTotal()
}
// testing reduce function
// const arr = [0,5,8,3,6,3];
// const t = arr.reduce((a,b)=>{
//    return a+b
// },0)
//     console.log(t)

const orderTotal = () => {
    return parseFloat(totalPrice) + parseFloat(totalPrice * 0.05)
}

return (
<div>
<PageHeader title={'Cart Page'} currentPage={'Cart'} />
<div className="shop-cart padding-tb">
<div className="container">
<div className="section-wrapper">
<div className="cart-top">
<table>
<thead>
    <tr>
        <th className="cat-product">Product</th>
        <th className="cat-price">Price</th>
        <th className="cat-quantity">Quantity</th>
        <th className="cat-toprice">Total Price</th>
        <th className="cat-edit">Edit</th>
    </tr>
</thead>
{/* Table Body */}
<tbody>
    {
        cartItems.map((item,index) => (
            <tr key={item.id}>
                <td className="product-item cat-product">
                    
                    <div className="p-thumb">
                        <Link to={`/shop/${item.id}`}>
                        <img src={item.img} alt="" />
                        </Link>
                           
                    </div>
                    <div className="p-content">
                            <Link to={`/shop/${item.id}`}>
                                {item.name}
                            </Link>
                            </div>
                </td>
                <td className="cat-price"> $ {item.price}</td>
                <td className="cat-quantity">
                    <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={() => quantityDec(item.id)}>-</div>
                        <input type="text" className="cart-plus-minus-box" value={item.quantity} name='qtybutton'/>
                        <div onClick={() => quantityInc(item.id)} className="inc qtybutton">+</div>

                    </div>
                </td>
                <td>$ {item.price * item.quantity}</td>
                <td className="cat-edit">
                <Link to='/shop/cart' onClick = {() => removeItem(item.id)}>
                <i className="icofont-trash"></i>
                </Link>
                </td>
            </tr>
        ))
    }
</tbody>
</table>
</div>

{/* Cart Bottom */}
<div className="cart-bottom">
    <div className="cart-checkout-box">
        <form className="coupon">
            <input type="text" placeholder='Coupon Code ....' className="cart-page-input-text" />
            <input type="submit" value="Apply COupon" />
        </form>
        <form className="cart-checkout">
            <input type="submit" value="Update Cart" />
            <div>
                <CheckoutPage />
            </div>
        </form>
    </div>
    <div className="shiping-box">
        <div className="row">
            <div className="col-md-6 col-12">
                <div className="calculate-shiping">
                    <h3>Calculate Shiping</h3>
                    <div className="outline-select">
                        <select name="" id="">
                            <option value="UK">United Kingdom</option>
                            <option value="USA">United State</option>

                            <option value="FR">France</option>
                            <option value="GR">Germany</option>
                            <option value="TK">Tokyo</option>

                        </select>
                        <span className='select-icon'>
                            <i className="icofont-rounded-down"></i>
                        </span>
                    </div>

                    <div className="outline-select shipping-select">
                        <select name="" id="">
                            <option value="NY">New Yourk</option>
                            <option value="LN">ULondon</option>

                            <option value="PR">Paris</option>
                            <option value="MD">Madrid</option>
                            <option value="RM">Rome</option>

                        </select>
                        <span className='select-icon'>
                            <i className="icofont-rounded-down"></i>
                        </span>
                    </div>
                    <input type="text" name='postalCode' className="cart-page-input-text" placeholder='Enter Your City Postal Code' />
                    <button type="submit" className="lab-btn" >Submit </button>
                </div>
            </div>
            <div className="col-md-6 col-12">
                <div className="cart-overview">
                    <h3>Cart Totals</h3>
                    <ul className="lab-ul">
                        <li>
                            <span className="pull-left">SubTotal</span>
                            <p className="pull-right">$ {totalPrice}</p>
                        </li>
                        <li>
                            <span className="pull-left">Shipping & Handleing</span>
                            <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                            <span className="pull-left">Tax</span>
                            <p className="pull-right">$ {(totalPrice * 0.05).toFixed(2)}</p>
                        </li>
                        <li>
                            <span className="pull-left">Order Total</span>
                            <p className="pull-right">$ {orderTotal()}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
)
}

export default CartPage