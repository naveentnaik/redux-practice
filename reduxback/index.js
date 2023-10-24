const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const productroute = require('./routes/productroute');
const cors=require('cors')

const app = express();
app.use(express.json());
dotenv.config() 
app.use(cors())


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('db connection sucsessfull')
}).catch((err)=>{
    console.log(err);
})

app.use('/product',productroute)

app.listen(process.env.PORT,()=>{
    console.log('listening on port '+process.env.PORT);
})