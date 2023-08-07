/// <reference types="multer" />
import * as AWS from 'aws-sdk';
export declare class FileUploadService {
    s3: AWS.S3;
    uploadFile(file: Express.Multer.File): Promise<string>;
}
