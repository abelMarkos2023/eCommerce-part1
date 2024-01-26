import React from 'react'
import { Link } from 'react-router-dom';

const btnText = "Signup Now";
const title = "Shop Any Time, Any Where"
const desc = "Take shop with your devices on our App & Start to learn at your convinients, Just Download Install and Start Learning"
const AppSection = () => {
  return (
    <div className="app-section padding-tb">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link className='lab-btn mt-4' to='/sign-up'>{btnText}</Link>
            </div>
            <div className="section-wrapper">
                <ul className="lab-ul">
                    <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AppSection