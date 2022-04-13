const express = require("express")
const router = express.Router()
let setStation = 'STATION 1'
let stationselector = 'EXAMPLE'
let setdate = '01.01.2022'
let settime = '12am'
//booking directory//

router.get('/', (req, res) => {
    console.log('Booking page loaded')
    res.render('booking.ejs', {
        title: 'Booking Page', 
        stationselector: `${stationselector}`
    })
})

router.get('/pcr', (req, res) => {
    console.log('PCR page loaded')
    res.render('pcrtest.ejs', {
        title: 'PCR Test', 
        station: `${setStation}`, 
        date: `${setdate}`, 
        time: `${settime}`
    })
})

router.get('/antigen', (req, res) => {
    console.log('Antigen test page loaded')
    res.render('antigentest.ejs', {
        title: 'Rapid Antigen Test', 
        station: `${setStation}`, 
        date: `${setdate}`, 
        time: `${settime}`
    })
})

router.get('/pcr-express', (req, res) => {
    console.log('PCR EXPRESS page loaded')
    res.render('expresspcr.ejs', {
        title: 'PCR Express Test', 
        station: `${setStation}`, 
        date: `${setdate}`, 
        time: `${settime}`
    })
})

//FORMS//
router.get('/antigen/antigenform', (req, res) => {
    console.log('Antigenform page loaded')
    res.render('form.ejs', {
        title: 'Antigen Form', 
        test: 'Rapid Antigen test', 
        station: `${setStation}`,
        date: `${setdate}`, 
        time: `${settime}`
    })
})

router.get('/pcr/pcrform', (req, res) => {
    console.log('Pcr form loaded')
    res.render('form.ejs', {
        title: 'PCR Form', 
        test: 'PCR test', 
        station: `${setStation}`,
        date: `${setdate}`, 
        time: `${settime}`
    })
})

router.get('/pcr-express/pcrexpressform', (req, res) => {
    console.log('pcr-express form loaded')
    res.render('form.ejs', {
        title: 'PCR Express Form', 
        test: 'PCR Express test', 
        station: `${setStation}`,
        date: `${setdate}`, 
        time: `${settime}`
    })
})

// Submit

router.get('/submited', (req, res) =>{
    console.log('Form Submitted')
    res.render('submited.ejs', {title: 'Form Submited'})
})


module.exports = router;