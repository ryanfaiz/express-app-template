const request = require('supertest')
const { app, stopServer } = require('../src/app.js')

describe('GET /', () => {
  afterAll(() => {
    stopServer()
  })

  it('should return Hello World', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.text).toBe('Hello World!')
  })
})
