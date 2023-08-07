import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';
export declare class UsersController {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    getAllUsers(): Promise<import("../../../typeorm/entities/user.entity").User[]>;
    getMe(req: any): Promise<SerializedUser>;
}
