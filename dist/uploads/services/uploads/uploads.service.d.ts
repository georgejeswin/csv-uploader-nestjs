/// <reference types="multer" />
import { FileUploadService } from 'src/fileupload/fileUpload.service';
import { Uploads as UploadsEntity } from 'src/typeorm/entities/upload.entity';
import { Repository } from 'typeorm';
export declare class UploadsService {
    private readonly uploadRepository;
    private fileUpload;
    constructor(uploadRepository: Repository<UploadsEntity>, fileUpload: FileUploadService);
    createUploads(createUploadsDto: any): Promise<UploadsEntity[]>;
    uploadFileToBucket(file: Express.Multer.File): Promise<string>;
}
