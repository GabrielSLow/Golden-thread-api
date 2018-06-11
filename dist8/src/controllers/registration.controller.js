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
const rest_1 = require("@loopback/rest");
const user_1 = require("../models/user");
const repositories_1 = require("../repositories");
let RegistrationController = class RegistrationController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async registerUser(user) {
        // Check that required fields are supplied
        if (!user.email || !user.phonenumber || !user.username || !user.password) {
            throw new rest_1.HttpErrors.BadRequest('missing data');
        }
        // Check that user does not already exist
        let userExists = !!(await this.userRepo.count([{ email: user.email }, { phonenumber: user.phonenumber }, { username: user.username },
            { password: user.password },
        ]));
        if (userExists) {
            throw new rest_1.HttpErrors.BadRequest('user already exists');
        }
        return await this.userRepo.findOne({
            where: {
                and: [
                    { email: user.email },
                    { phonenumber: user.phonenumber },
                    { username: user.username },
                    { password: user.password }
                ],
            },
        });
    }
};
__decorate([
    rest_1.post('/registration'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "registerUser", null);
RegistrationController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], RegistrationController);
exports.RegistrationController = RegistrationController;
//# sourceMappingURL=registration.controller.js.map