const express = require('express');
const connectDB = require('./src/Database/db');
const dotenv = require('dotenv');
const router = require('./src/Controllers/users');

const cors = require('cors');

require('dotenv').config({
    path: 'src/config/.env'
});

const PORT=process.env.PORT||8080;
const uri=process.env.uri;
connectDB(uri);

const app = express();

app.use(express.json());

app.use('/api', router);
app.use(cors());

app.get('/', (req,res)=>{
    res.send("Hello world");
});




app.listen(PORT, async()=>{
    try{
        console.log(`server is running in ${PORT}`);
    }
    catch(err){
        console.log("error in index",err);
    }
})
