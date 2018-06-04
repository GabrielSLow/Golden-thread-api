import {Entity, property, model} from '@loopback/repository';

@model()
export class Login extends Entity {
@property({
    type: 'number',
    id: true
})
id?: number;

    @property({
        type: 'string'
    })
username: string

@property({
    type: 'string'
})
password: string;

getId() {
    return this.id;
}

}