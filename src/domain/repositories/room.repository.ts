import { Room } from '../room';

// export interface RoomRepository {
//   update(savedRoom: Room): unknown;
//   save(room: Room): Promise<Room>;
//   getAll(): Promise<Room[]>;
//   getById(roomId: string): Promise<Room>;
//   getUsersInRoom(roomId: string): Promise<string[]>;
// }

export interface RoomRepository {
  update(savedRoom: Room): Promise<Room>;
  save(room: Room): Promise<Room>;
  getAll(): Promise<Room[]>;
  getById(roomId: string): Promise<Room>;
  addUserToRoom(roomId: string, userId: string): Promise<Room>;
  getUsersInRoom(roomId: string): Promise<string[]>;
}