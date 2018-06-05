import { CharitiesRepository } from "../repositories/charities.repository";
import { Charities } from "../models/charities";
export declare class CharitiesController {
    private charitiesRepo;
    constructor(charitiesRepo: CharitiesRepository);
    findCharities(): Promise<Charities[]>;
    findCharitiesById(id: number): Promise<Charities>;
}
