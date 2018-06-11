// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import {RegistrationRepository } from "../repositories/registration.repository";
import { HttpErrors, post, get, requestBody } from "@loopback/rest";
import { Registration } from "../models/registration";
import { User } from '../models/user';
import { UserRepository } from '../repositories';


export class RegistrationController {
  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) {}

  @post('/registration')
  async registerUser(@requestBody() user: User): Promise<User> {
    // Check that required fields are supplied
    if (!user.email || !user.phonenumber || !user.username || !user.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    // Check that user does not already exist
    let userExists: boolean = !!(await this.userRepo.count([{ email: user.email }, { phonenumber: user.phonenumber },{ username: user.username },
      { password: user.password },
    ]));

    if (userExists) {
      throw new HttpErrors.BadRequest('user already exists');
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
}
