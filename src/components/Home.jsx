import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1="https://iqstoreindia.com/assets/images/iphone-15-pro/iphone15-pro-black.png";
const img2="https://www.apple.com/v/macbook-air-m1/f/images/meta/macbook-air_overview__15sjf4iagj6q_og.png";

const Home = () => {

  const productList=[
    {
      name: "iPhone 15 Pro Max",
      price: "799",
      imgSrc: img1,
      id: "hidj",
    },
    {
      name: "MacBook Air",
      price: "999",
      imgSrc: img2,
      id: "acb",
    }
  ]

  const dispatch=useDispatch();

  const addToCartHandler=(options)=>{
    console.log(options);
    dispatch({type:"addToCart",payload:options});
    dispatch({type:"calculatePrice",})
    toast.success("Added to cart!");
  };

  return (
    <div className='home'>
      {
        productList.map(i => (
          <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler}/>
        ))
      }
    </div>
  )
}

const ProductCard=({name,id,price,handler,imgSrc})=>(
  <div className='productCard'>
    <img src={imgSrc} alt={name}/>
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=> handler({name,price,id,quantity:1,imgSrc})}>Add to Cart</button>
  </div>
)

export default Home