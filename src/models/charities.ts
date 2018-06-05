import {Entity, property, model} from '@loopback/repository';

@model()
export class Charities extends Entity {
@property({
    type: 'number',
    id: true
})
id?: number;

    @property({
        type: 'string'
    })
name: string

@property({
    type: 'string'
})
slogan: string;

@property({
    type: 'string'
})
about: string;

@property({
    type: 'string'
})
contactus: string;

getId() {
    return this.id;
}

}