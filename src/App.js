import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//pages
import IndexPage from './pages/index';
import ProductsPage from './pages/products';
import ContactPage from './pages/contact';
import './css/general.css'
import './css/contact.css'

import ProductCard from './components/product.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';



class App extends React.Component {


  render(){
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
    // <Router >
    //   <Switch>
    //     {/* Switch is needed because i have mutiple routes */}
    //  <Route exact path="/" component={ProductsPage} />
    //  <Route exact path="/index.html" component={IndexPage} />
    //  <Route exact path="/products.html" component={ProductsPage} />
    //  {/* <Route exact path="/contact.html" component={ContactPage} /> */}
    //  </Switch>
    // </Router>
  );
  }
}

export default App;
