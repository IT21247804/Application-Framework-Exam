require('dotenv').config()
const express = require('express');

const routes = require('./routes/routes');



const app = express()

app.use(express.json())

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/routes', routes);

app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})