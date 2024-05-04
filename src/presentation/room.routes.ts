// import { Router } from 'express';
// import { CreateRoomController, JoinRoomController, ReadRoomController} from './room.controller';
// import { UserRepository } from '../domain/repositories/user.repository';
// import { RoomRepository } from '../domain/repositories/room.repository';
// import { UserInfrastructure } from '../infrastructure/user.infrastructure';
// import { RoomInfrastructure } from '../infrastructure/room.infrastructure';
// import { CreateRoomService, ReadRoomService} from '../services/room.service';
// import { JoinRoomService } from '../services/room.service';

// export class RoomRoutes {
//   readonly router: Router;
//   static router: any;

//   constructor() {
//     this.router = Router();
//     this.init();
//   }

//   private init() {
//     const userRepository: UserRepository = new UserInfrastructure();
//     const roomRepository: RoomRepository = new RoomInfrastructure();
//     const createRoomService = new CreateRoomService();
//     const createRoomController = new CreateRoomController(createRoomService);
//     const joinRoomService = new JoinRoomService();
//     const joinRoomController = new JoinRoomController(joinRoomService);
//     const readRoomService = new ReadRoomService();
//     const readRoomController = new  ReadRoomController(readRoomService)


//     this.router.get(
//       '/list',
//       readRoomController.read.bind(readRoomController)
//     );
//     this.router.post(
//       '/create',
//       createRoomController.create.bind(createRoomController)
//     );
//     this.router.post(
//       '/join',
//       joinRoomController.create.bind(joinRoomController)
//     );
//   }
// }
// export default new RoomRoutes().router;


import { Router } from 'express';
import { CreateRoomController, JoinRoomController, ReadRoomController, DeleteRoomController } from './room.controller';
import { UserRepository } from '../domain/repositories/user.repository';
import { RoomRepository } from '../domain/repositories/room.repository';
import { UserInfrastructure } from '../infrastructure/user.infrastructure';
import { RoomInfrastructure } from '../infrastructure/room.infrastructure';
import { CreateRoomService, ReadRoomService, DeleteRoomService } from '../services/room.service';
import { JoinRoomService } from '../services/room.service';

export class RoomRoutes {
  readonly router: Router;

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
    const readRoomService = new ReadRoomService();
    const readRoomController = new ReadRoomController(readRoomService);
    const deleteRoomService = new DeleteRoomService();
    const deleteRoomController = new DeleteRoomController(deleteRoomService);

    this.router.get(
      '/list',
      readRoomController.read.bind(readRoomController)
    );
    this.router.post(
      '/create',
      createRoomController.create.bind(createRoomController)
    );
    this.router.post(
      '/join',
      joinRoomController.create.bind(joinRoomController)
    );
    this.router.delete( // Utilizamos el método DELETE para borrar la habitación
      '/delete/:roomId', // Definimos el parámetro roomId en la URL
      deleteRoomController.delete.bind(deleteRoomController)
    );
  }
}

export default new RoomRoutes().router;
