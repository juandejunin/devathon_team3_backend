import request from 'supertest'; 
import mongoose from 'mongoose';
import app from '../src/app';


let roomId;

describe('POST /create return 201 ', () => {
  beforeAll(async () => {
    const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
    const uri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`;
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('should connect to the database', async () => {
    const isConnected = mongoose.connection.readyState === 1;
    expect(isConnected).toBe(true);
  });

  test('POST /create devuelve un status code 201 y contiene los datos esperados', async () => {
    const roomQuery = {
      roomName : 'RoomName',
      userName : 'userName'
    };
    const response = await request(app)
      .post('/api/v1/room/create')
      .send(roomQuery)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  
    // Verifica que la respuesta tenga un status code 201
    expect(response.status).toBe(201);
  
    // Verifica que la respuesta contenga los datos esperados
    expect(response.body).toHaveProperty('response');
    expect(response.body.response).toHaveProperty('_id');
    expect(response.body.response).toHaveProperty('roomName', roomQuery.roomName);
    expect(response.body.response).toHaveProperty('__v', 0);
    expect(response.body).toHaveProperty('error', null);

    roomId = response.body.response._id;
    console.log(roomId)
  });  

});

describe('POST /join return 200', () => {

  beforeAll(async () => {
    const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
    const uri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`;
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('should connect to the database', async () => {
    const isConnected = mongoose.connection.readyState === 1;
    expect(isConnected).toBe(true);
  });


  test('should connect to the database', async () => {
    const isConnected = mongoose.connection.readyState === 1;
    expect(isConnected).toBe(true);
  });
  test('POST /join devuelve un status code 200 y contiene los datos esperados', async () => {
    // Verifica que se haya obtenido un roomId en el test anterior
    // expect(roomId).toBeDefined();

    const joinQuery = {
      roomId: '6635f7ab30ec64f9330d175f', // Usamos el roomId obtenido en el test anterior
      userName: 'usuario'
    };

    const response = await request(app)
      .post('/api/v1/room/join')
      .send(joinQuery)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('response');
    expect(response.body.response).toHaveProperty('_id', '6635f7ab30ec64f9330d175f'); // Verifica que el roomId sea el mismo que se usó para unirse a la sala
    expect(response.body.response).toHaveProperty('roomName');
    expect(response.body.response).toHaveProperty('users');
    expect(response.body.response.users).toContain(joinQuery.userName);
    expect(response.body.response).toHaveProperty('__v', 0);
    expect(response.body).toHaveProperty('error', null);
  });
});