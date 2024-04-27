import { Request, Response, response } from 'express';
import { CreateRoomService } from '../services/room.service';

export class CreateRoomController {
  constructor(private readonly createUserRoomService: CreateRoomService) {}

  async create(req: Request, res: Response): Promise<void> {
    const { roomName, userName } = req.body;
    try {
      let room = await this.createUserRoomService.execute(roomName, userName);
      res.status(201).json({
        response: room,
        error: null
      });
    } catch (error) {
      console.error('Error creating room:', error);
      res.status(500).json({ error: 'Error al crear la sala', response: null });
    }
  }
}
