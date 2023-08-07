/// <reference types="multer" />
import { UploadsService } from 'src/uploads/services/uploads/uploads.service';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UploadssController {
    private uploadService;
    private userService;
    constructor(uploadService: UploadsService, userService: UsersService);
    createUploads(req: any, file: Express.Multer.File): Promise<string>;
}
