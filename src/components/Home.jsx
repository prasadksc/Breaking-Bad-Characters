import React from 'react';
import Pagination from './Pagination';
import { paginate } from './../utils/paginate';
import Characters from './Characters';



const Home = ({characters,pageSize,currentPage,searchQuery,handlePageChange}) => {


    const filteredCharacters = characters.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))

    const paginateCharacters = paginate(filteredCharacters,currentPage,pageSize);
    // console.log(paginateCharacters)


    return ( 
        <div className="Home">
            
                <Characters characters={paginateCharacters}/>

                {/* if searchquery === any query pagination will hide if u clear the query it shows pagination in bottom */}
                {searchQuery === '' ? <Pagination itemsCount={characters.length}
                            pageSize={pageSize} 
                            currentPage={currentPage} 
                            onPageChange={handlePageChange}/> : ''}
                
                
            </div>
     );
}
 
export default Home;