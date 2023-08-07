"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const uuid_1 = require("uuid");
let FileUploadService = class FileUploadService {
    constructor() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    }
    async uploadFile(file) {
        let retries = 0;
        const fileResponse = await new Promise((resolve, reject) => {
            const uploadFileToS3 = async () => {
                try {
                    const uploadedFile = await this.s3
                        .upload({
                        Bucket: process.env.AWS_BUCKET_NAME,
                        Body: file.buffer,
                        Key: (0, uuid_1.v4)(),
                    })
                        .promise();
                    resolve(uploadedFile);
                }
                catch (error) {
                    retries++;
                    if (retries <= 2)
                        uploadFileToS3();
                    else
                        reject(error);
                }
            };
            uploadFileToS3();
        });
        return fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.Location;
    }
};
FileUploadService = __decorate([
    (0, common_1.Injectable)()
], FileUploadService);
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=fileUpload.service.js.map