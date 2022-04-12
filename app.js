const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose')
require('dotenv').config();

//database//
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('connected to MONGODB')) 
  .catch(e => console.log('connection error', e))

//schema//
const testSchema = {
  name: String,
  lastname: String,
  passid: String,
  email: String
}
const Test = mongoose.model('Test', testSchema);

//post//
app.post('/steps/form', (req, res) => {
  let newTest = new Test({
      name: req.body.name,
      lastname: req.body.lastname,
      passid: req.body.passid,
      email: req.body.email,
      street: req.body.street,
      postal: req.body.postal,
      city: req.body.city
  })
  newTest.save();
  res.redirect('/steps/submited')    
})

//ejs//
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
