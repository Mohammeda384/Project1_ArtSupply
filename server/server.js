
// import giftsRouter from './routes/gifts.js'
import router from './routes/supplies.js'
import express from 'express'
// const express = require('express')


const app = express()

app.use('/public', express.static('./public'))
app.use('/public', express.static('./public/scripts'))


app.get('/', (req, res) => {
    res.status(200).send('<h1 style ="text-align: center; margin-top: 50px;">Art Supplies </h1>')
})

const PORT = process.env.PORT || 3001

app.use('/supplies', router)
console.log("test")
app.listen(PORT, ()=> {
    console.log(`Server listening on http://localhost:${PORT}`)
})
