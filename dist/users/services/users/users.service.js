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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../../typeorm/entities/user.entity");
const bcrypt_1 = require("../../../utils/bcrypt");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAllUsers() {
        try {
            return this.userRepository.find();
        }
        catch (error) {
            console.error('Find all users failed', error);
        }
    }
    async findUserById(id) {
        try {
            return this.userRepository.findOne({ where: { id } });
        }
        catch (error) {
            console.error('Find by id failed', error);
        }
    }
    async findUserByUsername(username) {
        try {
            return this.userRepository.findOne({ where: { username } });
        }
        catch (error) {
            console.error('Find by username failed', error);
        }
    }
    async createUser(user) {
        try {
            const password = (0, bcrypt_1.encodePassword)(user.password);
            const userExists = await this.findUserByUsername(user === null || user === void 0 ? void 0 : user.username);
            if (userExists) {
                throw new common_1.HttpException(`User ${user.username} already exists`, common_1.HttpStatus.BAD_REQUEST);
            }
            const newUser = await this.userRepository.create(Object.assign(Object.assign({}, user), { password }));
            return this.userRepository.save(newUser);
        }
        catch (error) {
            console.error('Create user failed', error);
        }
    }
    async updateUser(id, updateUserDto) {
        return this.userRepository.update(id, updateUserDto);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map