const express = require('express')
const router = express.Router()


//steps pagination//

router.get('/', (req, res) => {
    console.log('Booking steps loaded')
    res.render('step1.ejs', {title: 'Booking Steps'})
})

router.get('/form', (req, res) => {
    console.log('form page loaded')
    res.render('form.ejs', {title: 'Your Form'})
})

module.exports = router