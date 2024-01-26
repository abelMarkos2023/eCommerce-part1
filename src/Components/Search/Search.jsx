import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = ({gridView,products}) => {

    const [term,setTerm] = useState('')

    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(term.toLocaleLowerCase()))
  return (
<div className="widget widget-search">
    <form className="search-wrapper mb-3">
        <input type="text" name='search' defaultValue={term} onChange={e => setTerm(e.target.value)} placeholder='Search Products .....'/>
        <button type="submit">
            <i className="icofont-search-2"></i>
        </button>
    </form>

    {/* Search Result */}
    {
        term && filteredProducts.map(product => <Link to={`/shop/${product.id}`}>
            <div className="d-flex gap-3 p-3">
                <div>
                    <div className="pro-thumn h-25">
                        <img src={product.img} className='flex-{groe|shrink}-0' width={70} alt="" />
                    </div>
                </div>
                <div className="product-content">
                    <p>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </p>
                    <h6>${product.price}</h6>
                </div>
            </div>
        </Link>)
    }
</div>

)
}

export default Search