import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCart } from '../redux/itemSlice'
import '../index.css'

const Item = ({item}) => {
    const [hover,setHover]=useState(false)
    const dispatch=useDispatch()
    const mtitle=item.name.slice(0,8)  
    
    const onAddcart=(item)=>{
         dispatch(setCart({value:item,type:"add"}))
    }   
           
  return (
    <div className='bg-green-500 p-4 flex flex-col gap-1 rounded w-40 '>
        <div className=" bg-lime-900 w-full h-20 rounded text-center"><img src={item.image}></img></div>
        <div onMouseLeave={()=>setHover(false)} onMouseMove={()=>setHover(true)}>name:{hover?item.title:mtitle+".."}</div>
        <div>price:{item.price}</div>
        <button onClick={()=>onAddcart(item)} className="bg-blue-200 px-2 py-[0.5] rounded text-center active:bg-teal-800 hover:bg-lime-600" >add to cart</button>
    </div>
  )
}

export default Item