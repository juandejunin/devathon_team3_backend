import { Router } from 'express';
import { CreateUserRoomController } from './create-user-room.controller';
import { UserRepository } from '../domain/repositories/user.repository';
import { RoomRepository } from '../domain/repositories/room.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { RoomInfrastructure } from '../infrastructure/room.infrastructure';
import { CreateUserRoomService } from '../services/create-user-room.service';

export class CreateUserRoomRoutes {
  readonly router: Router;
  static router: any;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    const userRepository: UserRepository = new UserInfrastructure();
    const roomRepository: RoomRepository = new RoomInfrastructure();
    const createUserRoomService = new CreateUserRoomService(userRepository, roomRepository);
    const createUserRoomController = new CreateUserRoomController(createUserRoomService);

    this.router.post('/create', createUserRoomController.create.bind(createUserRoomController));
  }
}
export default new CreateUserRoomRoutes().router;