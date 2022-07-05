const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app=express();
//const multer = require('multer')


app.use(bodyParser.json());
//app.use(multer().any());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Souvik_Jha:Govtjob1@cluster0.zb2phjl.mongodb.net/group73Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);



app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});
