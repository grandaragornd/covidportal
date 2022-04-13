const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose')
require('dotenv').config();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//database//
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('connected to MONGODB')) 
  .catch(e => console.log('connection error', e))

//ejs//
app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
app.set('views',__dirname + '/views')

app.get('/home', (req, res) => {
    console.log('Homepage Loaded')
    res.render('mainpage')
})


//routes booking//
const bookingRouter = require('./routes/booking')
app.use('/booking', bookingRouter)


//error page
app.use((req, res, next) =>{
  res.status(404).render('404', {title: '404 ERR0R'})
});

//message
app.listen(port, (req, res) => {
  console.log(`App runing in port ${port}`)
})

//post
app.post('/booking/submited', async (req, res) => {
  const body = req.body
  console.log(body)
})