import React, { useEffect } from 'react'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux'
import { getIProducts, getItems } from '../redux/itemSlice'

const Store = () => {
  const dispatch=useDispatch()
  const {items}=useSelector((state)=>state.items)


  useEffect(()=>{
   dispatch(getIProducts()) 
  },[])

  return (
    <div className="w-3/4 flex gap-2 flex-wrap">
        {items.map((item)=>{
            return <Item item={item} key={item._id} />
        })}
    </div>
  )
}

export default Store