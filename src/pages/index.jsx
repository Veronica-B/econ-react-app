import React, {useState} from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer';

const IndexPage = () =>{

// let dot1=document.getElementById('dot1');
// let dot2=document.getElementById('dot2');
// let dot3=document.getElementById('dot3');
// let i= 0;

// //0 1 2

// const images= ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg'];
// const dots=[dot1, dot2, dot3];

// const [pic, setImage] = useState(images[0]);
// //10000 is equaled to 10 seconds.
// const time= 1000;
// // let img=document.getElementById('img').setAttribute('src', pic);



// const change_Image= ()=>{
//     img.src =images[i];

//     switch(i){
//         default:
//         // dots[i].style["height"]="40px"
//         // dots[i].style["width"]="40px";
//         // dots[2].style["height"]="20px"
//         // dots[2].style["width"]="20px";
//         setImage(images[0])
//         i=i+1;
//         break;

//         case 1:
//         // dots[i].style["height"]="40px"
//         // dots[i].style["width"]="40px";
//         // dots[i-1].style["height"]="20px"
//         // dots[i-1].style["width"]="20px";
//         setImage(images[1])
//         i=i+1;
//         break;

//         case 2:
//         // dots[i].style["height"]="40px"
//         // dots[i].style["width"]="40px";
//         // dots[i-1].style["height"]="20px"
//         // dots[i-1].style["width"]="20px";
//         setImage(images[2])    
//         i=0;
//         break;    
//     }
// }


// function change_Image_Reverse(){
//     img.src =images[i];
//         switch(i){
//             default:
//             // dots[i].style["height"]="40px"
//             // dots[i].style["width"]="40px";
//             // dots[i+1].style["height"]="20px"
//             // dots[i+1].style["width"]="20px";    
//             i=2;
//             break;

//             case 1:
//             dots[i].style["height"]="40px"
//             dots[i].style["width"]="40px";
//             dots[i+1].style["height"]="20px"
//             dots[i+1].style["width"]="20px";    
//             i=i-1;
           
//             break;
 
//             case 2:
//             // dots[i].style["height"]="40px"
//             // dots[i].style["width"]="40px";
//             // dots[0].style["height"]="20px"
//             // dots[0].style["width"]="20px";    
//             i=i-1;
//             break;    
//         }
// }




        return(
<body className="background_color">

<Navbar />
  
    <div className="slideshow">
        {/* <button className="arrow" id="left-arrow" onClick={()=> change_Image()}>&lt;</button> */}
        <img id="img" className="image" src="images/img1.jpg" alt="people learning"/>
        <button className="arrow" id="right-arrow">&gt;</button>
        <div className="bottom_slideshow">
            <div id="dot1" className="dots"></div>
            <div id="dot2" className="dots"></div>
            <div id="dot3" className="dots"></div>
        </div>
    </div>
    <h2 className="title">Best Sellers</h2>

    <div className="grid">
        <section className="products">
            <img className="products__images"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg"
                alt="1984 book, which has a blue eye wide open. "/>
            <h2 className="products__title">1984 by George Orwell</h2>
            <p className="products__paragraph">1984 is a dystopian novella by George Orwell published in 1949, which follows
                the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent
                eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's
                lives.
                <span className="products__paragraph__price">$7.50</span>
            </p>
            <button className="products__button--mobile">Add to Cart</button>

        </section>
        <section className="products">
            <img className="products__images"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg"
                alt="To Kill a Mocking Bird book, with an minminalist desgin, there is a tree with a red background. "/>
            <h2 className="products__title">To Kill a Mocking Bird by Harper Lee</h2>
            <p className="products__paragraph">Set in a small town in the South, during the Depression, follows the life of
                8-year-old Scout Finch, her brother, Jem, and their father, who is lawyer, and the trial of a young
                black man accused of a crime.
                <span className="products__paragraph__price"> $6.99</span>
            </p>
            <button className="products__button--mobile">Add to Cart</button>

        </section>

        <section className="products">
            <img className="products__images"
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562424806l/45035018._SY475_.jpg"
                alt="Frankenstein book, with an creepy drawing of a man. "/>
            <h2 className="products__title">Frankenstein by Mary Shelley</h2>
            <p className="products__paragraph">The line between humanity and monster is blurred in this 1918 horror novel,
                where Victor Frankestein, a young scientist, creates new life however he revokes his creation for being
                an abomination.
                <span className="products__paragraph__price"> $6.99 </span>
            </p>
            <button className="products__button--mobile">Add to Cart</button>

        </section>
    </div>

    <Footer />

</body>
        
        )}

export default IndexPage;