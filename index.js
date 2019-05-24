const express=require('express');

// importing routes
const authRoutes=require('./routes/auth');

const app=express();


// middleware
// helps us send json data from postman or any other program
app.use(express.json());

// app middlewares

app.use('/api/user',authRoutes);


app.listen(3000,()=>console.log('server is running'))


