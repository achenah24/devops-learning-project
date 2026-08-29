const request = require('supertest');
const app = require('./app');

describe('GET /api/status', () => {
  it('returns HTTP 200 and the expected status message', async () => {
    const response = await request(app).get('/api/status');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'Server is running!' });
  });
});
