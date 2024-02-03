import React, { useState } from 'react'
import Ratting from '../../Components/Ratting/Ratting';
const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

const Review = () => {

    const [review,setReview] = useState(true);

  return (
    <>
        <ul className={`lab-ul review-nav ${review ? 'RevActive':'DescActive'}`}>
            <li className='desc' onClick={() => setReview(!review)}>Description</li>
            <li className='rev' onClick={() => setReview(!review)}>Reviews 4</li>

        </ul>
        <div className={`review-content ${review ? 'review-content-show':'description-show'}`}>
            <div className="review-showing">
            <ul className="lab-ul content">
                {
                    ReviewList.map((review,i) => (
                        <li key={i}>
                            <div className="post-thumb">
                                <img src={review.imgUrl} alt="" />
                            </div>
                            <div className="post-content">
                                <div className="entry-meta">
                                    <div className="posted-on">
                                        <a href="#">{review.name}</a>
                                        <p>{review.date}</p>
                                    </div>
                                </div>
                                <div className="entry-content">
                                    {review.desc}
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
                {/* Add Review Field */}
                <div className="client-review">
                    <div className="review-form">
                        <div className="review-title">
                            <h5>{reviwtitle}</h5>
                        </div>
                        <form action="" className="row">
                            <div className="col-12 col-md-4">
                                <input type="text" name='name' placeholder='Full Name ....' />
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="email" name='email' placeholder='Your Email ....' />
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="rating">
                                    <span>Your Ratting : </span>
                                    <Ratting />
                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <textarea name="message" id="" rows="8" placeholder='Leave a Review .....'></textarea>
                            </div>
                            <div className="col-12">
                                <button type='submit' className="default-button">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos, exercitationem vero suscipit magni ad natus molestiae quisquam quae aut dolorum minima adipisci asperiores optio, facere hic error. Rem qui perferendis asperiores vitae sit non commodi nihil aliquam. Facere eos nesciunt nobis assumenda! Rem molestiae quae possimus eum architecto consequatur accusamus, adipisci voluptatem ex officia quibusdam modi expedita placeat itaque temporibus, deserunt voluptatibus nesciunt neque assumenda quas, impedit soluta ea illum! Iste id error, nulla veniam placeat porro at eum.</p>

                <div className="post-item">
                    <div className="post-thumb">
                        <img src="/src/assets/images/shop/01.jpg" alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, vel!</li>
                        </ul>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsum voluptate laboriosam totam asperiores cumque! Nulla, tempore error pariatur fugit accusantium quidem dignissimos expedita. Ut recusandae praesentium sed non placeat repudiandae explicabo dicta eum consequuntur deleniti, laborum sequi distinctio natus.</p>
            </div>
        </div>
    </>
  )
}

export default Review