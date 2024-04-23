import { Room } from '../room';

export interface RoomRepository {
  save(room: Room): Promise<void>;
  getAll(): Promise<Room[]>;
  getById(roomId: string): Promise<Room>;
}
