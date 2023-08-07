import { Uploads } from './upload.entity';
export declare class User {
    id: string;
    username: string;
    email: string;
    password: string;
    refresh_token: string;
    files: Uploads[];
}
