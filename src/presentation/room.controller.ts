import { Request, Response, response } from 'express';
import { CreateRoomService, JoinRoomService, ReadRoomService } from '../services/room.service';

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
      res.status(500).json({ error: 'Error creating room', response: null });
    }
  }
}



export class JoinRoomController {
  constructor(private readonly createUserRoomService: JoinRoomService) {}

  async create(req: Request, res: Response): Promise<void> {
    const { roomId, userName } = req.body;    
    try {
      let room = await this.createUserRoomService.execute(roomId, userName);
      
      res.status(200).json({
        response: room,
        error: null
      });
    } catch (error) {
      console.error('Error joining room:', error);
      res.status(500).json({ error: 'Failed to join room', response: null });
    }
  }
}

export class ReadRoomController {
  constructor(private readonly readRoomService: ReadRoomService) {}

  async read(req: Request, res: Response): Promise<void> {
    try {
      const rooms = await this.readRoomService.execute();
      
      res.status(200).json({
        response: rooms,
        error: null
      });
    } catch (error) {
      console.error('Error fetching room list:', error);
      res.status(500).json({ error: 'Failed to fetch room list', response: null });
    }
  }
}
