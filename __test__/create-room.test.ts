import request from 'supertest'; 
import mongoose from 'mongoose';
import app from '../src/app';

describe('POST /create return 201 ', () => {
  beforeAll(async () => {
    await mongoose.connect(
      'mongodb://${username}:${password}@${host}:${port}/'
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('should connect to the database', async () => {
    const isConnected = mongoose.connection.readyState === 1;

    expect(isConnected).toBe(true);
  });

  test('POST /create devuelve un status code 201', async () => {
    const roomQuery =
    {
      roomName : 'RoomName',
      userName : 'userName'
    }
    const response = await request(app)
      .post('/api/v1/room/create')
      .send(roomQuery)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    expect(response.status).toBe(201);
  });
});
