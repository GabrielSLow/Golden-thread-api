import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    createUser(user: User): Promise<User>;
    findUsers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
}
