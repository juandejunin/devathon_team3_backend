import { Room } from '../room';

export interface RoomRepository {
  update(savedRoom: Room): unknown;
  save(room: Room): Promise<Room>;
  getAll(): Promise<Room[]>;
  getById(roomId: string): Promise<Room>;
  getUsersInRoom(roomId: string): Promise<string[]>;
}
