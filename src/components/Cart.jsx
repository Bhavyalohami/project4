import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiFillDelete}  from "react-icons/ai" 


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
            {
                cartItems.length > 0 ?(
                    cartItems.map(i=>(
                        <CartItem name={i.name} imgSrc={i.imgSrc} price={i.price} qty={i.quantity} id={i.id} key={i.id} increment={increment} decrement={decrement} deleteHandler={deleteHandler}/>
                    ))
                ):(<h1>Your Cart is Empty!</h1>)
            }
        </main>
        <aside>
            <h2>SubTotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
    </div>
  )
}

const CartItem = ({imgSrc,name,price,qty,increment,decrement,deleteHandler,id}) =>(
    <div className="cartItem">
        <img src={imgSrc} alt="Item" />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={()=> decrement(id)} >-</button>
            <p>{qty}</p>
            <button onClick={()=> increment(id)} >+</button>
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)}/>
    </div>
)

export default Cart