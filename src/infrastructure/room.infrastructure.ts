import { RoomRepository } from '../domain/repositories/room.repository';
import { Room } from '../domain/room';

export class RoomInfrastructure implements RoomRepository {
  getAll(): Promise<Room[]> {
    throw new Error('Method not implemented.');
  }
  getById(entityId: string): Promise<Room> {
    throw new Error('Method not implemented.');
  }
  getPaginated(page: number, pageSize: number): Promise<Room[]> {
    throw new Error('Method not implemented.');
  }
  async save(room: Room) {
    throw new Error('Method not implemented.');
  }
}
