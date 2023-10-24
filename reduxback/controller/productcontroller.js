const Product=require('../model/productmodel')

const createproduct=async(req,res)=>{
    try {
        console.log(req.body)
        const newproduct=new Product(req.body)
        await  newproduct.save() 

        res.send({
            success:true,
            message:"product added successfully"
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message
        })
    }  
}

const getproduct=async(req,res)=>{
    try {
        const products= await Product.find()

        res.send({
            success:true,
            data:products
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message
        })
    }  
}
 
module.exports ={createproduct,getproduct}