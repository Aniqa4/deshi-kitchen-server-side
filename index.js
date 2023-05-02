const express = require('express');
const  app = express();
const cors= require('cors');
port =process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('dragon is running')
})

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})

app.listen(port, (req,res) =>{
    console.log(`dragon API is running on port : ${port}`);
})