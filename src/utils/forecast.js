const request = require('request')

const forecast  = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=c746ed0958b49e6d2e98ca8a42e07e69&query=' + latitude + ',' + longitude
 
    request({ url, json: true}, (error, {body}) => {
       if (error) {
          callback('There is an error', undefined)
       } else if (body.error) {
          callback('Unable to find location', undefined)
       } else {
          callback(undefined, {
 
             temperature: body.current.temperature,
 
          })
       }
    })
 
 }

 module.exports = forecast