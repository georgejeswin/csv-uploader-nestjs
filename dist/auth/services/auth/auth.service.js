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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../../users/services/users/users.service");
const bcrypt_1 = require("../../../utils/bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUser(username, password) {
        try {
            const user = await this.userService.findUserByUsername(username);
            if (user) {
                const decodedPassword = (0, bcrypt_1.comparePassword)(password, user === null || user === void 0 ? void 0 : user.password);
                if (decodedPassword)
                    return user;
                return null;
            }
            return null;
        }
        catch (error) {
            console.error(error);
        }
    }
    async signUpUser(user) {
        try {
            const createdUser = await this.userService.createUser(user);
            if (createdUser) {
                const token = await this.getTokens(createdUser.id, createdUser.username);
                await this.updateRefreshToken(createdUser.id, token.refresh_token);
                return {
                    access_token: token.access_token,
                    refresh_token: token.refresh_token,
                };
            }
        }
        catch (error) {
            console.error('Error signup user: ', error);
        }
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = (0, bcrypt_1.encodePassword)(refreshToken);
        await this.userService.updateUser(userId, {
            refresh_token: hashedRefreshToken,
        });
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.userService.findUserById(userId);
        if (!user || !user.refresh_token)
            throw new common_1.ForbiddenException('Access Denied');
        const refreshTokenMatches = (0, bcrypt_1.comparePassword)(refreshToken, user === null || user === void 0 ? void 0 : user.refresh_token);
        if (!refreshTokenMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(user.id, user.username);
        await this.updateRefreshToken(user.id, tokens.refresh_token);
        return tokens;
    }
    async getTokens(userId, username) {
        const [access_token, refresh_token] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                username,
            }, {
                secret: this.configService.get('JWT_ACCESS_SECRET'),
                expiresIn: this.configService.get('JWT_EXPIRES_IN_HOURS'),
            }),
            this.jwtService.signAsync({
                sub: userId,
                username,
            }, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
                expiresIn: this.configService.get('JWT_REFRESH_EXPIRY'),
            }),
        ]);
        return {
            access_token,
            refresh_token,
        };
    }
    async loginUser(user) {
        try {
            const token = await this.getTokens(user.id, user.username);
            return {
                access_token: token.access_token,
                refresh_token: token.refresh_token,
            };
        }
        catch (error) {
            console.error('Error login user: ', error);
            return null;
        }
    }
    async logout(userId) {
        this.userService.updateUser(userId, { refreshToken: null });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map