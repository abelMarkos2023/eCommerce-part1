import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import blogList from '../../utilis/blogdata'
import PageHeader from '../../Components/PageHeader/PageHeader'
import PopularTags from '../Shop/PopularTags';
import PopularPosts from '../Shop/PopularPosts';

const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
    ];
    
const BlogPost = () => {

const [post,setPost] = useState({})

const {id} = useParams();

useEffect(() => {
const blog = blogList.filter(p => p.id === Number(id))
if(Object.keys(blog[0]).length > 2){
setPost(blog[0])
}
},[id])
console.log(post)
return (
<div>
    
                
<PageHeader title={post.title} currentPage={` blog /${post.title}`}/>
<div className="blog-section blog-single padding-tb section-bg">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-8 col-12">
        <article>
            <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center">
                    <div className="col">
                        <div className="post-item style-2">
                            <div className="post-inner">
                          
                                    <div className='' key={post.id}>
                                        <div className="post-thumb">
                                            <img src={post.imgUrl} alt="" />
                                        </div>
                                        <div className="post-content">
                                            <h3>{post.title}</h3>
                                            <div className="meta-post">
                                            <ul className="lab-ul">
                                {
                                  post?.metaList?.map(meta => (
                                    <li key={meta.text}>
                                      <i className={meta.iconName}></i>
                                      {meta.text}
                                    </li>
                                  ))
                                }
                                <li>
                                    <i className="icofont-comment"></i>
                                    {post.commentCount} comments
                                </li>
                              </ul>
                                            </div>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolor et culpa hic. Ea modi magnam dolore repudiandae praesentium voluptate ducimus unde, quod fugit iure corporis dignissimos enim atque saepe assumenda. Illum a fugit suscipit esse nisi quos exercitationem! Illo unde qui quas recusandae, eaque fugit laudantium itaque commodi ipsum!</p>

                                            <blockquote>
                                               <p> {post.desc}</p>
                                               <cite>
                                                <a href="#">.... Abel Markos</a>
                                            </cite>
                                            </blockquote>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores, dicta impedit iusto dolorem harum fugit corporis, aperiam voluptates, maxime accusantium! Optio fugit pariatur aut corporis voluptatibus, praesentium expedita odio.</p>
                                           
                                            <blockquote>
                                                <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                <p><h2>{post.title}</h2></p>
                                            </blockquote>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quaerat voluptas quae ullam dolore maxime cupiditate ratione odio nihil doloremque! Natus id maiores dolore qui eaque et quam porro a consequatur nisi nemo possimus ea dolorem consequuntur, quos corporis repellat eveniet aliquam pariatur cupiditate cum saepe? Non tempora numquam quam laboriosam labore esse repellat at reiciendis reprehenderit exercitationem, optio quasi.</p>
                                            <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa labore distinctio beatae asperiores, excepturi deleniti totam fugit facilis qui reprehenderit fugiat animi repellendus atque magni recusandae autem delectus vitae dolorum, quo quos ratione? Ullam accusantium commodi iste minus nulla. Enim?</p>
                                            <img src="/src/assets/images/blog/single/03.jpg" alt="" />
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellat molestias, explicabo recusandae dolorem itaque dignissimos velit mollitia quisquam corporis odio nihil quidem pariatur, deleniti praesentium quia vitae. Numquam exercitationem officia, enim, modi natus voluptatem architecto totam porro eligendi suscipit animi. Magni amet dolores facilis exercitationem totam perspiciatis, tempora fugit beatae iure eaque omnis inventore dolor autem accusamus necessitatibus maxime explicabo! Laborum, saepe itaque? Qui tempora libero alias. Nam fugit tempora aliquam porro voluptates eligendi sit quia ad dolore eveniet.</p>
                                            <div className="tags-section">
                                                <ul className="tags lab-ul">
                                                    <li><a href="#">Agency</a></li>
                                                    <li><a href="#">Business</a></li>
                                                    <li><a href="#">Personal</a></li>
                                                </ul>
                                                <ul className="lab-ul social-icons">
                                                    {
                                                        socialList.map(val => (
                                                            <li key={val.className}>
                                                                <a href="#" className={val.className}>
                                                                    <i className={val.iconName}></i>
                                                                </a>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
    <div className="col-lg-4 col-12">
        <aside>
            <PopularTags />
            <PopularPosts />
        </aside>
    </div>
</div>
</div>
</div>
           
</div>
)
}

export default BlogPost