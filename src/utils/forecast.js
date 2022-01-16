const request = require('request')

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
            const {temperature, feelslike: feelsLikeTemp, weather_descriptions: weather} = current
            callback(undefined, `Weather is ${weather[0]}. It is ${temperature} degrees out, it feels like ${feelsLikeTemp} degress out.`)
        }
    })
}

module.exports = forecast

