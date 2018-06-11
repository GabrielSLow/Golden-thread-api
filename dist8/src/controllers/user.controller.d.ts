import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { Login } from '../models/login';
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    login(login: Login): Promise<any>;
    loginWithQuery(login: Login): Promise<User>;
    createUser(user: User): Promise<User>;
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
    getDonationsByUserId(userId: number, username: string, dateFrom: Date, authorizationToken: String): Promise<void>;
}
