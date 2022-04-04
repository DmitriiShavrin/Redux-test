import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Cart = (props) => {

  useEffect(() => {
    const Cart = JSON.parse(localStorage.getItem('cart'));
    if (Cart)
      props.dispatch({ type: 'SET_CART', payload: Cart });
  }, []);

  return (
    <>
      <div className="cart">
        <div className="row">
          <div className="col-md-12">
            {props.cart.length
              ?
              <>
                <div className="d-flex align-items-center pb-4">
                  <h3 className='pt-2 pb-2 text-success'>В Вашей корзине следущие товары:</h3>
                  <h5 className='text-danger ms-auto pt-2 pb-2 cur' onClick={() => props.dispatch({ type: 'DELETE_CART' })}>Очистить корзину</h5>
                </div>
                {
                  props.cart.map((item, index) => (
                    <div className="" key={index}>
                      <li class="list-group-item mb-1">
                        <div className=" d-flex align-items-center">
                          <h5 className='mr'>{index + 1}</h5>
                          <div className="mr">
                            <img src={`/assets/${item.img}`} className='img_card_cart' />
                          </div>
                          <div className="mr">
                            <h3 className=''>{item.title} - size: { item.size }</h3>
                            <h6>Стоимость одного товара: <span className='text-danger'>{item.price.toLocaleString()}</span>  KZT</h6>
                            <h6>Общая стоимость <span className='text-danger'>{item.price * item.count}</span>  KZT</h6>
                          </div>
                          <div className="d-flex flex-column ms-auto">
                            <input type="number" className='mb-3' id='quantity' value={item.count} onChange={ (e) => props.dispatch({ type: 'CHANGE_COUNT', payload: { ...item, count: e.target.value }})} min="1" max={ item.quantity } />
                            <button className='btn btn-danger' onClick={() =>  props.dispatch({ type: 'DELETE_ITEM', payload: index })}>Delete</button>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))
                }
                <h3 className='pt-5 pb-2 text-warning'>Общая стоимость заказа: <span className='text-danger'>{props.total} KZT</span> </h3>
              </>
              :
              <>
                <h3 className='pt-2 pb-2 text-success mt-5'>В Вашей корзине нет товаров</h3>
                <h5 className='text-warning cur' onClick={() => window.location.href = '/'}>На главную</h5>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default connect(state => state)(Cart)