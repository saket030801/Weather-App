const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +  '.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2FrZXQwMzA4MDEiLCJhIjoiY2tzc2txZnEzMDBoeTJ4c2JneXZiMXB5ZSJ9._luccU3wjTTEHZ1ocqDfuw&limit=1'

    request({ url, json: true}, (error, {body}) => {
         if (error){
            callback('Unable to connect to location', undefined)
         } else if (body.features.length === 0){
            callback('Unable to find the location', undefined)
         } else {
            callback(undefined, {
               latitude: body.features[0].center[1],
               longitude: body.features[0].center[0],
               location: body.features[0].place_name
            })
         }
    })
}


module.exports = geocode