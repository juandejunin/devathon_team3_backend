import { Request, Response, response } from 'express';
import { CreateUserRoomService } from '../services/create-user-room.service';

export class CreateUserRoomController {
  constructor(private readonly createUserRoomService: CreateUserRoomService) {}

  async create(req: Request, res: Response): Promise<void> {
    const { roomName } = req.body;

    try {
      // Llama al servicio para crear la sala con el nombre proporcionado

      let room = await this.createUserRoomService.execute(roomName);

      // Envía una respuesta de éxito
      res.status(201).json({
        "response" : room,
        "error": null
});
    } catch (error) {
      // Maneja los errores y envía una respuesta de error
      console.error('Error creating room:', error);
      res.status(500).json({ error: 'Error al crear la sala', response:null });
    }
  }
}
