const {connect} = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const uri = process.env.uri;

const connectDB = async(uri)=>{
    try{
        await connect(uri);
        console.log("connected to database");
    }
    catch(err){
        console.log("Error in DB",err);
    }
}

module.exports = connectDB;