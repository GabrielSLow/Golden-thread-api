// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { CharitiesRepository } from "../repositories/charities.repository";
import { post, requestBody } from "@loopback/rest";
import { Charities } from "../models/charities";
import {
    HttpErrors,
    get,
    param,
} from '@loopback/rest';


export class CharitiesController {
    constructor(
    @repository(CharitiesRepository.name) private charitiesRepo: CharitiesRepository
    ) { }

    // @post('/charities')
    // async createCharities(@requestBody() charities: charities) {
    //     return await this.charitiesRepo.create(charities);
    // }

    @get('/charities')
    async findCharities(): Promise<Charities[]> {
        return await this.charitiesRepo.find();
    }


    @get('/charities/{id}')
    async findCharitiesById(@param.path.number('id') id: number): Promise<Charities> {
      // Check for valid ID
      let charityExists: boolean = !!(await this.charitiesRepo.count({ id }));

      if (!charityExists) {
        throw new HttpErrors.BadRequest(`charity ID ${id} does not exist`);
      }

      return await this.charitiesRepo.findById(id);
}

    }