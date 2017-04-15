const request = require('supertest')
const config = require('config')

describe('End to end tests', () => {
    beforeEach(() => {
        const protocol = config.get('server.protocol')
        const hostname = config.get('server.hostname')
        const port = config.get('server.port')
        this.baseUrl = `${protocol}://${hostname}:${port}`
    })

    context('The home page', () => {
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

    context('The lcd number API', () => {
        it('responds 200 with plain text', (done) => {
            request(this.baseUrl)
                .get('/lcd_numbers/1')
                .expect(200)
                .expect('Content-Type', 'text/plain; charset=utf-8')
                .end(done)
        })

        it('returns 1 LCD representation in body', (done) => {
            request(this.baseUrl)
                .get('/lcd_numbers/1')
                .expect(`
  #
  #
  #
  #
  #
`)
                .end(done)
        })
    })
})
