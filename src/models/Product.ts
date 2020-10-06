import { Point } from './Point';
/**
 * @typedef Product
 * @property {integer} id
 * @property {string} name.required - Some description for product
 * @property {Array.<Point>} Point
 */

export class Product {
    id:number;
    name:string;
    point:Point;
    constructor(id:number, name:string, point:Point){
        this.id = id;
        this.name = name,
        this.point = point
    }
}