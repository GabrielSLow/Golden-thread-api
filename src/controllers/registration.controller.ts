// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import {RegistrationRepository } from "../repositories/registration.repository";
import { post, get, requestBody } from "@loopback/rest";
import { Registration } from "../models/registration";

export class RegistrationController {
  constructor(
    @repository(RegistrationRepository.name) private registrationRepo: RegistrationRepository
  ) {}

  @post('/registration')
  async createRegistration(@requestBody() Registration: Registration) {
    return await this.registrationRepo.create(Registration);
  }

  @get('/registration')
  async getAllRegistration(): Promise<Array<Registration>> {
    return await this.registrationRepo.find();
  }
}
