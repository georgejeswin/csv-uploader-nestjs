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
exports.UploadssController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const lodash_1 = require("lodash");
const jwt_auth_guard_1 = require("../../../auth/guards/jwt-auth.guard");
const uploads_service_1 = require("../../services/uploads/uploads.service");
const users_service_1 = require("../../../users/services/users/users.service");
let UploadssController = class UploadssController {
    constructor(uploadService, userService) {
        this.uploadService = uploadService;
        this.userService = userService;
    }
    async createUploads(req, file) {
        var _a;
        const user = await this.userService.findUserByUsername((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.username);
        const fileUrl = await this.uploadService.uploadFileToBucket(file);
        const serializedUser = (0, lodash_1.omit)(user, ['password']);
        await this.uploadService.createUploads({
            user: serializedUser,
            fileUrl,
        });
        if (fileUrl)
            return `CSV uploaded successfully - ${fileUrl}`;
        else
            return 'CSV upload failed';
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadssController.prototype, "createUploads", null);
UploadssController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [uploads_service_1.UploadsService,
        users_service_1.UsersService])
], UploadssController);
exports.UploadssController = UploadssController;
//# sourceMappingURL=uploads.controller.js.map