import React from 'react'

const ShopCategories = ({filterCategories,term,categories}) => {
    console.log(categories)
  return (
<>
<div className="widget-header">
    <h5>All Categories</h5>

</div> 
<div>
    <button onClick={() => filterCategories('All')} className={`m-2 ${term === 'All' ?"bg-warning":""}`}>All</button>
    {
        categories.map(cat => <button
        key={cat}
        onClick={()=>filterCategories(cat)}
        className={`m-2 ${cat === term?"bg-warning":""}`}
        >{cat}</button>)
    }
</div>
</>
 )
}

export default ShopCategories