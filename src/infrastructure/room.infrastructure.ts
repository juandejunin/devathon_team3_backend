import { Room } from '../domain/room';
import { RoomRepository } from '../domain/repositories/room.repository';
import { RoomModel } from '../models/room.model';

export class RoomInfrastructure implements RoomRepository {
  async update(savedRoom: Room): Promise<Room> {
    try {
      const updatedRoom = await RoomModel.findByIdAndUpdate(savedRoom.properties.roomId, savedRoom.properties, { new: true });
      if (!updatedRoom) {
        throw new Error('Room not found');
      }
      return updatedRoom.toObject() as Room;
    } catch (error) {
      console.error('Error updating room:', error);
      throw error;
    }
  }


  async save(room: Room): Promise<Room> {
    try {
      const newRoom = new RoomModel({
        name: room.properties.name,
        users: room.properties.users
      });
      const savedRoom = await newRoom.save(); 
      return savedRoom.toObject() as Room; 
    } catch (error) {
      console.error('Error saving room:', error);
      throw error;
    }
  }

  async getAll(): Promise<Room[]> {
    try {
      const rooms = await RoomModel.find();
      return rooms.map(room => room.toObject() as Room);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  }

  async getById(roomId: string): Promise<Room> {
    try {
      const room = await RoomModel.findById(roomId);
      if (!room) {
        throw new Error('Room not found');
      }
      return room.toObject() as Room;
    } catch (error) {
      console.error('Error fetching room by ID:', error);
      throw error;
    }
  }

  async addUserToRoom(roomId: string, userId: string): Promise<Room> {
    try {
      const room = await RoomModel.findById(roomId);
      if (!room) {
        throw new Error('Room not found');
      }
      room.users.push(userId);
      const updatedRoom = await room.save();
      return updatedRoom.toObject() as Room;
    } catch (error) {
      console.error('Error adding user to room:', error);
      throw error;
    }
  }
  
  async getUsersInRoom(roomId: string): Promise<string[]> {
    try {
      const room = await RoomModel.findById(roomId);
      if (!room) {
        throw new Error('Room not found');
      }
      return room.users;
    } catch (error) {
      console.error('Error fetching users in room:', error);
      throw error;
    }
  }

  
  
}
