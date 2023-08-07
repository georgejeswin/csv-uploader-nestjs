export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    refresh_token?: string;
}
export declare class SerializedUser {
    id: string;
    email: string;
    username: string;
    password: string;
    refresh_token: string;
    constructor(partial: Partial<SerializedUser>);
}
