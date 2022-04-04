import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import getData from '../dataController'

const Home = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <>
            <div className="home">
                <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 class="display-4">Products</h1>
                    <p class="lead">Here you may find some of our products</p>
                </div>
                <div className="row">
                    {state.data.length ?
                        state.data.map((elem) => (
                            <div className="col-md-3 mt-2"><ProductCard data={elem} /></div>
                        ))
                        :
                        <h3>No products</h3>
                    }
                </div>
            </div>
        </>
    )
}

export default Home