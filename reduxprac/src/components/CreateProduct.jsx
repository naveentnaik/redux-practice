import React, { useState } from 'react'
import { createProduct, getallProduct } from '../api/products'
import { useDispatch } from 'react-redux'
import { getIProducts } from '../redux/itemSlice'

const CreateProduct = ({setShowModal}) => {
    const [data,setData]=useState({image:'',name:"",price:""})
    const dispatch=useDispatch()

  const onchange=(e)=>{
   setData({...data,[e.target.name]:e.target.value})
  }

  const submit=async()=>{
    console.log(data)
   const res= await createProduct(data)
   dispatch(getIProducts()) 
  }
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 backdrop-blur-sm'>
        <div className='w-1/3 bg-red-500 rounded-md'>
           <div className='text-center p-5'> 
              <h1 className=' text-2xl'>CREATE PRODUCT</h1>
           </div>
           <div className='flex justify-center items-start pl-4 flex-col gap-6'>
              <div className='pl-4 flex justify-center items-center gap-2'>
                <label htmlFor="">Product img</label>
                <input value={data.image} name='image' onChange={onchange} className=' outline-none rounded-md w-60 px-2' type="file" />
              </div>
              <div className='flex justify-center items-start pl-4 flex-row gap-6'>
                <label htmlFor="">Product name</label>
                <input  value={data.name} name='name'  onChange={onchange} className=' outline-none rounded-md px-2' type='text' />
              </div>
              <div className='flex justify-center items-start pl-4 flex-row gap-6'>
                <label htmlFor="">Product price</label>
                <input  value={data.price} name='price'  onChange={onchange} className=' outline-none rounded-md px-2' type="number" />
              </div>
           </div>
           <div className='flex justify-end items-center pr-20 my-5 flex-row gap-8'>
             <button className='bg-green-400 p-2 rounded-md' onClick={()=>setShowModal(false)}>Cancel</button>
             <button className='bg-green-400 p-2 rounded-md' onClick={submit}>Submit</button>
           </div>
        </div>   
    </div>
  )
}

export default CreateProduct