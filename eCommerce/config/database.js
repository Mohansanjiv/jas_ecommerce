const mongoose = require('mongoose');
const dotenv =require('dotenv');

dotenv.config({path:"./config/config.env"});

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO)
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        }).catch((error)=>{
            console.log('mongodb is not connected with server'+error);
        })
        
};
console.log(connectDatabase);
module.exports =connectDatabase