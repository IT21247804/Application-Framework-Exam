require('dotenv').config()
const express = require('express');

const routes = require('./routes/routes');
const mongoose = require('mongoose')



const app = express()

app.use(express.json())

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/routes', routes);



mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to the database')

    app.listen(process.env.PORT, () => {
        console.log('listening on port 4000')
    })
    
})
.catch((err)=>{
    console.log(err);
})
