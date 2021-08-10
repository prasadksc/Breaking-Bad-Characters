import React from 'react'

const SearchBar = ({value,onChange}) => {


    

    return ( 
        <form className="navbar_search">
             <input type="text" 
                    name="query"
                    className="form-control"
                    placeholder = "Search characters..." 
                    value={value}
                    onChange={onChange}
                    autoFocus
              />
      </form>
     );
}
 
export default SearchBar;