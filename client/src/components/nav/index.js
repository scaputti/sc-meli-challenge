import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search from '../../assets/search.svg';
import logo from '../../assets/logo.png';
import './styles.scss';

const Navbar = () => {
  const [query, setQuery] = useState();
  
  const redirect = (e) => {
    e.preventDefault();
    return window.location.href=`items?search=${query}`;
  }

  return (
    <div className='navigation'>
      <Link to='/' className='logo'>
        <img src={logo} className='logo' alt='logo de mercado libre' />
      </Link>
      <form className='form-search' onSubmit={redirect}>
        <input 
          type='text' 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder='Nunca dejes de buscar'
          name='q'
          className='input-search'
          autoComplete='off'
        />
        <button type='submit' className='search-button'>
          <img className='search-icon' src={search} alt='icono de busqueda' />
        </button>
      </form>
    </div>
  );
}

export default Navbar;