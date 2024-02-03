import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/images/logo/logo.png'
const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [headerFixed,setHeaderFixed] = useState(false)
    const [socialToggle,setSocialToggle] = useState(false)

    window.addEventListener('scroll',()=>{
        if(window.scrollY > 30){
            setHeaderFixed(true)
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed ?'header-fixed fadeInUp':''}`}>
        {/* Header Top Area */}
        <div className={`header-top d-md-none ${socialToggle ?'open':''}`}>
            <div className="header-top-area">
            <div className="container">
            <Link to='/' className='lab-btn me-3'>
                <span>Create an Account</span>
            </Link>
                <Link to='/'>Login</Link>
            </div>
            </div>
        </div>
        {/* Header Bottom */}
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    {/* Logo */}
                    <div className="logo-search-acte">
                        <div className="logo">
                            <Link to={"/"}>
                                <img src={Image} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="menu-area">
                        <div className="menu">
                            <ul className={`lab-ul ${menuToggle ?'active':''}`}>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/shop'}>Shop</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                                <li><Link to={'/about'}>About</Link></li>

                            </ul>
                           
                        </div>
                        {/* Signup & Login */}
                        <Link className="lab-btn me-3 d-none d-md-block" to='/'>Create Account</Link>
                            <Link to='/' className='d-none d-md-block'>Login</Link>

                            {/* Menu Toggler */}
                            <div onClick = {() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? 'active' :''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div onClick={()=> setSocialToggle(!socialToggle)} className="ellepsis-bar d-md-none">
                            <i className="icofont-info-circle"></i>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar