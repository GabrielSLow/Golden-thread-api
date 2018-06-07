"use strict";
// Uncomment these imports to begin using these cool features!
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
// import {inject} from @loopback/context;
const repository_1 = require("@loopback/repository");
const user_repository_1 = require("../repositories/user.repository");
const rest_1 = require("@loopback/rest");
const user_1 = require("../models/user");
const rest_2 = require("@loopback/rest");
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async createUser(user) {
        return await this.userRepo.create(user);
    }
    async findUsers() {
        return await this.userRepo.find();
    }
    async findUsersById(id) {
        // Check for valid ID
        let userExists = !!(await this.userRepo.count({ id }));
        if (!userExists) {
            throw new rest_2.HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }
        return await this.userRepo.findById(id);
    }
    async getDonationsByUserId(userId, username, dateFrom, authorizationToken) {
        console.log(userId);
        console.log(username);
        console.log(dateFrom);
        console.log(authorizationToken);
    }
};
__decorate([
    rest_1.post('/users'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    rest_2.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUsers", null);
__decorate([
    rest_2.get('/users/{id}'),
    __param(0, rest_2.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUsersById", null);
__decorate([
    rest_2.get('/users/{id}/donations'),
    __param(0, rest_2.param.path.number('id')),
    __param(1, rest_2.param.query.string('username')),
    __param(2, rest_2.param.query.date('date_from')),
    __param(3, rest_2.param.query.string('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Date,
        String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getDonationsByUserId", null);
UserController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map