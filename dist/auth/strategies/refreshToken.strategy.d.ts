import { ConfigService } from '@nestjs/config';
declare const RefreshTokenStrategy_base: new (...args: any[]) => any;
export declare class RefreshTokenStrategy extends RefreshTokenStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(req: any, payload: any): any;
}
export {};
