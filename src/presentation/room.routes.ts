import { Router } from 'express';
import { CreateRoomController, JoinRoomController} from './room.controller';
import { UserRepository } from '../domain/repositories/user.repository';
import { RoomRepository } from '../domain/repositories/room.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { RoomInfrastructure } from '../infrastructure/room.infrastructure';
import { CreateRoomService} from '../services/room.service';
import { JoinRoomService } from '../services/room.service';

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
    const joinRoomService = new JoinRoomService();
    const joinRoomController = new JoinRoomController(joinRoomService);

    this.router.post(
      '/create',
      createRoomController.create.bind(createRoomController)
    );
    this.router.post(
      '/join',
      joinRoomController.create.bind(joinRoomController)
    );
  }
}
export default new RoomRoutes().router;
