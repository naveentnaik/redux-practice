import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
   const items=useSelector((state)=>state.items.cart)
  return (
    <div className="w-1/3">
        {items.map((val)=>{
           return <CartItem val={val} key={val._id}/>
        })}
    </div>
  )
}

export default Cart