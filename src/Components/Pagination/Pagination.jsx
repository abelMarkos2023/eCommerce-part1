import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({numberOfPages,paginate,page}) => {
    const arr = [];
    for (let index = 0; index < numberOfPages; index++) {
          arr.push(index +1)  
            
    }
  return (
    <ul className='default-pagination lab-ul'>
        <li><Link onClick={() =>{
            if(page > 1){
                paginate(page -1)
            }
        }} href="#">
        <i className="icofont-rounded-left"></i>

            </Link></li>
        {
            arr.map((item,index) => (
                <li kay={item} className={`page-item ${page === item ? 'bg-warning':''}`}>
                <button className='bg-transparent' key={index} onClick = {() => paginate(item)}>{item}</button>
                </li>
            ))
        }
        <li><Link onClick={() =>{
            if(page < arr[arr.length - 1]){
                paginate(page + 1)
            }
        }} href="#">
        <i className="icofont-rounded-right"></i>

            </Link></li>
    </ul>
  )
}

export default Pagination