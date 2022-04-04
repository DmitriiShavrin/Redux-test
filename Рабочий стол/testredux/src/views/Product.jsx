import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import getData from '../dataController';
import './styles.css';

const Product = (props) => {

  const { id } = useParams();

  const sizeRef = useRef();
  const countRef = useRef();

  useEffect(() => {
    props.dispatch(getData());
  }, []);

  useEffect(() => {
    props.dispatch({ type: 'SET_ITEM', payload: id });
  }, [props.data]);


  return (
    <>
      <div className="product">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-9">
            <h2 className="card-title text-danger mt-3 mb-4">{props.item?.title}</h2>
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col-auto d-none d-lg-block">
                <img src={`/assets/${props.item.img}`} className="p-3" />
              </div>
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{props.item?.title}</h3>
                <p className="card-text mt-5 ">Стоимость: <span className='text-dnager'>{props.item?.price}</span>  KZT</p>
                <div className="d-flex align-items-center">
                  <p className="card-text">Размер: </p>
                  <select className="custom-select w_100 mb-3 ml-3" id="size" ref={sizeRef}>
                    {
                      props.item.sizes ?
                        props.item.sizes.map((el, idx) => (
                          <option key={idx} value={el}>{el}</option>
                        ))
                        : null
                    }
                  </select>
                </div>
                <div className="d-flex align-items-center mb-5">
                  <p className="card-text mr-3 pt-2">Кол-во: </p>
                  <input type="number" min="1" max={props.item.quantity} ref={countRef} className='ps-3 form-control w_100' id='quantity' defaultValue="1" />
                </div>
                <button className="btn btn-success" onClick={() => props.dispatch({ type: 'ADD_TO_CART', payload: { ...props.item, count: countRef.current.value, size: sizeRef.current.value } })}>Добавить в корзину</button>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  )
}

export default connect(state => state)(Product)