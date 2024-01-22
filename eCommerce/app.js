const express = require('express');
const errorMiddleware =require('./middleware/error');


const app = express();

//routes imports
const user =require('./routes/userRoute');

app.use('/api/v1',user);

//middleare for error handling
app.use(errorMiddleware);

module.exports =app;