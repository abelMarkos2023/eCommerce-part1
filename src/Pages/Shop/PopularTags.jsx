import React from 'react'

const title = "Most Popular Tags";

const tagsList = [
    {
    link: "#",
    text: "envato",
    },
    {
    link: "#",
    text: "themeforest",
    },
    {
    link: "#",
    text: "codecanyon",
    },
    {
    link: "#",
    text: "videohive",
    },
    {
    link: "#",
    text: "audiojungle",
    },
    {
    link: "#",
    text: "3docean",
    },
    {
    link: "#",
    text: "envato",
    },
    {
    link: "#",
    text: "themeforest",
    },
    {
    link: "#",
    text: "codecanyon",
    },
    ];
    
const PopularTags = () => {
  return (
    <div className="widget widget-tags">
        <div className="widget-header">
            <h5 className="title">{title}</h5>
        </div>

        <ul className="widget-wrapper">
                {
                    tagsList.map(tag => (
                        <li key={tag.text}>
                            <a href={tag.link}>{tag.text}</a>
                        </li>
                    ))
                }
        </ul>
    </div>
  )
}

export default PopularTags