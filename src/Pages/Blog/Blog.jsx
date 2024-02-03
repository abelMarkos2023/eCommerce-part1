import React from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'

import blogList from '../../utilis/blogdata'
import { Link } from 'react-router-dom'


const Blog = () => {
  return (
    <div>
      <PageHeader title={'Our Blog'} currentPage={'Blog'} />
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-12 row-cols-md-2 row-cols-xl-3 g-4 justify-content-center">
              {
                blogList.map(blog => (
                  <div key={blog.id} className="col">
                      <div className="post-item">
                        <div className="post-inner">
                          <div className="post-thumb">
                            <Link to={`/blog/${blog.id}`}>
                              <img src={blog.imgUrl} alt={blog.title} />
                            </Link>
                          </div>
                          <div className="post-content">
                            <Link to={`/blog/${blog.id}`}>
                              <h4 className="post-title">
                                {blog.title}
                              </h4>
                            </Link>
                            <div className="meta-post">
                              <ul className="lab-ul">
                                {
                                  blog.metaList.map(meta => (
                                    <li key={meta.text}>
                                      <i className={meta.iconName}></i>
                                      {meta.text}
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>
                            <p>{blog.desc}</p>
                          </div>
                          <div className="post-footer">
                            <div className="pf-left">
                              <Link className='lab-btn-text' to={`/blog/${blog.id}`}>
                                {blog.btnText}
                                <i className="icofont-external-link"></i>
                              </Link>
                            </div>
                            <div className="pf-right">
                              <i className="icofont-comment"></i>
                              <span className="comment-count">{blog.commentCount}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog