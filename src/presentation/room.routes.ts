import { Router } from 'express';
import { CreateRoomController } from './room.controller';
import { UserRepository } from '../domain/repositories/user.repository';
import { RoomRepository } from '../domain/repositories/room.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { RoomInfrastructure } from '../infrastructure/room.infrastructure';
import { CreateRoomService } from '../services/room.service';

export class RoomRoutes {
  readonly router: Router;
  static router: any;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    const userRepository: UserRepository = new UserInfrastructure();
    const roomRepository: RoomRepository = new RoomInfrastructure();
    const createRoomService = new CreateRoomService();
    const createRoomController = new CreateRoomController(createRoomService);

    this.router.post(
      '/create',
      createRoomController.create.bind(createRoomController)
    );
  }
}
export default new RoomRoutes().router;
