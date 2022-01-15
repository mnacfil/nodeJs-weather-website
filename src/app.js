const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath)) // configure our applications

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Melvin Nacfil',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Melvin Nacfil'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Some helpful text message.',
        name: 'Melvin Nacfil',
    })
})

// Integrating geocode and forcast to get real forecast from the response
app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address',
        })
    }
    geocode(req.query.address, (error, {latitude,longitude,location} = {}) => { 
        if(error) {
            return res.send({
                error,
            })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({
                    error,
                })
            }
            res.send([{
                forecast: forecastData,
                location,
                address: req.query.address
            }])
        })
    })
    
})

// query string
app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    console.log(req.query.search)
    res.send({
        products: [],
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Melvin Nacfil',
        errorMessage: 'Help article not found'
    })
})

// *(wild card charcter) means everthing is a match
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'melvin nacfil',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
})
