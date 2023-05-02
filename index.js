const express = require('express');
const  app = express();
port =process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('dragon is running')
})

app.listen(port, (req,res) =>{
    console.log(`dragon API is running on port : ${port}`);
})