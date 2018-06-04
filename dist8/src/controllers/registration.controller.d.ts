import { RegistrationRepository } from "../repositories/registration.repository";
import { Registration } from "../models/registration";
export declare class RegistrationController {
    private registrationRepo;
    constructor(registrationRepo: RegistrationRepository);
    createRegistration(Registration: Registration): Promise<Registration>;
    getAllRegistration(): Promise<Array<Registration>>;
}
