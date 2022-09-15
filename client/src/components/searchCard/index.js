import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shipping from '../../assets/shipping.png';
import './styles.scss';

const SearchCard = ({item}) => (
  <Link to={`/items/${item.id}`} className='items-card'>
    <img src={item.picture} className='thumbnail' />
    <div className='item-detail'>
      <span className='price'>
        {item.price.currency} {item.price.amount}
        <span className="shipping"> 
          {item.free_shipping === true && (
            <img src={shipping} alt='icono de envío gratis' />
          )}
      </span>
      </span>
      <span className='description'>
        {item.title}
      </span>
    </div>
    <span className='place'>{item.seller_address}</span>
  </Link>
);

SearchCard.propTypes = {
  item:  PropTypes.object.isRequired,
};


export default SearchCard;