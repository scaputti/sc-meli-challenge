import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Breadcrumb = ({data}) => (
  <ul className='breadcrumb'>
    {data.map((value, i) => 
      <li key={i}>
        <Link to={`/items?search=${value.name}`}>{value.name}</Link>
      </li>
    )}
  </ul>
);

Breadcrumb.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Breadcrumb;
