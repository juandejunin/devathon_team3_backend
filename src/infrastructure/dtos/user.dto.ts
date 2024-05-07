import { User } from '../../domain/user';
import userEntity, { UserEntity } from '../entities/user.entity';

export class UserDto {
  static fromDomainToData(user: User): UserEntity {
    const userEntityObj = new userEntity();
    userEntityObj._id = user.properties.userId;
    userEntityObj.name = user.properties.name;
    userEntityObj.points = user.properties.points;
    userEntityObj.responseTime = user.properties.responseTime;

    return userEntityObj;
  }

  static fromDomainToDataArray(something: User[]): UserEntity[] {
    return something.map((item) => this.fromDomainToData(item));
  }

  static fromDataToDomain(entity: UserEntity | UserEntity[]): User | User[] {
    if (Array.isArray(entity)) {
      return entity.map((item) => this.fromDataToDomain(item)) as User[];
    }

    const something = new User({
      userId: entity._id,
      name: entity.name,
      points: entity.points,
      responseTime: entity.responseTime
    });

    return something;
  }
}
