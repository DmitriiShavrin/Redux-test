import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {

  useEffect(() => {
    const Cart = JSON.parse(localStorage.getItem('cart'));
    if (Cart)
      props.dispatch({ type: 'SET_CART', payload: Cart });
  }, []);

  return (
    <>
      <div className=" p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <h5 className="my-0 mr-md-auto font-weight-normal link">
            Online shop
          </h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link to='/' className="p-2 text-dark">Home</Link>
            <Link to='/cart'
              className="p-2 text-dark"
            >Cart <span className='badge bg-danger text-white'>{ props.total_count }</span>  </Link>
          </nav>
        </div>
      </div>
    </>
  )
};

export default connect(state => state)(Header)