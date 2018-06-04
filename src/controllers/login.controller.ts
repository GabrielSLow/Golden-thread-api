// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import {LoginRepository } from "../repositories/login.repository";
import { post, get, requestBody } from "@loopback/rest";
import { Login } from "../models/login";

export class LoginController {
  constructor(
    @repository(LoginRepository.name) private loginRepo: LoginRepository
  ) {}

  @post('/login')
  async createLogin(@requestBody() login: Login) {
    return await this.loginRepo.create(login);
  }

  @get('/login')
  async getAllLogin(): Promise<Array<Login>> {
    return await this.loginRepo.find();
  }
}