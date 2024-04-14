//  Require Package
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')

//config dot env file
dotenv.config();

// rest object
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.get("/", (req, res) => {
    res.send("<h1>Hello from server</h1>");
});

// port
const PORT = process.env.PORT || 8080;

//Listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});