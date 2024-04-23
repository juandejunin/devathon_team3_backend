import { Request, Response } from 'express';
import { CreateUserRoomService } from '../application/create-user-room.service';

export class CreateUserRoomController {
  constructor(private readonly createUserRoomService: CreateUserRoomService) {}

  async create(req: Request, res: Response) {
    try {
      const { userName, points, responseTime, roomName } = req.body;
      const { userId, roomId } = await this.createUserRoomService.execute(userName, points, responseTime, roomName);

      // Aquí debes obtener los usuarios dentro de la sala, asumiendo que tienes una forma de hacerlo
      // Supongamos que tienes un método en el servicio para obtener los usuarios de la sala
    //   const usersInRoom = await this.createUserRoomService.getUsersInRoom(roomId);

      res.json({ roomId, roomName, userId,userName, points, responseTime});
    } catch (error) {
      console.error('Error creating user and room:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
