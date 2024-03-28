import React, { useState, useEffect } from 'react';
import './Userhome.scss';
import logos from '../Assets/1.png';
import productsData from './Products/Product';
import { Link } from 'react-router-dom';


const Userhome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch or import your product data here
    // For example, if using fetch:
    // fetch('/path/to/products.json')
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.error('Error fetching product data:', error));

    // For simplicity, using a local import in this example
    setProducts(productsData);
  }, []);

  return (
    <div className='user_main'>
      <div className="user_navbar">
        <div className="logo"><img src={logos} alt="Logo" /></div>
        <div className="buttons">
          <button>Home</button>
          <button>About us</button>
          <button>Contacts</button>
        </div>
      </div>

      <div class="flexi">

    <div class="flexchild">
    <img src="https://5.imimg.com/data5/BP/NB/MY-22562613/drinking-20-l-water-bottle.jpg"alt="20litre water jar"class="twen"/>
    <p class="content">20 Litre Water jar</p>
    <p class="oneten">₹110.</p>
    <Link to="/purchasepage"> <button class="btn" type="button">Buy</button> </Link>
    </div>
    
    <div class="flexchild">
       <img src="https://tiimg.tistatic.com/fp/1/007/831/easy-to-use-transparent-lightweight-round-plastic-blue-mineral-water-jar--642.jpg" alt="10litre"class="ten"/>
       <p class="content">10 Litre Water jar</p>
       <p class="oneten">₹90.</p>
       <button class="btn" type="button">Buy</button>
    </div>
     
    <div class="flexchild">
    <img src="https://images.jdmagicbox.com/rep/b2b/5-litre-mineral-water-jar/5-litre-mineral-water-jar-3.jpg" alt="5litre"class="ten"/>
    <p class="content">5 Litre Water jar</p>
       <p class="oneten">₹60.</p>
       <button class="btn" type="button">Buy</button>
     </div>

     <div class="flexchild">
        <img src="https://5.imimg.com/data5/IF/TS/MY-41753135/capture.png" alt="2litre"class="ten"/>
        <p class="content">2 Litre Water jar</p>
       <p class="oneten">₹30.</p>
       <button class="btn" type="button">Buy</button>
     </div>
     
     <div class="flexchild">
     <img src="https://5.imimg.com/data5/XT/XI/MY-4495492/1l-plastic-water-bottle-500x500.jpg" alt="1litre"class="ten"/>
     <p class="content">1 Litre Water jar</p>
     <p class="oneten">₹15.</p>
     <button class="btn" type="button">Buy</button>
   </div>
      
   <div class="flexchild">
      <img src="https://content.jdmagicbox.com/comp/patna/z5/0612px612.x612.180730164042.b8z5/catalogue/sai-mineral-water-and-ice-supplier-patel-nagar-patna-water-suppliers-0soziiplit.jpg"alt="500ml"class="ten"/>
      <p class="content">500 ML Water jar</p>
     <p class="oneten">₹10.</p>
     <button class="btn" type="button">Buy</button>
    </div>
    </div>

      {/* <div className="footer">Footer</div> */}
    </div>
  );
}

export default Userhome;
