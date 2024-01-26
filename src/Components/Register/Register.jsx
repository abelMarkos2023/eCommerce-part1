import React from 'react'


const subTitle = "Save The Day";
const title = (<h2 className='title'>
Join On a Long Day Of Free Workshop for <b>Advanced <span>Mastering Of Sales</span></b>
</h2>
    )

    const desc = "Limited Time Offer ! Hurry up"
const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
        <div className="container">
            <div className="row g-4 row-cols-1 row-cols-lg-2 align-items-center">
                <div className="col">
                    <div className="section-header">
                        <span className="subtitle">{subTitle}</span>
                        {title}
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="section-wrapper">
                        <h2>Register Now</h2>
                        <form className="register-form">
                            <input type="text" name='username' placeholder='User Name ....' className="reg-input" />
                            <input type="text" name='email' placeholder='User Email ....' className="reg-input" />
                            <input type="password" name='password' placeholder='User Password ....' className="reg-input" />
                            <input type="text" name='password_confirmation' placeholder='Confirm Your Password ....' className="reg-input" />
                            <button className='lab-btn'>Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register