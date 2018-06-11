import {Entity, property, model} from '@loopback/repository';

@model()
export class Registration extends Entity {
@property({
    type: 'number',
    id: true
})
id?: number;

@property({
    type: 'string'
})
email: string

    @property({
        type: 'string'
    })
phonenumber: string

@property({
    type: 'string'
})
username: string;

@property({
    type: 'string'
})
password: string;

getId() {
    return this.id;
}

}