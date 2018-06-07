// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import {UserRepository } from "../repositories/user.repository";
import { post, requestBody } from "@loopback/rest";
import { User } from "../models/user";
import {
  HttpErrors,
  get,
  param,
} from '@loopback/rest';

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @post('/users')
  async createUser(@requestBody() user: User) {
    return await this.userRepo.create(user);
  }

  @get('/users')
  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }

  @get('/users/{id}/donations')
  async getDonationsByUserId (
    @param.path.number('id') userId: number,
    @param.query.string('username') username: string,
    @param.query.date('date_from') dateFrom: Date,
    @param.query.string('Authorization') authorizationToken: String

  )
 {
  console.log(userId);
  console.log(username);
  console.log(dateFrom);
  console.log(authorizationToken);
 } 

}