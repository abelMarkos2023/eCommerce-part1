import React, { useState } from 'react'
import products from '../../products.json'
import { Link } from 'react-router-dom';
import SelectedCategory from '../SelectedCategory/SelectedCategory';
const desc = "We Have The Largest Collection Of Products";
const title = <h2>Search Your One From <span>Thousand</span> Of Products</h2>
const bannerList = [
    {icoName:"icofont-users-alt-4",text:"1.5 Million Costumer"},
    {icoName:"icofont-notification",text:"More Than 2000 Marchent"},
    {icoName:"icofont-globe",text:"Buy anything Online"},


];
const Banner = () => {

    const [search,setSearch] = useState("")
    const [productList,setProductList] = useState(products)

    const handleChange = e => {
        setSearch(e.target.value)
        const filterdProducts = products.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

        console.log(filterdProducts)
        setProductList(filterdProducts)
    }

    const filterByCategory = e => {
        if(e.target.value === "all"){
            setProductList(products)
        }else{
            setProductList(products.filter(p=> p.category === e.target.value))
            setSearch(true)
            console.log(productList)
        }
    }
  return (
    <div className="banner-section style-4">
        <div className="container">
            <div className="banner-content">
                {title}
                {console.log(products)}
                <form>
                    <SelectedCategory select = {filterByCategory} />
                    <input type="text" name='search' placeholder='Search Products ....' onChange={handleChange}/>
                    <button><i className="icofont-search"></i></button>
                </form>
                {desc}
                <ul className="lab-ul">
                    {
                       search &&  productList.map((p,i)=> <li key={p.id}>
                            <Link to ={`/shop/${p.id}`}>{p.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner