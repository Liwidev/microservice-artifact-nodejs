/**
 * @typedef Point
 * @property {integer} x.required
 * @property {integer} y.required - Some description for point - eg: 1234
 * @property {string} color
 * @property {enum} status - Status values that need to be considered for filter - eg: available,pending
 */

export class Point {
    x:number;
    y:number;
    color:string;
    status:Enumerator;
    constructor(x:number, y:number, color:string, status:Enumerator){
        this.x = x;
        this.y = y;
        this.color = color;
        this.status = status;
    }
}