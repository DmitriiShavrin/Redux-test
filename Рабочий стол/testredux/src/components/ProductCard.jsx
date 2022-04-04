import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './styles.css';

const ProductCard = (props) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className="card mb-3" >
                <img
                    src={`/assets/${props.data.img}`}
                    className="card-img-top img_card" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <div className="price">{props.data.price} KZT</div>
                    <div className="d-flex justify-content-between">
                        <Link to={`/product/${props.data.id}`} className="btn btn-warning button_w">Инфо</Link>
                        <button className="btn btn-success button_w" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { ...props.data, size: 'S' } })}>Добавить</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard