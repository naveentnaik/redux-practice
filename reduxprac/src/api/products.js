import { axiosInstance } from "./axiosInstance";

export const createProduct=async(payload)=>{
     try {
       const response= await axiosInstance.post('/product/createproduct',payload)
       return response.data
     } catch (error) {
        return error.message
     }
}

export const getallProduct=async()=>{
    try {
      const response= await axiosInstance.get('/product/get-products')
      return response.data
    } catch (error) {
       return error.message
    }
}