export interface RoomRequired {
  roomId: string;
}

export interface RoomOptional {
  name: string;
  users: string[];
}

export type RoomProperties = RoomRequired & Partial<RoomOptional>;

export class Room {
  private readonly roomId: string = '';
  private name: string = '';
  private users: string[] = [];

  constructor(props: RoomProperties) {
    Object.assign(this, props);
  }

  get properties() {
    return {
      roomId: this.roomId,
      name: this.name,
      users: this.users
    };
  }
  addUser(userId: string) {
    this.users.push(userId);
  }

  getUsers() {
    return this.users;
  }

  getUsersInRoom(roomId: string): string[] {
    if (this.roomId === roomId) {
      return this.users;
    } else {
      throw new Error('Room not found');
    }
  }
}
