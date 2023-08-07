import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/users/types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    private configService;
    constructor(userService: UsersService, jwtService: JwtService, configService: ConfigService);
    validateUser(username: string, password: string): Promise<any>;
    signUpUser(user: CreateUserDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    getTokens(userId: string, username: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    loginUser(user: User): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(userId: string): Promise<void>;
}
