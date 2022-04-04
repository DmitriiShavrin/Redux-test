import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Cart from './views/Cart';
import Product from './views/Product';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className="container content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
