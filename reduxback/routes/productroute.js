const express =require('express');
const { createproduct, getproduct } = require('../controller/productcontroller');
const router=express.Router()


router.post('/createproduct',createproduct)
router.get('/get-products',getproduct)


module.exports=router