import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiFillDelete}  from "react-icons/ai"
import { FiArrowLeft, FiCreditCard, FiMinus, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import Reveal from './Reveal'
import MotionGlyphs from './MotionGlyphs'


const Cart = () => {

    const {cartItems,subTotal,tax,shipping,total}= useSelector(state=>state.cart);

    const dispatch = useDispatch();

    const increment=(id) =>{
        dispatch({
            type:"addToCart",
            payload: {id},
        })
        dispatch({
            type:"calculatePrice",
        })
    }
    const decrement=(id) =>{
        dispatch({
            type:"decrement",
            payload: id,
        })
        dispatch({
            type:"calculatePrice",
        })
    }
    const deleteHandler=(id) =>{
        dispatch({
            type:"removeFromCart",
            payload: id,
        })
        dispatch({
            type:"calculatePrice",
        })
    }


  return (
    <div className='cart'>
        <main>
            <Reveal as="div" className="cartHeader" variant="slide">
                <p className="sectionEyebrow">Your bag</p>
                <h1>{cartItems.length > 0 ? "Review your tech stack" : "Your cart is empty"}</h1>
                <Link to="/"><FiArrowLeft /> Continue shopping</Link>
            </Reveal>
            {
                cartItems.length > 0 ?(
                    cartItems.map(i=>(
                        <Reveal as="div" key={i.id} variant="rise">
                            <CartItem name={i.name} imgSrc={i.imgSrc} price={i.price} qty={i.quantity} id={i.id} increment={increment} decrement={decrement} deleteHandler={deleteHandler}/>
                        </Reveal>
                    ))
                ):(
                    <Reveal className="emptyCart" variant="tilt">
                        <MotionGlyphs variant="cart" />
                        <h2>Start with a device you will reach for every day.</h2>
                        <p>The catalog has phones, laptops, audio, displays, tablets, and wearables ready to add.</p>
                        <Link to="/">Browse collection</Link>
                    </Reveal>
                )
            }
        </main>
        <aside>
            <p className="sectionEyebrow">Order summary</p>
            <h2>Ready when you are.</h2>
            <div className="summaryRows">
                <p><span>Subtotal</span><strong>{formatPrice(subTotal)}</strong></p>
                <p><span>Shipping</span><strong>{shipping === 0 ? "Free" : formatPrice(shipping)}</strong></p>
                <p><span>Tax</span><strong>{formatPrice(tax)}</strong></p>
            </div>
            <div className="summaryTotal">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
            </div>
            <button disabled={cartItems.length === 0}><FiCreditCard /> Checkout</button>
        </aside>
    </div>
  )
}

const CartItem = ({imgSrc,name,price,qty,increment,decrement,deleteHandler,id}) =>(
    <div className="cartItem">
        <img src={imgSrc} alt="Item" />
        <article>
            <h3>{name}</h3>
            <p>{formatPrice(price)}</p>
        </article>
        <div>
            <button onClick={()=> decrement(id)} aria-label={`Decrease ${name}`}><FiMinus /></button>
            <p>{qty}</p>
            <button onClick={()=> increment(id)} aria-label={`Increase ${name}`}><FiPlus /></button>
        </div>
        <button className="deleteButton" onClick={()=>deleteHandler(id)} aria-label={`Remove ${name}`}>
            <AiFillDelete />
        </button>
    </div>
)

export default Cart
