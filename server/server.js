var express = require('express');
var bodyPars = require('body-parser');
var {mongoose} = require ('./db/dbConnect');
var {toDo} = require('./models/todolist');

var app = express();
app.use(bodyPars.json());

app.post('/todoPost', (req, res) => {
    var todo = new toDo({
        text: req.body.text
    });
    todo.save().then((suc)=>{
        res.send(suc);
    }, (e) => {
        res.send(e);
    });
});


app.listen(3000, () => {
    console.log('app is listening on port 3000')
});


