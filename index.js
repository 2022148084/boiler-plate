const express = require('express')
const app = express()
const port = 3000
const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cheesetime:!Sooho1004@cluster0.r1xf1ce.mongodb.net/?retryWrites=true&w=majority',{})
.then(()=>console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

