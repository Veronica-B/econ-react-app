import React from 'react';
import ProductCard from '../components/product.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import '../css/general.css'

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
    <div className="background-color">
         <div className="background_color grid-borders">
      <ProductCard />
      </div>
    </div>
    <Footer />
    </div>
  );
}


export default ProductsPage;