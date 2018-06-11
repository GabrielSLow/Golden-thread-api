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
import {Login} from '../models/login';
import { sign, verify } from'jsonwebtoken';

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  // @post('/registration')
  // async createUser(@requestBody() user: User) {
  //   return await this.userRepo.create(user);
  // }

  @post('/login')
  async login(@requestBody() login: Login): Promise<any> {
    var users = await this.userRepo.find();

    var username = login.username;
    var password = login.password;

    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.username == username && user.password == password) {
        var jwt = sign(
          {
            user: {
              id: user.id,
              firstname: user.firstname,
              email: user.email
            }
            
          },
          'shh',
          {
            issuer: 'auth.ix.co.za',
            audience: 'ix.co.za',
          },
        );

        return {
          token: jwt,
        };
      }
    }

    throw new HttpErrors.NotFound('User not found, sorry!');
  }

  @post('/login-with-query')
  async loginWithQuery(@requestBody() login: Login): Promise<User> {
    var users = await this.userRepo.find({
      where: {
        and: [{username: login.username}, {password: login.password}],
      },
    });

    if (users.length == 0) {
      throw new HttpErrors.NotFound('User not found, sorry!');
    }

    return users[0];
  }

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