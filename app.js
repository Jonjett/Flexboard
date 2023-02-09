const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello Test Page');
})

app.post('/scoredat',(req,res)=>{
    console,log(req.body);
    res.send('scoredat received..!');
})

app.get('/fill',(req,res)=>{
    res.send(
        '<form action="/submit" method="POST"><input type="text" name="Name"/><button>Submit</button></form>'
    );
})

app.listen(5000);