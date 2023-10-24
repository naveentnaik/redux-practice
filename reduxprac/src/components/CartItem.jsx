import React from "react";
import { useDispatch } from "react-redux";
import { removefromCart, setCart } from "../redux/itemSlice";

const CartItem = ({ val }) => {
    const dispatch=useDispatch()
  return (
    <div className="bg-sky-400 p-2 rounded flex justify-between m-2">
      <div className="flex gap-3">
        <div className=" rounded w-20 bg-orange-200 ">img</div>
        <div className="">
          <div>name:{val.name.slice(0, 4)}</div>
          <div>Price:{val.price}</div>
        </div>
      </div>
      <div className=" flex gap-1">
        <div className="bg-red-400 flex rounded">
          <button onClick={()=>dispatch(setCart({value:val,type:"remove"}))} className=" px-1">-</button>
          <p className="p-1 h-full flex justify-center items-center">{val.quantity}</p>
          <button onClick={()=>dispatch(setCart({value:val,type:"add"}))} className=" px-1">+</button>
        </div>
        <button onClick={()=>dispatch(removefromCart(val))} className="bg-yellow-200 px-2 py-[0.5] rounded text-center">
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
