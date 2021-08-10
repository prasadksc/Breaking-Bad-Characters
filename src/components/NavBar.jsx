import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/breaking_bad_logo.png';
import SearchBar from './SearchBar';




const NavBar = ({value,onChange}) => {
    return ( 
    <div className="navbar">
            <NavLink to="/" className="link_logo"><img src={logo} className="navbar_logo" alt="breaking_bad_logo" /></NavLink>
            <SearchBar value={value} onChange={onChange}/>
    </div> );
}
 
export default NavBar;