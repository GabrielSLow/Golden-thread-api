import { Entity } from '@loopback/repository';
export declare class Charities extends Entity {
    id?: number;
    name: string;
    slogan: string;
    about: string;
    contactus: string;
    getId(): number | undefined;
}
