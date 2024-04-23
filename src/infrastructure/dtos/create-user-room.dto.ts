export class CreateUserRoomDto {
  readonly users: string[]; // Cambiado a un array de strings para almacenar hasta 4 usuarios
  readonly points: number;
  readonly responseTime: number;
  readonly roomName: string;

  constructor(users: string[], points: number, responseTime: number, roomName: string) {
      this.users = users;
      this.points = points;
      this.responseTime = responseTime;
      this.roomName = roomName;
  }
}
