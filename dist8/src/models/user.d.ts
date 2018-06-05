import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    username: string;
    password: string;
    getId(): number | undefined;
}
