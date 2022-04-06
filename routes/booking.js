const express = require("express")
const router = express.Router()

//booking directory//

router.get('/', (req, res) => {
    console.log('Booking page loaded')
    res.render('booking.ejs', {title: 'Booking Page'})
})

router.get('/pcr', (req, res) => {
    console.log('PCR page loaded')
    res.render('pcrtest.ejs', {title: 'PCR Test'})
})

router.get('/antigen', (req, res) => {
    console.log('Antigen test page loaded')
    res.render('antigentest.ejs', {title: 'Rapid Antigen Test'})
})

router.get('/pcr-express', (req, res) => {
    console.log('PCR EXPRESS page loaded')
    res.render('expresspcr.ejs', {title: 'PCR Express Test'})
})

module.exports = router