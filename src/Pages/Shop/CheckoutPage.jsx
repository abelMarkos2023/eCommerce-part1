import React, { useState } from 'react'
import { Button,Modal } from 'react-bootstrap';
import './Modal.css'
import { useLocation, useNavigate } from 'react-router-dom';
const CheckoutPage = () => {

const [show,setShow] = useState(false);
const [tab,setTab] = useState("visa");

const handleTab = type => setTab(type);

const handleClick = () => {
setShow(!show);
}
const handleShow = () => setShow(true)
const handleClose = () => setShow(false)

const handleOrder = () => {
    alert("Your Order Was Placed Successfully")
    localStorage.removeItem('cart')
    navigate('/')
}

const location = useLocation()
const navigate = useNavigate()



return (
<div className="modalCard">
<Button variant='primary' className='py-2' onClick={handleShow}>
Proceed To Checkout
</Button>
<Modal show={show} onHide={handleClose} className='modal fade' centered>
<div className="modal-dialog">
<h5 className='px-2 pb-3'>Select Your Payment Method</h5>
<div className="modal-content">
<div className="modal-body">
<div className="tabs mt-3">
<ul className='nav nav-tabs' id='myTab' role='tablist'>
<li className='nav-item' role='presentation'><a className={`nav-link ${tab === 'visa' ? 'active':''}`} 
id='visa-tab'
data-toggle='tab'
aria-controls='visa'
aria-selected={tab === 'visa'}
onClick = {() => setTab('visa')}
role='tab'
href="#visa"><img src="/src/assets/visa.png" alt="" width='80' /></a></li>
<li className='nav-item' role='presentation'><a className={`nav-link ${tab === 'visa' ? '':'active'}`} 
id='paypal-tab'
data-toggle='tab'
aria-controls='paypal'
aria-selected={tab === 'paypal'}
onClick = {() => setTab('paypal')}
role='tab'
href="#paypal"><img src="/src/assets/paypal.png" alt="" width='80' /></a></li>
</ul>
<div className="tab-content" id='myTabContent'>
{/* Visa Content */}
<div className={`tab-pane fade ${tab === 'visa' ? 'show active':''}`}
id='visa'
role='tabpanel'
aria-labelledby='visa-tab'>
<div className="mx-2 mt-2">
    <div className="text-center">
        <h5>Credit Card Information</h5>
    </div>
    <div className="form mt-2">
            <div className="inputbox">
                <input type="text" placeholder='Holder Name ' className="form-control" />
            </div>
            <div className="inputbox">
                <input type="text" className="form-control" placeholder="Card Number" />
            </div>
            <div className="d-flex gap-2 align-items-center">
            <div className="inputbox">
                <input type="text" className="form-control" placeholder="CVV" />
            </div>
            <div className="form-group d-flex">
                <input type="text" className="form-control" placeholder="Expiry Date" />
            </div>
            </div>
            <div className="mt-1 pay">
            <button onClick={handleOrder} className="btn btn-success btn-block">
                 Order Now
            </button>
            </div>
    </div>
</div>

</div>
{/* Paypal Content */}

<div className={`tab-pane fade ${tab === 'paypal' ? 'show active':''}`}
id='paypal'
role='tabpanel'
aria-labelledby='paypal-tab'>
<div className="mx-2 mt-2">
    <div className="text-center">
        <h5>Paypal Account Information</h5>
    </div>
    <div className="form mt-2">
            <div className="inputbox">
                <input type="text" placeholder='Email Address ' className="form-control" />
            </div>
            <div className="inputbox">
                <input type="text" className="form-control" placeholder="your Name" />
            </div>
            <div className="d-flex gap-2 align-items-center">
            <div className="inputbox">
                <input type="text" className="form-control" placeholder="Extra Info" />
            </div>
            <div className="form-group d-flex">
                <input type="text" className="form-control" placeholder="Expiry Date" />
            </div>
            </div>
            <div className="mt-2 pay">
            <button onClick={handleOrder} className="btn btn-success btn-block">
                Place Order
            </button>
            </div>
    </div>
</div>

</div>

</div>
<p className="mt-3 px-4 p-Disclaimer">
    <em>Payment Disclaimer :</em> In no event shal payment or partial payment by owner for any material or services
</p>
</div>
</div>
</div>
</div>
</Modal>
</div>
)
}

export default CheckoutPage