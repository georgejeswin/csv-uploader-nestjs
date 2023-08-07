import { User as UserEntity } from 'src/typeorm/entities/user.entity';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { User } from 'src/users/types';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findAllUsers(): Promise<UserEntity[]>;
    findUserById(id: string): Promise<User>;
    findUserByUsername(username: string): Promise<User>;
    createUser(user: CreateUserDto): Promise<UserEntity>;
    updateUser(id: string, updateUserDto: any): Promise<any>;
}
