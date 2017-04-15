const request = require('supertest')

describe('The home page', () => {
    it('responds', (done) => {
        request('http://localhost:3000')
            .get('/')
            .expect(200)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .end(done)
    })
})
