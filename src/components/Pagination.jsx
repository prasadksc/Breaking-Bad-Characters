import React from 'react'
import _ from 'lodash';


const Pagination = (props) => {
    const {itemsCount,pageSize,onPageChange,currentPage} = props

    const pagesCount = Math.ceil(itemsCount / pageSize);

    // console.log(itemsCount)
    //how many pages based itemsCount and pageSize
    // console.log(pagesCount)
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1)
    // console.log(pages)

    return ( 
        <nav>
            <ul className="pagination pagination-lg justify-content-center">
                {pages.map(page => 
                <li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}>
                    <button  onClick={()=>onPageChange(page)} className="page-link">{page}</button>
                </li>)}
            </ul>
        </nav>
     );
}
 
export default Pagination;