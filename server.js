const express = require('express');
const app = express();
const cakes = require('./games');
//allows us to acess js/css/images if in a public directory
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get('/api/games',(req,res)=>{
    res.send(games);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}...`);
})