import { AuthService } from 'src/auth/services/auth/auth.service';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
export declare class AuthController {
    private readonly authServie;
    constructor(authServie: AuthService);
    login(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signup(createUserDto: CreateUserDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    logout(req: any): void;
    refreshToken(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
