import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PopularPosts from '../Shop/PopularPosts'
import PopularTags from '../Shop/PopularTags'

import {Swiper,SwiperSlide} from 'swiper/react'
import ProductDisplay from './ProductDisplay';
import Review from '../Shop/Review';

// import {autoplay} from 'swiper/modules'
const SingleProduct = () => {
const [product,setProduct] = useState({});

const {id} = useParams()

useEffect(()=>{
fetch("/src/products.json").then(res => res.json()).then(data => {
const product = data.filter(p => p.id === id)
setProduct(product[0]);
})
},[id])

console.log(product)
return (
<div>
<PageHeader title={'Product Detail'} currentPage={'Shop / ' + product.name}  />

<div className="shop-single padding-tb aside-bg">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-8 col-12">
<article>
<div className="product-details">
<div className="row align-items-center">
    <div className="col-md-6 col-12">
        <div className="product-thumb">
            <div className="swiper-container pro-single-top">
                <Swiper className='MySwiper'
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                    delay:2000,
                    disableOnInteraction:false
                }}
                // modules={[AutoPlay]}
                navigation={{
                        nextEl: '.pro-single-next',
                        prevEl: '.pro-single-prev',

                }}
                >
                    <SwiperSlide
                    >
                        <div className="single-thumb">
                            <img src={product.img} alt="" />
                        </div>
                    </SwiperSlide>
                    

                </Swiper>
                <div className="pro-single-prev">
                    <i className="icofont-rounded-right"></i>
                </div>
                <div className="pro-single-next">
                    <i className="icofont-rounded-left"></i>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-6 col-12">
        <div className="post-content">{
            <ProductDisplay product={product} />
        }</div>
    </div>
</div>
</div>
<div className="review">
    <Review />
</div>
</article>
</div>
<div className="col-lg-4 col-12">
    <aside className="ps-lg-4">
    <PopularPosts />
        <PopularTags />
    </aside>
</div>
</div>
</div>
</div>
</div>
)
}

export default SingleProduct