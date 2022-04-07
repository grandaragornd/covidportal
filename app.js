const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://saintkevinst:5122012@cluster0.mbhd5.mongodb.net/covidportal')

app.set('view engine', 'ejs');
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
    console.log('Homepage Loaded')
    res.render('mainpage')
})

//routes//
const bookingRouter = require('./routes/booking')
app.use('/booking', bookingRouter)

const stepsRouter = require('./routes/steps')
app.use('/steps', stepsRouter)

//message
app.listen(port, (req, res) => {
    console.log(`App runing in port ${port}`)
})
