export interface UserRequired {
    userId: string;
}

export interface UserOptional {
    name: string;
    points?: number;
    responseTime?: number;
}

export type UserProperties = UserRequired & Partial<UserOptional>;

export class User {
    private readonly userId: string = '';
    private name: string = '';
    private points?: number;
    private responseTime?: number;

    constructor(props: UserProperties) {
        this.userId = props.userId; 
        this.name = props.name || '';
        this.points = props.points;
        this.responseTime = props.responseTime;
    }

    get properties() {
        return {
            userId: this.userId,
            name: this.name,
            points: this.points,
            responseTime: this.responseTime
        };
    }
}


