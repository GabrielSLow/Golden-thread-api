import { LoginRepository } from "../repositories/login.repository";
import { Login } from "../models/login";
export declare class LoginController {
    private loginRepo;
    constructor(loginRepo: LoginRepository);
    createLogin(login: Login): Promise<Login>;
    getAllLogin(): Promise<Array<Login>>;
}
