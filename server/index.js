'use strict'

const Hapi = require('hapi')

// const {numberToLcd} = require('../app/number-to-lcd')

const server = new Hapi.Server()
server.connection({ port: 3000, host: 'localhost' })

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Please use the "/{number}" route.<br/>Example: "/12345"')
    }
})

// server.route({
//     method: 'GET',
//     path: '/{name}',
//     handler: function(request, reply) {
//         const numberAsString = encodeURIComponent(request.params.name)
//         const number = parseInt(numberAsString)
//         reply({number: number, numberAsLcdString: numberToLcd(number)})
//     }
// })

server.start((err) => {
    if (err) {
        throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
})
