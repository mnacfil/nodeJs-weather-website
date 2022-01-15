const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibW5hY2ZpbCIsImEiOiJja3k3OTBjZTcxMmE4MndudG1uODJrYzFjIn0.P_5MpLUWv-Knw-BDewrs3A&limit=1`;
    request({url, json:true}, (error,{body} = {}) => {
        const {features} = body
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(features.length === 0) {
            callback('Unable to find location, Try another search', undefined)
        } else {
            const {center: coordinate, place_name: location} = features[0]
            callback(undefined, {
                latitude: coordinate[1],
                Longitude: coordinate[0],
                location,
            })
        }
    })
}

module.exports = geocode