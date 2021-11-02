var createError = require('http-errors');
var express = require('express');
var path = require('path');



var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const mongoose = require('mongoose');
const { request } = require('http');
const Schema = mongoose.Schema

const wm1 = require('./model/wm1.js')
const wm2 = require('./model/wm2.js')
const wm3 = require('./model/wm3.js')
const wm4 = require('./model/wm4.js')
const wm5 = require('./model/wm5.js')
const wm6 = require('./model/wm6.js')
const wm7 = require('./model/wm7.js')
const wm8 = require('./model/wm8.js')
const wm9 = require('./model/wm9.js')
const wm10 = require('./model/wm10.js')
const wm11 = require('./model/wm11.js')
const wm12 = require('./model/wm12.js')
const y2010 = require('./model/y2010.js')


mongoose.connect('mongodb://localhost/wind',{
    useNewUrlParser: true
})
var db = mongoose.connection;

app.get('/wm1',async (req, res)=> {
    var wm = await wm1.find({})
    //console.log(wm)
    mcal(wm)
   
    

    res.json(data);

    

  });
  app.get('/wm2',async (req, res)=> {
    var wm = await wm2.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm3',async (req, res)=> {
    var wm = await wm3.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm4',async (req, res)=> {
    var wm = await wm4.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm5',async (req, res)=> {
    var wm = await wm5.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm6',async (req, res)=> {
    var wm = await wm6.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm7',async (req, res)=> {
    var wm = await wm7.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm8',async (req, res)=> {
    var wm = await wm8.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm9',async (req, res)=> {
    var wm = await wm9.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm10',async (req, res)=> {
    var wm = await wm10.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm11',async (req, res)=> {
    var wm = await wm11.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
  app.get('/wm12',async (req, res)=> {
    var wm = await wm12.find({})
    console.log(wm)
    mcal(wm)
    res.json(data);
    

  });
 

  var mcal = function(wm){
    var sumday = 0
    var day = 0
    var countday = 0
    var dayofday = 0
    var i = 0
    var w1 = 0,w2 = 0,w3 = 0,w4 = 0
    var sumweek = 0

    for (index in wm){
      day = day + wm[index]['wind']
      if  ((parseInt(index)+1)%24==0)
      {
        sumday = sumday + day / 24
        dayofday = sumday
        day =0
        countday = countday + 1
        if (countday == 7)
    {
      	i = i + 1
	      sumweek = sumweek + dayofday/7
	      if(i == 1){w1 = parseInt(sumweek)}
	      if(i == 2){w2 = parseInt(sumweek)}
	      if(i == 3){w3 = parseInt(sumweek)}
      	if(i == 4){w4 = parseInt(sumweek)}
      	sumweek = 0
      	sumday = 0
      	countday = 0
      	dayofday = 0
    }
      }
    }
     data = [{"week1":w1,"week2":w2,"week3":w3,"week4":w4}]
  }

  







db.on('error', function callback () {
    console.log("Connection error");
  });

db.once('open', function callback () {
    console.log("Mongo working!");
  });

app.listen(3000, () => {
    console.log('Server on port 3000')
})






