"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadssModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const upload_entity_1 = require("../typeorm/entities/upload.entity");
const users_module_1 = require("../users/users.module");
const uploads_controller_1 = require("./controllers/uploads/uploads.controller");
const uploads_service_1 = require("./services/uploads/uploads.service");
const fileUpload_module_1 = require("../fileupload/fileUpload.module");
let UploadssModule = class UploadssModule {
};
UploadssModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([upload_entity_1.Uploads]), users_module_1.UsersModule, fileUpload_module_1.FileUploadModule],
        controllers: [uploads_controller_1.UploadssController],
        providers: [uploads_service_1.UploadsService],
    })
], UploadssModule);
exports.UploadssModule = UploadssModule;
//# sourceMappingURL=uploads.module.js.map