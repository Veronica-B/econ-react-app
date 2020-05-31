import React from 'react';


class Footer extends React.Component {
render(){
    return(

        <footer className="footer">
             
<li className="navigation__options"> <a  className="navigation__items" href="index.html">Home</a> </li>


<li className="navigation__options"> <a className="navigation__items active" href="products.html">Products</a></li>


<li className="navigation__options"> <a className="navigation__items" href="contact.html">Contact Us</a></li>

<div class="social-content">
            <div class="container-footer">
    
            <div class="footer__dots"></div>
            <div class="footer__dots"></div>
            <div class="footer__dots"></div>
      
            
           <h3 class="social-content__text">Keep in touch!</h3> 
       
            <div class="footer__dots"></div>
            <div class="footer__dots"></div>
            <div class="footer__dots"></div>

           </div>

        <a href="https://www.facebook.com/">
            <img className="social-content__icon" src="https://i.ya-webdesign.com/images/facebook-icon-png-black-1.png"
                alt="facebook icon"/>
        </a>
        <a href="https://www.instagram.com/">
            <img className="social-content__icon"
                src="https://library.kissclipart.com/20180912/eq/kissclipart-transparent-background-instagram-logo-black-and-wh-31e3f146fed68009.jpg"
                alt="Instagram icon"/>
        </a>
        <a href="https://twitter.com/explore">
            <img className="social-content__icon" src="https://chaminade.edu/wp-content/uploads/2019/08/Twitter-Icon-black-1.png"
                alt="Twitter icon"/>
        </a>

        <div class="social-content__copyright">{'\u00A9'} 2020, Veronica Barcia. All rights reserved.</div>
        </div>

    </footer>
    )
}

}

export default Footer