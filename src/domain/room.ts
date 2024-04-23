export interface RoomRequired {
    roomId: string;
  }
  
  export interface RoomOptional {
    name: string;
  }
  
  export type RoomProperties = RoomRequired & Partial<RoomOptional>;
  
  export class Room {
    private readonly roomId: string = '';
    private name: string = '';
  
    constructor(props: RoomProperties) {
      Object.assign(this, props);
    }
  
    get properties() {
      return {
        roomId: this.roomId,
        name: this.name
      };
    }
  }
  