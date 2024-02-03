import React from 'react'
import { Link } from 'react-router-dom';


const postList = [
    {
    id:1,
    imgUrl: '/src/assets/images/blog/10.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor People Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:2,
    imgUrl: '/src/assets/images/blog/11.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:3,
    imgUrl: '/src/assets/images/blog/12.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    {
    id:4,
    imgUrl: '/src/assets/images/blog/09.jpg',
    imgAlt: 'rajibraj91',
    title: 'Poor Peoples Campaign Our Resources',
    date: 'Jun 05,2022',
    },
    ]
    const title = "Most Popular Posts";    
const PopularPosts = () => {
  return (
<div className="widget widget-post">
    <div className="widget-header">
        <h5>{title}</h5>
    </div>
    <ul className="widget-wrapper">
        {
            postList.map((post,index) => (
                <li key={index} className='d-flex justify-content-between flex-wrap'>
                    <div className="post-thumb">
                        <Link to={`/blog/${post.id}`}>
                            <img src={post.imgUrl} alt="" />
                        </Link>
                    </div>
                    <div className="post-content">
                        <Link to={`/blog/${post.id}`}>
                            <h5>{post.title.slice(0,20).concat('....')}</h5>
                        </Link>
                        <p>{post.date}</p>
                    </div>
                </li>
            ))
        }
    </ul>
</div>
  )
}

export default PopularPosts