import React from 'react';
import Navbar from '../nav/index';
import Breadcrumb from '../breadcrumb';
import PropTypes from 'prop-types';
import './styles.scss';

const Layout = ({children, breadCrumbInfo}) => (
  <>
    <nav>
      <Navbar />
    </nav>
    <div className='wrapper'>
      {breadCrumbInfo &&
        <Breadcrumb data={breadCrumbInfo} />
      }
      {children}
    </div>
  </>
);

Layout.propTypes = {
  breadCrumbInfo: PropTypes.arrayOf(PropTypes.shape()),
};

Layout.defaultProps = {
  breadCrumbInfo: [],
};


export default Layout;