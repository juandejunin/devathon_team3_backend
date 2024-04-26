// import { v4 as uuidv4 } from 'uuid';
// import { User } from '../domain/user';
// import { Room } from '../domain/room';
// import { UserRepository } from '../domain/repositories/user.repository';
// import { RoomRepository } from '../domain/repositories/room.repository';
// import { Types } from 'mongoose';

// export class CreateUserRoomService {

//   constructor(
//     private readonly userRepository: UserRepository,
//     private readonly roomRepository: RoomRepository
//   ) {}

//   async getUsersInRoom(roomId: string): Promise<string[]> {
//     try {
//       // Implementa la lógica para consultar la base de datos y obtener los usuarios de la sala con el ID proporcionado
//       const usersInRoom = await this.roomRepository.getUsersInRoom(roomId);
//       return usersInRoom;
//     } catch (error) {
//       console.error('Error al obtener usuarios en la sala:', error);
//       throw new Error('No se pudieron obtener los usuarios en la sala');
//     }
//   }

//   async execute(userName: string, points: number, responseTime: number, roomName: string): Promise<{ userId: string, roomId: string }> {
//     // Crear una nueva instancia del modelo User con los datos proporcionados
//     const user = new User({ userName, points, responseTime });
//     // Guardar el usuario en la base de datos
//     // await user.save();

//     // Crear una nueva instancia del modelo Room con el nombre de la sala proporcionado
//     const room = new Room({ name: roomName });
//     // Guardar la sala en la base de datos
//     await room.save();

//     // Agregar el usuario a la sala
//     room.users.push(user);
//     // Guardar la sala actualizada
//     await room.save();

//     // Devolver los IDs del usuario y la sala
//     return { room };
// }

//   // async execute(userName: string, points: number, responseTime: number, roomName: string): Promise<{ userId: string, roomId: string }> {
//   //   try {
//   //     const userId = uuidv4();
//   //     const roomId = uuidv4();

//   //     const user = new User({ userId, name: userName, points, responseTime });
//   //     await this.userRepository.save(user);

//   //     const room = new Room({ roomId, name: roomName });
//   //     await this.roomRepository.save(room);

//   //     await this.roomRepository.addUserToRoom(roomId, userId);

//   //     return { userId, roomId };
//   //   } catch (error) {
//   //     console.error('Error al ejecutar la creación de usuario y sala:', error);
//   //     throw new Error('No se pudo completar la creación de usuario y sala');
//   //   }
//   // }
// }

// // export class CreateUserRoomService {
// //   private activeRooms: Map<string, Room> = new Map(); // Mapa para almacenar las salas activas en memoria

// //   async execute(userName: string, points: number, responseTime: number, roomName: string): Promise<{ userId: string, roomId: string }> {
// //     try {
// //       const roomId = uuidv4(); // Genera un ID para la sala

// //       // Crea una nueva sala en memoria
// //       const room = new Room({ roomId, name: roomName });
// //       this.activeRooms.set(roomId, room);

// //       const userId = uuidv4(); // Genera un ID para el usuario

// //       // Realiza otras operaciones necesarias, como crear un usuario y asignarlo a la sala en memoria

// //       return { userId, roomId };
// //     } catch (error) {
// //       console.error('Error al ejecutar la creación de usuario y sala:', error);
// //       throw new Error('No se pudo completar la creación de usuario y sala');
// //     }
// //   }

// //   // Método para eliminar una sala activa de la memoria del servidor
// //   removeRoom(roomId: string): void {
// //     this.activeRooms.delete(roomId);
// //   }
// // }

// import { RoomModel, RoomDocument } from '../models/room.model'; // Importa el modelo de la sala
// import User  from '../models/user.models'; // Suponiendo que tienes un modelo de usuario también

// export class CreateUserRoomService {
//   async execute(name: string, userIds: string[]): Promise<void> {
//     try {
//       // Crear un array de objetos de usuario con sus ID
//       const users = await User.find({ _id: { $in: userIds } });

//       // Crear la sala con el nombre y los usuarios proporcionados
//       const room = await RoomModel.create({
//         name,
//         users: users.map(user => user._id)
//       });

//       // Puedes devolver la sala creada si lo necesitas
//       return room;
//     } catch (error) {
//       throw new Error('Error creating room: ' + error.message);
//     }
//   }
// }

// import { RoomModel, RoomDocument } from '../models/room.model'; // Importa el modelo de la sala
// import User from '../models/user.models'; // Importa el modelo de usuario

// export class CreateUserRoomService {
//   async execute(name: string, userIds: string[]): Promise<string> {
//     try {
//       // Crear un array de objetos de usuario con sus ID
//       const users = await User.find({ _id: { $in: userIds } });

//       // Crear la sala con el nombre y los usuarios proporcionados
//       const room = await RoomModel.create({
//         name,
//         users: users.map(user => user._id)
//       });

//       // Devolver un texto indicando que la sala se ha creado correctamente
//       return 'Sala creada correctamente';
//     } catch (error) {
//       // Manejar errores y devolver un mensaje de error
//       throw new Error('Error al crear la sala: ' + error.message);
//     }
//   }
// }

import { RoomModel } from '../models/room.model'; // Importa el modelo de la sala

export class CreateUserRoomService {
  async execute(roomName: string): Promise<any> {
    // Devuelve una promesa que resuelve con cualquier tipo
    try {
      // Crear la sala con el nombre proporcionado
      const room = new RoomModel({ roomName });
      console.log(room);
      // Guardar la sala en la base de datos
      const savedRoom = await room.save();

      // Devolver la instancia de la sala creada
      return room;
    } catch (error) {
      throw new Error('Error al crear la sala: ' + error.message);
    }
  }
}
