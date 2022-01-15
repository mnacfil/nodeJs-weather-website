// Hello Express

const express = require('express')
// express is actually function and we call it to create a new application

const app = express()

// (route, callback function -> (request,response)
app.get('', (req, res) => {
    res.send(`Hello express!`)
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/weather', (req, res) => {
    res.send('Welcome to weather forcast!')
})

// app.com
// app.com/help
// app.com/about

// start the server up and has listen to specific port
app.listen(3000, () => {
    console.log('server is up on port 3000');
})
// with web server it's never gonna stop unless we stop it because it's job is to stay up in running, listening and processing new incoming request

// Goal: Set up two new routes

// 1. Setup an about route and render a page title
// 2. Setup an weather route and render a page title
// 3. Test your work by visiting both in the browser

//////////////////////////////
// HTML and JSON


const express = require('express')
// express is actually function and we call it to create a new application

const app = express()

// (route, callback function -> (request,response)
app.get('', (req, res) => {
    res.send(`<h1>Weather</h1>`)
})

app.get('/help', (req, res) => {
    res.send([{
        name:'melvin',
        age: 27,
        }, {
            name:'Sarah',
            age: 25
        },
    ])
})

// Goal: Update routes

// 1. Setup about route to render a title with HTML
// 2. Setup a weather route to send back JSON
// - object with forecast and location strings
// 3. Test your work by visiting both the browser

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'it is snowing',
        location: 'Philadelphia',
    }])
})

// start the server up and has listen to specific port
app.listen(3000, () => {
    console.log('server is up on port 3000');
})

//////////////////
// Serving up static Assets
const path = require('path')
const express = require('express')

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express()

// its way to customise our server
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath)) // configure our applications

// Goal: Crete two more HTML files

// 1. Create a html page for about with "About" title
// 2. Create a html page for about with "Help" title
// 3. Remove the old route handles for both
// 4. visit both in the browser to test your work


app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'it is snowing',
        location: 'Philadelphia',
    }])
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
})

//////////////////////////////
// partial
const path = require('path')
const express = require('express')
const hbs = require('hbs')

// Goal: Create a partial for the footer

// 1: Setup the template for the footer partial "Created by some name"
// 2. render the partial at the bottom of all three pages
// 3. Test your work by visiting all three pages

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

app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
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

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'it is snowing',
        location: 'Philadelphia',
    }])
})

app.listen(3000, () => {
    console.log('server is up on port 3000');
})
///////////////////////////////////////////////
const path = require('path')
const express = require('express')
const hbs = require('hbs')

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

app.set('view engine', 'hbs');

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

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'it is snowing',
        location: 'Philadelphia',
    }])
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

// Goal: Create and render a 404 page with handlebars

// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in a paragraph
// 3. Render the template for both 404 routes
//      -- Page not found.
//      -- Help article not found.
// 4. Test your work. Visit /what and /help/units
app.listen(3000, () => {
    console.log('server is up on port 3000');
})

//////////////////////////////////////////////
// Query String
// Goal: Update wather endpoit to accept address

// 1. No address? Send back an error message
// 2. Address? Send back the static JSON
//      -- Add address proeprty onto JSON which returns the provided address
// 3. Test/weather and /weather?address=philadelphia

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

////////////////////////////////////////////
// Integrating geocode and forcast to get real forecast from the response
app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address',
        })
    }
    geocode(req.query.address, (error, {latitude,longitude,location} = {}) => { // callback chaining
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

// Goal: Wire up/ Weather

// 1. Require geocode/forecast into app.js
// 2. Use the address to geocode
// 3. Use the coordinates
// 4. Send back the real forecast and location

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

////////////////////////////////////////
// finish project on browser
console.log('CLient side javascript file is loaded')

// fetch is not part of javascript, it is part of browser API that we can use on modern broser

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const weatherInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch(`http://localhost:3000/weather?address=${weatherInput.value}`).then((response) => {
    response.json().then( (data = {})=> {
        if(data.error) {
            messageOne.textContent = data.error
            messageTwo.textContent = null
        } else {
            const newData = data[0]
            messageOne.textContent = newData.location
            messageTwo.textContent = newData.forecast
            
        }
        weatherInput.value = ''
    })
})
})

// Goal: Use the input value to get weather

// 1. Migrate fetch call into the submit callback
// 2. Use the search text as the address query string value
// 3. Submit the form with a valid and invalid value to test

// Goal: Render the content to paragraph

// 1. Select the second message p from javascript
// 2. Just before fetch, render loading message and empty p
// 3. if error, render error
// 4. if no error, render location and forecast
// 5. Test your work! Search for errros and for valid locations