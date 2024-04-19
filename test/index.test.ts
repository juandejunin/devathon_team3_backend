const request = require('supertest');
const index   = require('../src/index');


describe ('GET / correctly', () => {
    test('Get / with 200 status', async () => {
        const response = await request(index).get('/').send();
        // '/' returns status code 200 (success);
        expect(response.statusCode).toBe(200);
    })

});