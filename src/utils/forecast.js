const request = require('request')

//
// Goal: Add new data to forecast

// 1. Update the forecast string to include new data
// 2. Commit changes
// 3. push your changes to github and deploy heroku
// 4. Test your work in the live application


const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=cec44e6e8e6cde3dc42607da8302c9b3&query=${lat},${long}&units=f`
    request({url, json:true}, (error, {body}) => {
        const {current,success} = body
        if(error) {
            callback(`Unable to find location Services`, undefined)
        } else if (success === false){
            callback('Unable to find location, Try another search.', undefined)
        }
        else {
            const {temperature, feelslike: feelsLikeTemp,humidity,wind_speed: wind,wind_degree: windGust,weather_descriptions: weather} = current
            callback(undefined, `Weather is ${weather[0]}. It is currently ${temperature} degrees out, it feels like ${feelsLikeTemp} degress out, the humidity is ${humidity} and the Wind and Wind Gust are ${wind}km/hr and ${windGust}km/hr respectively.`)
        }
    })
}

module.exports = forecast

