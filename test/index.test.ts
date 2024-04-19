const request = require('supertest');
const index   = require('../src/index');


describe ('GET / correctly', () => {
    test('Get / with 200 status', async () => {
        const response = await request(index).get('/').send();
        expect(response.statusCode).toBe(200);
    })

});