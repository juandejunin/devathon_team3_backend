import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app';

describe('Room API', () => {
  let roomId;

  beforeAll(async () => {
    const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
    const uri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`;
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  const connectToDatabase = () => {
    const isConnected = mongoose.connection.readyState === 1;
    expect(isConnected).toBe(true);
  };

  describe('POST /create', () => {
    test('should connect to the database', connectToDatabase);

    test('should create a room successfully', async () => {
      const roomQuery = {
        roomName: 'RoomName',
        userName: 'userName',
      };
      const response = await request(app)
        .post('/api/v1/room/create')
        .send(roomQuery)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
  
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('response');
      expect(response.body.response).toHaveProperty('_id');
      expect(response.body.response).toHaveProperty('roomName', roomQuery.roomName);
      expect(response.body.response).toHaveProperty('__v', 0);
      expect(response.body).toHaveProperty('error', null);
  
      roomId = response.body.response._id;
    });
  });

  describe('POST /join', () => {
    test('should join a room successfully', async () => {
      expect(roomId).toBeDefined();
    
      const joinQuery = {
        roomId: roomId,
        userName: 'usuario',
      };
    
      const response = await request(app)
        .post('/api/v1/room/join')
        .send(joinQuery)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
    
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('response');
      expect(response.body.response).toHaveProperty('_id', roomId);
      expect(response.body.response).toHaveProperty('roomName');
      expect(response.body.response).toHaveProperty('users');
      expect(response.body.response).toHaveProperty('__v', 0);
      expect(response.body).toHaveProperty('error', null);
    });
  });

  describe('GET /list', () => {
    test('should return list of rooms with user counts', async () => {
      const response = await request(app)
        .get('/api/v1/room/list')
        .set('Accept', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('response');
      expect(response.body.response).toBeInstanceOf(Array);      
     
      response.body.response.forEach(room => {
        expect(room).toHaveProperty('id');
        expect(room).toHaveProperty('userCount');
      });

      expect(response.body).toHaveProperty('error', null);
    });
  });

  describe('DELETE /delete/:roomId', () => {
    test('should delete a room successfully', async () => {
      expect(roomId).toBeDefined();
    
      const response = await request(app)
        .delete(`/api/v1/room/delete/${roomId}`)
        .set('Accept', 'application/json');
    
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('response', 'delete room');
      expect(response.body).toHaveProperty('error', null);
    });
  });
});

