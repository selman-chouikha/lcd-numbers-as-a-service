const request = require('supertest')
const config = require('config')

describe('End to end tests', () => {
    context('The home page', () => {
        beforeEach(() => {
            const protocol = config.get('server.protocol')
            const hostname = config.get('server.hostname')
            const port = config.get('server.port')
            this.baseUrl = `${protocol}://${hostname}:${port}`
        })

        it('responds', (done) => {
            request(this.baseUrl)
                .get('/')
                .expect(200)
                .expect('Content-Type', 'text/html; charset=utf-8')
                .end(done)
        })

        it('contains the server address', (done) => {
            request(this.baseUrl)
                .get('/')
                .expect(new RegExp(this.baseUrl))
                .end(done)
        })
    })
})
