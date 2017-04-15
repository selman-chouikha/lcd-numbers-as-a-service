'use strict'

const Hapi = require('hapi')

const config = require('config')

const {numberToLcd} = require('../app/number-to-lcd')

const server = new Hapi.Server()

const port = config.get('server.port')
const listen = config.get('server.listen')
const baseUrl = `${config.get('server.protocol')}://${config.get('server.hostname')}:${port}`

server.connection({port: port, host: listen})

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        const exampleUrl = `${baseUrl}/lcd_numbers/12345`
        reply(`Please use the "/{number}" route.<br/>Example: <a href="${exampleUrl}">${exampleUrl}</a>`)
    }
})

server.route({
    method: 'GET',
    path: '/lcd_numbers/{number}',
    handler: function(request, reply) {
        const numberAsString = encodeURIComponent(request.params.number)
        const number = parseInt(numberAsString)
        reply(numberToLcd(number))
            .header('Content-Type', 'text/plain; charset=utf-8')
    }
})

server.start((err) => {
    if (err) {
        throw err
    }
    console.log(`Server running at: ${server.info.uri}`)
})

module.exports = {
    baseUrl
}
