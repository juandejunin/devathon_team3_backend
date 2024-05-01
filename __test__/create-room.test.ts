import request from 'supertest'; // Este módulo nos permite hacer solicitudes HTTP para probar nuestras rutas
import { RoomRoutes } from '../src/presentation/room.routes';

const roomRoutes = new RoomRoutes();


describe('POST /create return 201 ', () => {

  test('POST /create devuelve un status code 201', async () => {  
    const roomQuery =
    {
      roomName : 'RoomName',
      userName : 'userName'
    }
    
    const response = 
    await request(roomRoutes.router)
    .post('/create')
    .send(roomQuery)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    expect(response.status).toBe(201);

  });

});



