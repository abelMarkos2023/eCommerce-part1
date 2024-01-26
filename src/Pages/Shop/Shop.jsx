import React, { useEffect, useState } from 'react'
import PageHeader from '../../Components/PageHeader/PageHeader'


const productPerPage = 12
import Data from '../../products.json'
import ProductCard from '../../Components/ProductCard/ProductCard';
import Pagination from '../../Components/Pagination/Pagination';
import Search from '../../Components/Search/Search';
import ShopCategories from '../../Components/ShopCategories/ShopCategories';
const Shop = () => {
    const [gridView,setGridView] = useState(true);
    const [products,setProducts] = useState(Data);
    const [page,setPage] = useState(1)

    const [category,setCategory] = useState("All");

    const categories = [...new Set(Data.map(p => p.category))]

    const filterCategories = cat => {

        if(cat === 'All'){
            setCategory(cat);

            setProducts(Data)
            return;
        }
        setCategory(cat);

        setProducts(Data.filter(p => p.category === cat));
    }

    const paginate = page => {
        const start = (page - 1) * productPerPage;
        const pro = Data.slice(start, start + productPerPage);
        setPage(page)
        setProducts(pro)
    }

    useEffect(()=>{
        const pro = Data.slice(0,12)
        setProducts(pro)
    },[])
return (
<div>
<PageHeader title="Our Shop" currentPage={'Shop'} />
<div className="shop-page padding-tb">
    <div className="container">
<div className="row justify-content-center">
    <div className="col-lg-8 col-12">
        <article>
            {/* Layout & Title */}
        <div className="shop-title d-flex flex-wrap justify-content-between">
            <p>Showing 01-12 out of 139 Result</p>
            <div className={`product-view-mode ${gridView?"gridActive":'listActive'}`}>
                <a onClick = {() => setGridView(!gridView)} className="grid">
                    <i className="icofont-ghost"></i>
                </a>
                <a onClick = {() => setGridView(!gridView)} className="list">
                    <i className="icofont-listine-dots"></i>
                </a>
            </div>
        </div>
        <div>
            <ProductCard gridView={gridView} products={products} />
        </div>
        <Pagination page={page} numberOfPages = {Math.ceil(Data.length/12)} paginate = {paginate}/>
        </article>
    </div>
    <div className="col-lg-4 col-12">
        <aside>
            <Search gridView = {gridView} products={products} />
            <ShopCategories term={category} filterCategories={filterCategories}  categories={categories}/>
        </aside>
    </div>

    </div>
    </div>
</div>
</div>
)
}

export default Shop