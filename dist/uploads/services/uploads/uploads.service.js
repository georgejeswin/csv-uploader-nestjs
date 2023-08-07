"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fileUpload_service_1 = require("../../../fileupload/fileUpload.service");
const upload_entity_1 = require("../../../typeorm/entities/upload.entity");
const typeorm_2 = require("typeorm");
let UploadsService = class UploadsService {
    constructor(uploadRepository, fileUpload) {
        this.uploadRepository = uploadRepository;
        this.fileUpload = fileUpload;
    }
    async createUploads(createUploadsDto) {
        try {
            const file = await this.uploadRepository.create(createUploadsDto);
            return this.uploadRepository.save(file);
        }
        catch (error) {
            console.log('Create Uploads Error: ', error);
        }
    }
    async uploadFileToBucket(file) {
        return await this.fileUpload.uploadFile(file);
    }
};
UploadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(upload_entity_1.Uploads)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        fileUpload_service_1.FileUploadService])
], UploadsService);
exports.UploadsService = UploadsService;
//# sourceMappingURL=uploads.service.js.map