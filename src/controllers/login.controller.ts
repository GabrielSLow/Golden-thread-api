// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { LoginRepository } from "../repositories/login.repository";
import { HttpErrors, post, get, requestBody } from "@loopback/rest";
import { Login } from "../models/login";
import { UserRepository } from '../repositories';
import { User } from '../models';

export class LoginController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) {}

  // @post('/login')
  // async loginUser(@requestBody() user: User): Promise<User> {
  //   // Check that username and password are both supplied
  //   if (!user.username || !user.password) {
  //     throw new HttpErrors.Unauthorized('invalid credentials');
  //   }

    // // Check that email and password are valid
    // let userExists: boolean = !!(await this.userRepo.count({
    //   and: [
    //     { username: user.username },
    //     { password: user.password },
    //   ],
    // }));

  //   if (!userExists) {
  //     throw new HttpErrors.Unauthorized('invalid credentials');
  //   }

  //   return await this.userRepo.findOne({
  //     where: {
  //       and: [
  //         { username: user.username },
  //         { password: user.password }
  //       ],
  //     },
  //   });
  // }
}