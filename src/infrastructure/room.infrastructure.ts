import { Room } from '../domain/room';
import { RoomRepository } from '../domain/repositories/room.repository';

export class RoomInfrastructure implements RoomRepository {
  async update(savedRoom: Room): Promise<unknown> {
    // Lógica para actualizar la sala en la base de datos
    console.log('Updating room:', savedRoom);
    return savedRoom; // Devuelve la sala actualizada
  }

  async save(room: Room): Promise<Room> {
    // Lógica para guardar la sala en la base de datos
    console.log('Saving room:', room);
    return room; // Devuelve la sala guardada
  }

  async getAll(): Promise<Room[]> {
    // Lógica para obtener todas las salas de la base de datos
    return [];
  }

  async getById(roomId: string): Promise<Room> {
    // Lógica para obtener una sala por su ID de la base de datos
    return {} as Room;
  }

  async getUsersInRoom(roomId: string): Promise<string[]> {
    // Lógica para obtener los usuarios asociados a una sala por su ID
    // Implementa la lógica para consultar la base de datos y obtener los usuarios de la sala con el roomId proporcionado
    // Devuelve una lista de IDs de usuarios
    return [];
  }
}
